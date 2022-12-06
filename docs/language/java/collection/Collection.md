---
title: Collection
category: Java
tag:
  - Java集合
date: 2020-06-19
original: isOriginal
---

# 集合 Collection 

## List

一个对象至少在内存中占据 16 个字节

### ArrayList

> 数据结构：底层基于数组队列
>
> 存放元素：有序
>
> 线程是否安全：不安全

#### 源码分析

```java
public class ArrayList<E> extends AbstractList<E> implements List<E>, RandomAccess, Cloneable, java.io.Serializable {
    
}
```

首先看到的是 `ArrayList` 继承了一个 `AbstractList` 抽象类（模板类）`ArrayList ` 中的操作可以直接继承这个模板类的操作，可以重写；

然后 `ArrayList` 实现了好几个接口，`List`（List 的顶层接口）、`RandomAccess`、`Cloneable`、`Serializable`（后三个都为标记接口）。

#### 标记接口

标记接口里面是没有方法（也就是空接口），作用就是标记一下实现该接口的类具备某种属性。（其作用与注解有异曲同工之妙 ）

- `RandomAccess`：表明实现这个接口的 List 集合是支持**快速随机访问**如下：

  RandomAccess 接口：

  ```java
  public interface RandomAccess {
  }
  ```

  `ArrayList` 中，我们可以通过元素的序号来快速的获取元素对象，比如：

  ``` java
  List<String> strList = new ArrayList("小明", "小张");
  strList.get(1)；// 小张
  ```

  持随机访问的集合大部分是由数组实现的，并且`JVM` 在遍历就会使用 for 循环，反之会使用迭代器便利；

- `Cloneable`：实现这个接口既覆盖了 `clone()`方法，表示集合可以被克隆，List 的拷贝又分为`浅拷贝`和`深拷贝`两种：

  **浅拷贝**：直接使用 Object 中的 clone() 方法（拷贝出的对象不是独立的对象）

  ```java
  public class Demo1 implements Cloneable{
  
      //List<Object> list = new ArrayList<>();
      private String name;
      private int age;
      private Study study;
      private int[] i;
  
      @Override
      protected Object clone() throws CloneNotSupportedException {
          Demo1 d = (Demo1) super.clone();
          return d;
      }
  
      public static void main(String[] args) throws CloneNotSupportedException {
  
          Demo1 oldDemo = new Demo1();
          oldDemo.setName("xiongjun");
          oldDemo.setAge(25);
          oldDemo.setI(new int[]{1, 2, 3, 4});
          oldDemo.setStudy(new Study("英语", 99));
  
          Demo1 newDemo = (Demo1) oldDemo.clone();
          oldDemo.getStudy().setScore(1000);
          oldDemo.setAge(22);
  
          System.out.println("old age：" + oldDemo.getAge());
          System.out.println("new age：" + newDemo.getAge());
          System.out.println("old study：" + oldDemo.getStudy().getScore());
          System.out.println("new study：" + newDemo.getStudy().getScore());
          
          /*
           * 输出结果：
           * 可以看的出来，再拷贝了之后的得到的 newDemo 对象中的 Study 类的 score 属性是受 OldDemo 对象中的 改变而改变的，但是两个类中的 int 却是相互独立的，
           */
          // old age：22
          // new age：25
          // old study：1000
          // new study：1000
      }
  }
  ```

  **深拷贝**：Arraylist 使用了 Arrays.copyOf() 方法

  ArrayList clone() 源码 

  ```java
  public Object clone() {
  	try {
      	ArrayList<?> v = (ArrayList<?>) super.clone();
      	v.elementData = Arrays.copyOf(elementData, size);
      	v.modCount = 0;
      	return v;
      } 
      catch (CloneNotSupportedException e) {
      	// this shouldn't happen, since we are Cloneable
      	throw new InternalError(e);
      }
  }
  ```

  点进 Arrays.copyOf() 我们可以看到，copyOf 方法是重新 new 了一个 Object[] 对象，再进行的数组的复制 System.arraycopy() 是基于 C 语言实现的，嘻嘻。。。

  ```java
  @SuppressWarnings("unchecked")
  public static <T> T[] copyOf(T[] original, int newLength) {
      return (T[]) copyOf(original, newLength, original.getClass());
  }
  
  public static <T,U> T[] copyOf(U[] original, int newLength, Class<? extends T[]> newType) {
      @SuppressWarnings("unchecked")
      // 先判断一下传进来的是不是数组类型，如果是的话返回一个 新的和原数组一样长的数组
      T[] copy = ((Object)newType == (Object)Object[].class)
          ? (T[]) new Object[newLength]
          : (T[]) Array.newInstance(newType.getComponentType(), newLength);
      // 再进行数组的复制
      System.arraycopy(original, 0, copy, 0,
                       Math.min(original.length, newLength));
      return copy;
  }
  ```

