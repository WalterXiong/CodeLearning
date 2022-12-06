# Synchronized 原理剖析



## synchronized 的使用场景

- 方法
    - 静态方法：`public static synchronized void doSth() { ... }`
    - 实例方法：`public synchronized void doSth() { ... };`
- 代码块
    - 实例对象：`synchronized(this) { ... };`
    - class 对象：`synchronized(Object.class) { ... };`



## 第一层，synchronized使用

### synchronized 修饰方法

```java
public synchronized void doSth() {
    System.out.printf("test synchronized method");
}
```

我们将这段代码反编译，可得到：

==// todo 截图==

从图中代码可以看出添加了 synchtonized 修饰的方法，在 JVM 方法访问标识符（flag）中多加入了 ACC_SYNCHRONIZED 来实现同步功能。



### synchronized 修饰代码块

```java
public class SynchronizedTest {
    
    public void doSth() {
        synchronized(SynchronizedTest.class) {
			System.out.printf("test synchronized codeBody");
        }   
    }
}
```

反编译，如下：

==// todo 截图==

从图中代码可以看出添加了 synchtonized 修饰的代码块儿，反编译出的 JVM 指令中多加入了 **`monitorenter`** 和 **`monitorexit`** 两行指令。即 JVM 通过这个两个新加入的指令来实现同步功能。

那么这个时候有靓仔要问了：**`monitorenter`** 、 **`monitorexit`** 这个两个指令以及 **`ACC_SYNCHRONIZED`** 访问标识符，是如何让保证同步的呢？我们接着开启第二层的探索。



## 第二层，JVM 指令~（monitorenter、monitorexit、ACC_SYNCHRONIZED）~

### monitorenter

