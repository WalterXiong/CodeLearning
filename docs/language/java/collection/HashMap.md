---
title: HashMap
category: Java
tag:
  - Java集合
date: 2020-07-19
original: isOriginal
---

# HashMap
一直没时间静下心来好好看看 HashMap 的源码，择日不如撞日，今儿来浅炫一口，哈哈哈~

![img](https://cdn.jsdelivr.net/gh/WalterXiong/typora-img/img/202209141419261.png)

## 特点

- 实现了 Map 接口，即允许放入 key 为 null 得元素，也允许放入 value 为 null 得元素；

- 不保证放入元素得顺序；

- hash 冲突处理方式为：冲突链表方式。

  

## 底层数据结构

数组 + 链表 + 红黑树



## 瞅瞅代码

### 1. hash 扰动

```java
static final int hash(Object key) {
    int h;
    return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
}
```

简单看来，当 key 为空时返回 0，否则返回一个 key 的 hash 值异或 key 的 hash 值无符号右移（下面简称 “右移”） 16 位的一个整形数；那么为什么计算出了 hash 还要让 hash ^ 自己右移 16 位来去最终值呢？这里可能有的朋友就会说，啊！这题我会！我先来：“因为这样可以更有效的减少 hash 碰撞，让元素再桶中分布的更均匀”。虽然但是，这位不知名的朋友说的没错，的确是这样的，那么请问哪里可以买的到呢？……呸，那么为什么这样做就能有效的减少 hash 碰撞呢？额，要开始转杯了，首先我们来假设一下某个数异或自身右移 16 位的场景:

```java
0101 1010 1000 1000 1010 0011 0111 0100		// 数 A
0000 0000 0000 0000 0101 1010 1000 1000		// 右移 16 位之后的 A，我们记作 A16
                                       ^  // 异或
————————————————————————————————————————————
0101 1010 1000 1000 1111 1001 1111 1100		// 结果 hash
```

从上面的异或运算我们能发现 `A ^ A16` 的结果的高 16 位没有发生变化，因为右移 16 之后高位都补了零，异或时： `1 ^ 0 = 1`，`0 ^ 0 = 0`，至此好像并没有看出来做这个异或操作的必要性和它带来的显著的成果。这个时候不妨再来看看 HashMap 是怎么来计算元素在数组中的下标的：

```java
p = tab[i = (n - 1) & hash] // put() 源码中截取的
```

n 表示数组的长度，我们取 HashMap 的默认长度 16 来做个假设，那么 i = ( 16 - 1 ) & hash  ->  15 & hash（这里假设是一个数直接调用 hashCode() 生成的，并没有异或自己右移 16 位的 hash 码），计算一下子看看：

```java
1101 1011 1010 1100 1111 1001 1111 1100		// hash
0000 0000 0000 0000 0000 0000 0000 1111		// 15
                                        & // 与
————————————————————————————————————————————
0000 0000 0000 0000 0000 0000 0000 1100		// 结果（下标）
```

这时候我们不难发现，hash 原本的高 16 位信息很可能会被数组槽位的二进制码给屏蔽掉，说人话就是：因为15 的高 16 位全部为 0，所以 hash 原本的高 16 位的信息在经过上面的 & 运算之后，全部丢失了。这时候有的朋友可能会说，即便是丢失了高位的特征信息，不同的 hashcode 还是可以计算出不同的槽位来，但是假设有两个哈希值的低位十分接近而高位差异很大，那么这两个哈希值计算出得出的桶下标就会很接近，在插入 HashMap 中时就会在相邻得位置，这个样的话哈希碰撞的机率就会变大，从而影响哈希散列的效果。

> 插播一条一位不愿透露姓名的张一周先生的小 tips：
>
> 哈希扰动算法中使用异或，是因为 `^` 能更好的保留大部分的“特征”，因为，如果使用 `&` （与）运算，运算的结果会向 0 靠拢；`|`（或）运算的结果会向 1 靠拢。



### 2. 初始容量

```java
/**
 * The default initial capacity - MUST be a power of two.
 * 默认初始容量 - 必须是 2 的幂
 */
static final int DEFAULT_INITIAL_CAPACITY = 1 << 4; // aka 16
```

为什么 HashMap 的长度要是 2 的整数次幂呢？（结论：加快运算，减少 hash 碰撞

#### 为什么可以加快计算

我们都知道为了找到 key 的位置在哈希表的哪个槽里面，需要计算 **`hash(key) % 数组长度`**，**但是！`%` 计算比 `&` 慢很多**，所以用 `&` 代替 `%`，又为了保证 `&` 的计算结果等于 `%` 的结果需要把 length 减 1，也就是 **`hash(key) & (length - 1)`**

##### 小实验验证一下：

```java
public static void main(String[] args) {

    System.out.println("XJ!".hashCode()); // 86895 -> 0001 0101 0011 0110 1111
    
    int length = 65536;

    System.out.println( hashCode % length); // 21359
    
    System.out.println( hashCode & (length - 1)); // 21359
}
```



#### 为什么可以减少 hash 碰撞

既然我们已经知道计算槽位的公式，那我们就来个小小的实验。假设我们现在数组的长度 length 可能为奇数或者偶数

**length 为偶数时**，length-1 为奇数，奇数的二进制最后一位是 1，这样便保证了 hash &(length-1) 的最后一位可能为 0，也可能为 1（这取决于 hash 的值），即 & 运算后的结果可能为偶数，也可能为奇数，**这样便可以保证散列的均匀性**。

```java
// 例如：
length = 6，length - 1 = 5，5 的二进制为 101

hash = 2，hash 的二进制为 010

即 010 & 101 = 000（偶数位置）

hash = 3，hash 的二进制为 011

即 011 & 101 = 001 （奇数位置）
```

而如果 **length 为奇数**的话，很明显 length-1 为偶数，它的最后一位是 0，这样 hash & (length-1) 的最后一位肯定为 0，即只能为偶数，这样任何 hash 值都**只会被**散列到数组的**偶数下标位置**上，这便**浪费了近一半的空间**

```java
// 例如：
length = 3，length - 1 = 2，2 的二进制是 10

10 无论与什么数进行 & 运算，结果都是偶数
```

因此，length 取 2 的整数次幂，是为了使不同 hash 值发生碰撞的概率较小，这样就能使元素在哈希表中**均匀地散列**。



#### 初始化 HashMap 时对于你输入非2的次方的容量数，会怎么样？

小聪明是吧，这好吗？这不好。HashMap 不会让你们这么做的，实际上你给定的初始容量，HashMap 还会判断是不是2的次幂，如果不是，则给出一个大于给定容量的最小 2 的次幂的值作为新的容量。

```java
/**
 * Returns a power of two size for the given target capacity.
 */
static final int tableSizeFor(int cap) {
    int n = cap - 1;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    return (n < 0) ? 1 : (n >= MAXIMUM_CAPACITY) ? MAXIMUM_CAPACITY : n + 1;
}
```

这也验证了一个重要的编程思想：永远要把客户当成傻子。（噗嗤，耗子尾汁~



### 3. 加载因子

负载因子是扩充 table 的指标量，默认 0.75，当 Map 中 `entry（键值对）数量 / bins 总量（数组长度） > loadFactor` 时，扩容 table 到原来容量的两倍。

```java
/**
* The load factor used when none specified in constructor.
* 当构造函数中没有指定时加载的加载因子
*/
static final float DEFAULT_LOAD_FACTOR = 0.75f;
```

emmmm... 好像大家都喜欢问这个加载因子为什么要选择 0.75 为什么不是其他的数值，(⊙﹏⊙) 啊这... 我只能搬出源码中作者的注释（英文，有点难顶...

```java
/*
 * Ideally, under random hashCodes, the frequency of
 * nodes in bins follows a Poisson distribution
 * (http://en.wikipedia.org/wiki/Poisson_distribution) with a
 * parameter of about 0.5 on average for the default resizing
 * threshold of 0.75, although with a large variance because of
 * resizing granularity. Ignoring variance, the expected
 * occurrences of list size k are (exp(-0.5) * pow(0.5, k) /
 * factorial(k)). The first values are:
 *
 * 0:    0.60653066		// 加载因子 = 0.75时，bin 中链表长度 = 0，随机节点落入 bin 中的概率
 * 1:    0.30326533		// 加载因子 = 0.75时，bin 中链表长度 = 1，随机节点落入 bin 中的概率
 * 2:    0.07581633		// ...
 * 3:    0.01263606
 * 4:    0.00157952
 * 5:    0.00015795
 * 6:    0.00001316
 * 7:    0.00000094
 * 8:    0.00000006		// 加载因子 = 0.75时，bin 中链表长度 = 8，随机节点落入 bin 中的概率
 * more: less than 1 in ten million
 */
```

用我 82 年的塑料英语大概看了一下，咳咳咳，大致是说：理想情况下， hashcode 随机 ，加载因子为 0.75 的情况下，尽管由于粒度调整会产生较大的方差，节点的分布频率仍然会服从参数为 0.5 的[泊松分布 ( Poisson distribution )](http://en.wikipedia.org/wiki/Poisson_distribution)。同时给出了桶中元素个数和概率的对照表。从上面的表中可以看到当桶中元素到达8个的时候，发生的概率仅有 0.00000006，概率已经变得非常小。也就是说用 0.75 作为加载因子，每个碰撞位置的链表长度超过８个概率更是小于千万分之一，是几乎不可能的。

#### 加载因子能不能改一下 

改成 0.5 或者 1，会怎么样？能大于1吗？我们可以思考一下：

- 负载因子越小，数组扩容的频率就会变高，table（数组）增长的速度也就越快，相应出现 hash 碰撞的概率就越小，bin 中链表的长度越短，同时空间利用率低，table 看上去会非常稀疏。
- 负载因子越大，数组扩容的频率就会变低，table（数组）增长的速度也就越慢，相应出现 hash 碰撞的概率就越大，bin 中链表的长度越长，同时空间利用率高，table 看上去会非常稠密。

看图从直观上感觉 table 的稀疏程度:

![image-20220919140517784](https://cdn.jsdelivr.net/gh/WalterXiong/typora-img/img/202209191405699.png)

例如：

- 场景一：table 长度 = 10, 负载因子 = 0.1, 每加入一个元素就会扩容，浪费了空间，但一定不会出现碰撞；

- 场景二：如果将场景一中的负载因子修改为 1, 则加入 10 个元素后才会触发扩容，可想而知因为这 10 个元素是通过 hash % size 落入 table 中的，最理想的状态是每个 bulk 中落入一个元素，但几乎可以肯定的是，有的 bulk 中落入了两个或更多元素 (形成链表)，即出现了 hash 碰撞；
- 综上可以大于 1 但是不推荐大于 1。



### 4. put 分析

put() 和 get() 方法是大家使用 map 时最为熟悉的方法，先看看 put 因为 get 相对来说会简单很多。

```java
public V put(K key, V value) {
    return putVal(hash(key), key, value, false, true);
}

/**
 * Implements Map.put and related methods.
 *
 * @param hash 			key 的 hash 值
 * @param key  			要存入 map 的 key
 * @param value 		要存入 map 的 value
 * @param onlyIfAbsent 	如果是 true，那么只有在不存在该 key 时才会进行 put 操作
 * @param evict 		如果为 false，则表处于创建模式（不关心）
 * @return 				前一个值，如果没有的话就返回空
 */
final V putVal(int hash, K key, V value, boolean onlyIfAbsent, boolean evict) {
	
	Node<K,V>[] tab; 
	
	Node<K,V> p; 
	
	int n, i;
	
    // 第一次 put 值的时候，会触发下面的 resize() 里的初始化数组，从而获取数组的长度
    if ((tab = table) == null || (n = tab.length) == 0){
		n = (tab = resize()).length;
	}
    // 找当前 entry 在数组中计算出的的下标的位置
    // 如果此位置没有值，那么直接初始化一下 Node 并放置在这个位置就可以了
	if ((p = tab[i = (n - 1) & hash]) == null){
		tab[i] = newNode(hash, key, value, null);
	} 
    // 数组该位置有数据，表示存在冲突
    else { 
		Node<K,V> e; 
        
		K k; // 找到该位置上的元素值
		
        // 首先比较该位置上的第一个数据和我们将要插入的数据的 key 是否“相等”
		if (p.hash == hash &&
            ((k = p.key) == key || (key != null && key.equals(k)))) {
			
			e = p;
            
		}
        // 不然的话看该位置上的第一个数据是不是红黑树的节点，如果是，那么调用红黑树的插入方法进行插入值
		else if (p instanceof TreeNode) {
			e = ((TreeNode<K,V>)p).putTreeVal(this, tab, hash, key, value);
		} 
        else {
            // 到这以上情况都不满足，说明该位置要按照链表来进行处理
            // 遍历这个位置上的链表节点
			for (int binCount = 0; ; ++binCount) {
                // 如果没有下一个链表节点，就新建一个节点将这个 entry 放进去，尾插到链表上
				if ((e = p.next) == null) {
					p.next = newNode(hash, key, value, null);
					// 如果链表的长度 >= 8个元素时，那么将链表转换为红黑树（树化）
					if (binCount >= TREEIFY_THRESHOLD - 1) {// -1 for 1st
						treeifyBin(tab, hash);
					}
					
					break;
				}
				// 挨个判断当前要插入的元素 和 链表上的每个元素的 key 是否 “相等”
                // 如果 key 相等那么表示在 map 中存在 key 相用的元素，跳出遍历
				if (e.hash == hash && 
                    ((k = e.key) == key || (key != null && key.equals(k)))) {
					break;
				}
				
				p = e;
			}
		}
        
        // e!=null 说明存在旧值的 key 与要插入的key “相等”
        // 对于我们分析的put操作，下面这个 if 其实就是进行 "值覆盖"，然后返回旧值
		if (e != null) { // existing mapping for key
			V oldValue = e.value;
			if (!onlyIfAbsent || oldValue == null){
				e.value = value;
			}
			afterNodeAccess(e);
			return oldValue;
		}
	}
	++modCount;
	// 如果 HashMap 由于新插入这个值导致 size 已经超过了阈值，需要进行扩容
	if (++size > threshold) {
		resize();
	}
	afterNodeInsertion(evict);
	return null;
}
```



### 5. resize 分析

resize() 方法用于数组的**初始化**或者**扩容**，每次扩容完都是原来的 2 倍，并且进行数据迁移。

```java
final Node<K,V>[] resize() {
	
	// 将当前数组拿出来 赋值 给 oldTab
	Node<K,V>[] oldTab = table;
	
	// 如果 oldTab 是空，表示是第一次插入数据数组的容量（长度）为 0
	int oldCap = (oldTab == null) ? 0 : oldTab.length;
	
	// 数组扩容的临界值，第一次插入时也是 0
	int oldThr = threshold;
	
	// 新数组的容量，新的扩容临界值
	int newCap, newThr = 0;
	
	// 判断容量是否大于0，其实就是看当前数组是不是空的
	if (oldCap > 0) {
		
		if (oldCap >= MAXIMUM_CAPACITY) {
			threshold = Integer.MAX_VALUE;
			return oldTab;
		}
		else if ((newCap = oldCap << 1) < MAXIMUM_CAPACITY && 
                 oldCap >= DEFAULT_INITIAL_CAPACITY) {
			newThr = oldThr << 1; // double threshold
		}
	} 
	// 初始化容量为 0，但是阈值不为 0，对应使用 new HashMap(int initialCapacity) 初始化后，第一次 put 的时候
	else if (oldThr > 0) {
		newCap = oldThr;
	} 
	// 初始化容量为 0，但是阈值也为 0，对应使用 new HashMap() 初始化后，第一次 put 的时候
	else {               
		// 使用 默认的初始化容量 16
		newCap = DEFAULT_INITIAL_CAPACITY;
		// 使用 默认的容量 * 默认的负载因子（0.75） = 新的阈值 
		newThr = (int)(DEFAULT_LOAD_FACTOR * DEFAULT_INITIAL_CAPACITY);
	}
	
	if (newThr == 0) {
		float ft = (float)newCap * loadFactor;
		newThr = (newCap < MAXIMUM_CAPACITY && ft < (float)MAXIMUM_CAPACITY ? 
                  (int)ft : Integer.MAX_VALUE);
	}
	
	threshold = newThr;

	// 用上面新的数组大小 初始化一个 新的数组
	Node<K,V>[] newTab = (Node<K,V>[])new Node[newCap];
    
	// 如果只是初始化数组的话，那么到此结束，直接返回新的数组。
	table = newTab; 
	
	/*
	 * 以下为扩容 数据迁移的逻辑
	 */
	//如果当前操作的数组不为空 那么就开始 执行数据迁移的逻辑
	if (oldTab != null) {
		
		// 开始遍历原数组
		for (int j = 0; j < oldCap; ++j) { 
		
			Node<K,V> e; // 临时节点
			
			if ((e = oldTab[j]) != null) {
				
				oldTab[j] = null;
				
				// 如果该数组位置上只有一个元素，那就简单了，简单迁移这个元素就可以了
				if (e.next == null){
					newTab[e.hash & (newCap - 1)] = e;
				}
				// 否则看这个节点是不是树节点，如果是红黑树的树节点（留个坑 后续探究
				else if (e instanceof TreeNode) {
					((TreeNode<K,V>)e).split(this, newTab, j, oldCap);
				}
				// 非单个元素也不是树节点，那只能是链表
				// 需要将这条链表拆成两条新的链表
				else { // preserve order

					Node<K,V> loHead = null, loTail = null;
					Node<K,V> hiHead = null, hiTail = null;
					Node<K,V> next;
					
					do {
						next = e.next;
						
						// 判断该元素在旧数组中的位置（数组下标），是否与在新数组中的位置相同
						// 若下标不变，则将该元素放入一条以 loHead 为头节点的链表中
						// 反之将该元素放入一条以 hiHead 为头节点的链表
						if ((e.hash & oldCap) == 0) {
							
							if (loTail == null) {
								loHead = e;
							} 
							else {
								loTail.next = e;
							}
							loTail = e;
						}
						else {
							
							if (hiTail == null) {
								hiHead = e;
							}
							else {
								hiTail.next = e;
							}
							hiTail = e;
						}
						
					} while ((e = next) != null);
					
					if (loTail != null) {
						loTail.next = null;
						// 下标位置相同的元素链表
						newTab[j] = loHead;
					}
					
					if (hiTail != null) {
						hiTail.next = null;
						// 下标位置等于元素在旧数组中的下标加上就数组的长度的链表
						newTab[j + oldCap] = hiHead;
					}
				}
			}
		}
	}
	return newTab;
}
```



### 6. get 分析

相对于 put 来说，get 真的太简单了。

- 计算 key 的 hash 值，根据 hash 值找到对应数组下标：`hash & (length-1)`
- 判断数组该位置处的元素是否刚好就是我们要找的，如果不是，走第三步
- 判断该元素类型是否是 TreeNode，如果是，用红黑树的方法取数据，如果不是，走第四步
- 遍历链表，直到找到相等（`==`  或 `equals`）的 key

```java
public V get(Object key) {
    Node<K,V> e;
    return (e = getNode(hash(key), key)) == null ? null : e.value;
}

final Node<K,V> getNode(int hash, Object key) {
    
    // 接收当前数组
    Node<K,V>[] tab; 
    
    Node<K,V> first, e; 
    
    // 接收当前数组长度
    int n; 
    
    // 接收 entry 的 key 值
    K k;
    
    // 1️⃣ 如果当前数组不为空  并且 数组中存有元素 并且 要取得元素得 hash 计算出得数组下标得位置有值
    if ((tab = table) != null && (n = tab.length) > 0 &&
        (first = tab[(n - 1) & hash]) != null) {
        
        // 2️⃣ 判断第一个节点是不是就是需要的
        if (first.hash == hash && // always check first node
            ((k = first.key) == key || (key != null && key.equals(k)))) {
            return first;
        }
        if ((e = first.next) != null) {
            // 3️⃣ 判断第一个节点是不是红黑树节点
            if (first instanceof TreeNode) {
                return ((TreeNode<K,V>)first).getTreeNode(hash, key);
            }
            // 4️⃣ 遍历链表，直到找到链尾部，找到就返回 节点，否则返回 空
            do {
                if (e.hash == hash &&
                    ((k = e.key) == key || (key != null && key.equals(k)))) {
                    return e;
                }
            } while ((e = e.next) != null);
        }
    }
    return null;
}
```
ciao~ ๛ก(ｰ̀ωｰ́ก)