- `Serializable` ：实现这个接口的集合支持序列化，能够通过序列化流去传输，`SerialVersionUID`：是类文件的指纹（签名/MD5）；

#### 全局变量分析

```java
/**
 * 默认初始容量
 */
private static final int DEFAULT_CAPACITY = 10;

/**
 * 空数组，用于赋值给空的实例
 */
private static final Object[] EMPTY_ELEMENTDATA = {};

/**
 * 一个共享的空的数组实例，用于赋值给空的对象实例.
 * 我们将这个数组和 EMPTY_ELEMENTDATA（上面那个数组区分开），
 * 以便了解数组在第一次添加元素的时候如何去扩容
 */
private static final Object[] DEFAULTCAPACITY_EMPTY_ELEMENTDATA = {};

/**
 * 这是一个保存 ArrayList 数据的数组
 */
transient Object[] elementData; // non-private to simplify nested class access

// 当前集合中元素的个数
private int size;

// 数组分配的最大长度，-8 的原因是，需要 8 个字节来记录这个数组的长度
private static final int MAX_ARRAY_SIZE = Integer.MAX_VALUE - 8;
```



#### 构造方法

```java
/**
 * 带初始容量参数的构造函数（用户可以在创建ArrayList对象时自己指定集合的初始大小）
 */
public ArrayList(int initialCapacity) {
    if (initialCapacity > 0) {
        //如果传入的参数大于0，创建initialCapacity大小的数组
        this.elementData = new Object[initialCapacity];
    } else if (initialCapacity == 0) {
        //如果传入的参数等于0，创建空数组
        this.elementData = EMPTY_ELEMENTDATA;
    } else {
        //其他情况，抛出异常
        throw new IllegalArgumentException("Illegal Capacity: "+
                                           initialCapacity);
    }
}

/**
 *默认无参构造函数
 *DEFAULTCAPACITY_EMPTY_ELEMENTDATA 为0.初始化为10，也就是说初始其实是空数组 当添加第一个元素的时候数组容量才变成10
 */
public ArrayList() {
    this.elementData = DEFAULTCAPACITY_EMPTY_ELEMENTDATA;
}

/**
 * 构造一个包含指定集合的元素的列表，按照它们由集合的迭代器返回的顺序。
 */
public ArrayList(Collection<? extends E> c) {
    //将指定集合转换为数组
    elementData = c.toArray();
    //如果elementData数组的长度不为0
    if ((size = elementData.length) != 0) {
        // 如果elementData不是Object类型数据（c.toArray可能返回的不是Object类型的数组所以加上下面的语句用于判断）
        if (elementData.getClass() != Object[].class)
            //将原来不是Object类型的elementData数组的内容，赋值给新的Object类型的elementData数组
            elementData = Arrays.copyOf(elementData, size, Object[].class);
    } else {
        // 其他情况，用空数组代替
        this.elementData = EMPTY_ELEMENTDATA;
    }
}
```



#### 扩容机制

首先看 `add()`方法

```java
/**
* 添加一个具体的值到列表的末尾
* Appends the specified element to the end of this list.
* 
* 参数 e 是要被加如集合中的元素
* 成功则返回 真
* @param e element to be appended to this list
* @return <tt>true</tt> (as specified by {@link Collection#add})
*/
public boolean add(E e) {
	// 添加元素需要先确保集合的容量是否够用（我们点进去，往下看进一步分析）
    // 将集合需要的最小容量（现在的元素个数（size） + 一个将要存进去的个数） 传进去
	ensureCapacityInternal(size + 1);
    
	elementData[size++] = e;
	return true;
}
```

接着看`ensureCapacityInternal()`

```java
private void ensureCapacityInternal(int minCapacity) {
    // 在拿到集合需要的最小容量之后，调用了下面两个方法
    // 先把当前的数组，和需要最小容量传进去 计算需要的空间，再将返回值传给确认准确的容量方法
	ensureExplicitCapacity(calculateCapacity(elementData, minCapacity));
}

// 计算容量
private static int calculateCapacity(Object[] elementData, int minCapacity) {
    //先看当前的数组是不是 DEFAULTCAPACITY_EMPTY_ELEMENTDATA 这个类型，就是看当前数组是用什么构造函数构造的，这个是调用空参构造函数创建的
    if (elementData == DEFAULTCAPACITY_EMPTY_ELEMENTDATA) {
        // 如果是空参创建的就把 默认容量和需要的最小容量比较，返回他们之中最大的
        return Math.max(DEFAULT_CAPACITY, minCapacity);
    }
    // 若不是空间构造的，那么就直接返回 需要的最小容量
    return minCapacity;
}

//确认准确的容量
private void ensureExplicitCapacity(int minCapacity) {
    //拿到明确的需要的额容量大小之后，让 modCount++
    // modCount 是一个计数器（确保快速失败机制的有效运行，下面也会讲到）
    modCount++;

	// 让需要的最小容量和当前数组的长度相减
    // 如果 > 0 说明当前的数组容量不够需要扩容
    // 如果 = 0 说明当前的数组容量刚好不需要扩容
    // 如果 < 0 说明当前的数组容量充足不需要扩容
	if (minCapacity - elementData.length > 0)
        // 终于到了我们的核心 扩容代码了
		grow(minCapacity);
}
```