有兴趣的同学可以看下官方定义：[monitorenter指令介绍](https://link.juejin.cn/?target=https%3A%2F%2Fdocs.oracle.com%2Fjavase%2Fspecs%2Fjvms%2Fse8%2Fhtml%2Fjvms-6.html%23jvms-6.5.monitorenter)

> #### Description
>
> The *objectref* must be of type `reference`.
>
> Each object is associated with a monitor. A monitor is locked if and only if it has an owner. The thread that executes *monitorenter* attempts to gain ownership of the monitor associated with *objectref*, as follows:
>
> - If the entry count of the monitor associated with *objectref* is zero, the thread enters the monitor and sets its entry count to one. The thread is then the owner of the monitor.
> - If the thread already owns the monitor associated with *objectref*, it reenters the monitor, incrementing its entry count.
> - If another thread already owns the monitor associated with *objectref*, the thread blocks until the monitor's entry count is zero, then tries again to gain ownership.

emmmmmmm... 我还是谷歌吧：

> 每个对象都与一个监视器（**monitor 对象**）相关联。当且仅当 monitor 具有所有者（被某条线程拥有）时，monitor 才会被锁定。执行 monitorenter 的线程，会尝试获得与 objectref（对象引用，这里也就是 monitor 的引用） 关联的 monitor 的所有权，如下所示：
>
> 如果与 objectref 关联的监视器的条目计数为 0，则线程进入监视器并将其条目计数设置为 1。
>
> 如果线程已经拥有与 objectref 关联的监视器，它会重新进入监视器，并增加其条目计数。
>
> 如果另一个线程已经拥有与 objectref 关联的监视器，则该线程将阻塞，直到监视器的条目计数为零，然后再次尝试获得所有权。



### monitorexit

[monitorexit指令介绍](https://link.juejin.cn/?target=https%3A%2F%2Fdocs.oracle.com%2Fjavase%2Fspecs%2Fjvms%2Fse8%2Fhtml%2Fjvms-6.html%23jvms-6.5.monitorexit)

> #### Description
>
> The *objectref* must be of type `reference`.
>
> The thread that executes *monitorexit* must be the owner of the monitor associated with the instance referenced by *objectref*.
>
> The thread decrements the entry count of the monitor associated with *objectref*. If as a result the value of the entry count is zero, the thread exits the monitor and is no longer its owner. Other threads that are blocking to enter the monitor are allowed to attempt to do so.

译文：

> 执行 *monitorexit* 的线程必须是与 *objectref* 引用的实例关联的监视器的所有者（就是 monitor 的拥有者）。
>
> 线程执行 monitorexit 指令会让 monitor 的计数器减 1。如果结果条目计数的值为 0，则线程退出监视器并且不再是其所有者（不再拥有 monitor）。其他阻塞尝试获取 monitor 的线程就允许去获取 monitor 了。



### ACC_SYNCHRONIZED

[ACC_SYNCHRONIZED介绍](https://link.juejin.cn/?target=https%3A%2F%2Fdocs.oracle.com%2Fjavase%2Fspecs%2Fjvms%2Fse8%2Fhtml%2Fjvms-2.html%23jvms-2.11.10)

> Method-level synchronization is performed implicitly, as part of method invocation and return ([§2.11.8](https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-2.html#jvms-2.11.8)). A `synchronized` method is distinguished in the run-time constant pool's `method_info` structure ([§4.6](https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.6)) by the `ACC_SYNCHRONIZED` flag, which is checked by the method invocation instructions. When invoking a method for which `ACC_SYNCHRONIZED` is set, the executing thread enters a monitor, invokes the method itself, and exits the monitor whether the method invocation completes normally or abruptly. During the time the executing thread owns the monitor, no other thread may enter it. If an exception is thrown during invocation of the `synchronized` method and the `synchronized` method does not handle the exception, the monitor for the method is automatically exited before the exception is rethrown out of the `synchronized` method.

> 方法级同步是隐式执行（用户感知不到）的，作为方法调用和返回的一部分。
>
> 同步方法在运行时常量池的 method_info 结构中通过 ACC_SYNCHRONIZED 标志进行区分，该标志由方法调用指令检查。
>
> 当调用设置了 ACC_SYNCHRONIZED 的方法时，执行线程进入监视器，调用方法本身，然后退出监视器，无论方法调用是正常完成还是突然完成。
>
> 在执行线程拥有监视器期间，没有其他线程可以进入它。
>
> 如果在调用 synchronized 方法时抛出异常，并且 synchronized 方法没有处理该异常，则在 synchronized 方法重新抛出异常之前自动退出该方法的监视器。



### synchronized 第二层小结

1. 同步代码块是通过执行 monitorenter 和 monitorexit 指令来实现的。当线程执行到 monitorenter 时要获取 monitor 锁，才能执行下面的代码。当线程执行到 monitorexit 时要释放 monitor 锁。
2. 同步方法时通过 JVM 方法访问标识符 ACC_SYNCHRONIZED 来实现的。当线程调用带有  ACC_SYNCHRONIZED 标识符的方法时获取 monitor 锁，方法执行完后释放锁。
3. 不论是同步代码块，还是同步方法，同步都是通过 monitor 来实现的。
4. 每个对象都与一个 monitor 相关联，线程可以拥有或者释放 monitor。
5. 每个对象都维护有一个锁计数器，计数器为 0 时表示可以被任意线程获取，反之不为 0 时，只有当前获得锁的线程才能再次获得锁，其他线程将会阻塞等待锁的释放。

OK，到这里我们知道了同步方法和同步代码块的基本实现原理。这个时候又有靓仔要问了：上面我们反复提到 monitor，那么：

- **monitor 到底是什么东西呢？**

- **为什么它可以实现同步？**

- **对象和 monitor 之间是怎样关联的？**

带着这些问题我们继续



## 第三层，monitor 监视器

### 操作系统管程

管程 (英语：Monitors，也称为监视器) 是一种程序结构，结构内的多个子程序（对象或模块）形成的多个工作线程互斥访问共享资源。

简单地说管程就是一个概念，任何语言都可以实现。目的就是为了简化同步调用的过程。



### ObjectMonitor

JVM 中的同步就是基于进入和退出管程（Monitor）对象实现的。每个对象实例都会有一个 Monitor，Monitor 可以和对象一起创建、销毁。



#### ObjectMonitor 数据结构

在 Java 中 Monitor 是由 ObjectMonitor 实现，而 ObjectMonitor 是由（JVM 源码中 C++） 的 ObjectMonitor.hpp 文件实现。我们可以看作它是对互斥量和信号量的封装即可。如下所示：

```java
ObjectMonitor() {
	_header       = NULL;
    _count        = 0; 		
    _waiters      = 0,
    _recursions   = 0;
    _object       = NULL;
    _owner        = NULL;	
    _WaitSet      = NULL;	
    _WaitSetLock  = 0 ;
    _Responsible  = NULL ;
    _succ         = NULL ;
    _cxq          = NULL ;
    FreeNext      = NULL ;
    _EntryList    = NULL ;	
    _SpinFreq     = 0 ;
    _SpinClock    = 0 ;
    OwnerIsThread = 0 ;
}
```

几个比较重要的属性：

- `_count`：记录 owner 线程获取锁的次数，这句话很好理解，这也决定了 synchronized 是**可重入**的。
- `_owner`：指向拥有该对象的线程。
- `_recursions`：锁的重入次数。
- `_WaitSet`：处于 **wait** 状态的线程，会被加入到 `_WaitSet` 队列。
- `_EntryList`：处于 **block（等待锁 ）** 状态的线程，会被加入到 `_EntryList` 队列。

前三个属性都比较好理解，对于后面两个队列我们可以举例说明：

![image-20221204152007002](https://cdn.jsdelivr.net/gh/WalterXiong/typora-img/img/202212041520075.png)



#### 运作机理

**Monitor 是依靠底层操作系统的 Mutex Lock 来实现互斥的，线程申请 Mutex 成功，则持有该 Mutex，其它线程将无法获取到该 Mutex。**

如图：

![image-20221204161649889](https://cdn.jsdelivr.net/gh/WalterXiong/typora-img/img/202212041616952.png)

1. 想要获取 monitor 的线程进入 monitor 的 _EntryList 队列（即遇到同步关键组字时）阻塞等待。
2. 当 monitor 的 _owner 为空表示线程可以获取该 monitor 对象，则从 _EntryList 队列中将其移出，并将其赋值给 monitor 的 _owner 属性，同时对象的锁计数器 +1。==（进入上图的 _Owner 区域，这时候线程开始执行同步区中的代码）==
3. 如果线程在执行期间调用了 wait() 方法，则线程会进入 _WaitSet 队列。线程调用 wait() 方法会释放 monitor 锁，即将 monitor 的 _owner 属性赋值为 null，同时锁计数器 -1，进入 _WaitSet 队列阻塞等待。此时其他位于 _EntryList 队列中的线程就可以获取锁了。
4. 如果程序中的其他线程调用 notify() / notifyAll() 方法 ，会唤醒 _WaitSet 队列中的某个线程，该线程再次尝试获取 monitor 锁，成功即进入 _Owner区域，即成为 monitor 的 _owner 属性。
5. 同步方法执行完毕，线程退出临界区，会将 monitor 的 _owner 赋值为 null，并释放监视锁（monitor ）。



我们可以知道其实上述的操作都对应了 ObjectMonitor 的方法。即 wait/notify/notifyAll 这些底层都是调用 ObjectMonitor 的方法而已，如下：

![img](https://upload-images.jianshu.io/upload_images/8694380-c4a60ba68bcc7704.png?imageMogr2/auto-orient/strip|imageView2/2/format/webp)



### 对象与 monitor 的关联

![img](https://upload-images.jianshu.io/upload_images/8694380-ac10c2a5c942c0f4.png?imageMogr2/auto-orient/strip|imageView2/2/format/webp)

图片结合上一篇 [线程同步与锁优化]() 一起看效果会更好。