扩容 `grow()`

```java
/**
 * Increases the capacity to ensure that it can hold at least the
 * number of elements specified by the minimum capacity argument.
 *
 * @param minCapacity the desired minimum capacity
 */
private void grow(int minCapacity) {
    // 先获取没有添加元素之前数组的长度为：老容量
    int oldCapacity = elementData.length;
    // 新的容量 = 老容量 + 老容量/2
    int newCapacity = oldCapacity + (oldCapacity >> 1);
    
    // 让新的容量 和 需要的容量对比
    if (newCapacity - minCapacity < 0){
        // 如果新的容量 < 所需的容量，那么将所需的容量赋给新容量
    	newCapacity = minCapacity;
    }
    // 让新容量和数组的最大容量相比较
    if (newCapacity - MAX_ARRAY_SIZE > 0){
        // 如果新的容量比数组的最大容量还大，就肯定是越界了，
        // 直接将 需要的最小容量传入 hugeCapacity() 中去获得最大的容量
    	newCapacity = hugeCapacity(minCapacity);
    }
    // 确认了容量之后，调用数组拷贝方法将现在的数组的值拷贝到一个独立的新数组中去。
    // 然后让当前elementData 指向新数组，就完成了扩容
    elementData = Arrays.copyOf(elementData, newCapacity);
}

private static int hugeCapacity(int minCapacity) {
    if (minCapacity < 0){ // overflow
        throw new OutOfMemoryError();
    }
    // 如果需要的最小容量 比 默认的 最大容量还大，那么返回整型的最大值，否则返回默认的最大容量
    return (minCapacity > MAX_ARRAY_SIZE) ? Integer.MAX_VALUE : MAX_ARRAY_SIZE;
}
```



#### 迭代器

迭代器是以内部类的形式实现的，迭代器中就体现了快速失败 （`fail-fast`） 机制

```java
public Iterator<E> iterator() {
	return new Itr();
}

private class Itr implements Iterator<E> {
    int cursor;       		// 游标，记录下一个要返回元素的下标
    int lastRet = -1; 		// 记录最后一个元素的下标，没有的话返回 -1
    int expectedModCount = modCount; 
    // 迭代器里的计数器，当调用迭代器的时候就吧 当前集合的计数器赋值给它
    // modeCound 是从父类 AbstractList 中继承来的，集合元素变化 modCound 就会跟着变化

    Itr() {}
	
    public boolean hasNext() { return cursor != size; }

    @SuppressWarnings("unchecked")
    public E next() {
        
    	checkForComodification(); // 这个就是快速失败机制
        
    	int i = cursor;
    	if (i >= size){
    		throw new NoSuchElementException();
    	}
    	Object[] elementData = ArrayList.this.elementData;
    	if (i >= elementData.length){
    		throw new ConcurrentModificationException();
    	}
    	cursor = i + 1;
    	return (E) elementData[lastRet = i];
    }

    public void remove() {
    	if (lastRet < 0){
    		throw new IllegalStateException();
    	}
    	checkForComodification();

    	try {
    		ArrayList.this.remove(lastRet);
	    	cursor = lastRet;
    		lastRet = -1;
    		expectedModCount = modCount;
    	} catch (IndexOutOfBoundsException ex) {
    		throw new ConcurrentModificationException();
    	}
    }

    @Override
    @SuppressWarnings("unchecked")
    public void forEachRemaining(Consumer<? super E> consumer) {
    	Objects.requireNonNull(consumer);
    	final int size = ArrayList.this.size;
    	int i = cursor;
    	if (i >= size) {
    		return;
    	}
    	final Object[] elementData = ArrayList.this.elementData;
    	if (i >= elementData.length) {
    		throw new ConcurrentModificationException();
    	}
    	while (i != size && modCount == expectedModCount) {
    		consumer.accept((E) elementData[i++]);
    	}
    	// update once at end of iteration to reduce heap write traffic
    	cursor = i;
    	lastRet = i - 1;
    	checkForComodification();
    }

    // 快速失败机制的具体实现
    final void checkForComodification() {
    	if (modCount != expectedModCount)
    		throw new ConcurrentModificationException();
    }
}
```

> 在调用迭代器对集合进行迭代操作的同时，如果对集合中元素做增删，迭代器是无法感知的，这个时候就会出现问题，那么怎么解决呢？这个时候就需要用到 `modCount` 来实现的快速失败机制，来避免不必要的操作。
>
> 比如：我们用迭代器遍历这个集合，在此过程中我们删除集合中某个元素
>
> ```java
> public static void main(String[] args) {
> 	List<Integer> list = new ArrayList<>();
> 
> 	list.add(1);
> 	list.add(2);
> 	list.add(3);
> 
>  // 获取迭代器，这个时候 expectedModCount = modCount（3），expectedModCount 的值为 3 
> 	Iterator iterator = list.iterator();
> 	while (iterator.hasNext()){
> 
>      /**
>          * 在迭代器遍历，这里当条件满足 value 等于 2 时，集合中删除一个元素，这个时候
>          * modCount（3）会随着元素减一变为 modCount（2）；在下次循环进来 迭代器调用 
>          * next() 方法时，可以看上面的源码，方法中会首先调用 checkForComodification()
>          * 方法来校验 expectedModCount 和 modCount 是否相等，显然在在删除操作后，前者
>          * 等于 3，后者等于 2，3!=2 所以引发快速失败机制，直接抛出 
>          * ConcurrentModificationException 异常，后面的操作不能再继续
>          */
> 		Integer value = (Integer) iterator.next();
>         if (value == 2){
> 			list.remove(1);
> 		}
> 		System.out.println(value);
> 	}
> }
> 
> // 运行以上代码就会抛出这个异常
> /**
>  * Exception in thread "main" java.util.ConcurrentModificationException
>  *	 at java.util.ArrayList$Itr.checkForComodification(ArrayList.java:911)
>  *	 at java.util.ArrayList$Itr.next(ArrayList.java:861)
>  *	 at com.list.arraylist.Demo1.main(Demo1.java:87)
>  */
> ```

#### spliterator 并行迭代器

```

```



#### 补充

##### Arrays.aslist() 踩坑

```java
List list = Arrays.asList(a);
```

> 采用这种方式创建集合需要注意：
>
> 1. 传入 `asList()` 中的数组必须是`引用类型`的数组，`基本数据类型`的数组会`出错`。
>
>    比如：  `Long array = new Long[]{1L, 2L, 3L};`
>
>    而不是：`long array = new long[]{1L, 2L, 3L}; `
>
> 原因是：Java 中的自动装拆箱机制对数组是不起作用的
>
> 2. 这种方式创建集合和 `List list = new ArrayList()`创建出的集合是不一样的，`Arrays.asList(a)`出的集合是 `Arrays`类自己在自己中以内部类的形式实现的 `ArrayList`，里面没有实现过多的方法。

##### 不可变集合

```java
List list1 = Collections.unmodifiableList(list);
```

> 使用 `Collections` 中的 `unmodifiableList()` 方法将集合传入进去，转为不可变的集合（`只读`集合），不能更改集合中的元素，只能读取



### ArrayList 和 Vector 的区别

1. `ArrayList` 是 `list` 的主要实现类，底层使用 `Object[ ]` 存储，适用于频繁查找操作，线程不安全；
2. `Vector` 是 `List` 的古老实现类，底层使用 `Object[ ]` 存储，线程安全（*所有的操作方法上都有 `synchronized` 关键字修饰*）；
3. 扩容机制不同
   - `ArrayList`扩容是原来的`1.5`倍；
   - `vector`扩容（默认）是原来的`2`倍，`capacityIncrement`可以自定义每次扩容的容量



### ArrayList 和 LinkedList 的区别

1. **底层数据结构**：
   - `ArrayList`  底层基于数组；
   - `LinkedList` 底层基于双向链表（jdk1.6 之前为循环链表，1.7 之后取消了循环）；
2. **线程是否安全**：两者都不保证线程安全。
3. **插入和删除元素是否受位置影响**：
   - `ArrayList`  受位置影响
   - `LinkedList`不受位置影响（指定位置除外）
4. **是否支持快速随机访问**：
   - `ArrayList`  支持
   - `LinkedList`不支持
5. **内存空间占用**：
   - `ArrayList`  存在一定的内存空间浪费，数组会预留一定的长度；
   - `LinkedList`主要体现在，存储的每一个元素会比`ArrayList`中的元素大（因为要存前驱后继的数据）



### CopyOnwriteArrayList（线程安全）



---



## Set

### HashSet（无序，唯一）

-  HashMap 实现的，底层用 HashMap 来保存元素

### LinkedHashSet

- 是 HashSet 的子类，内部是通过 LinkedHashMap 来实现的。

### TreeSet（有序，唯一）

- 红黑树



---



## Queue

### PriorityQueue

- 用数组来实现的二叉树

### ArrayQueue

- 数组 + 双指针