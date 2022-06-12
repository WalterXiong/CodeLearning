---
title: 内存区域与内存溢出异常
category: Java
tag:
  - JVM
date: 2020-05-18
original: isOriginal
---

# JVM - 内存区域与内存溢出异常



## 运行时数据区

简图：

### 1. 程计数器

program counter register，

此内存区域是《Java 虚拟机规范》中唯一没有规定任何 OOM` (OutOfMemoryError)`的区域

### 2. 虚拟机栈

栈中基本的单位是栈帧，栈帧包含：操作数栈、局部变量表、动态链接、方法出口。虚拟机栈为虚拟机执行 Java 方法服务。

### 3. 本地方法栈

为虚拟机使用到的（Native）方法服务

### 4. 堆空间

也成为 GC（Garbage Collected Hop）堆 ；Java 中，“几乎”所有的对象都分配在堆上

字符串常量池

静态常量

### 5. 方法区

### 6. 运行时常量池L

### 7. 直接内存



## Hotspot 虚拟机对象探秘

### 1. 对象的创建过程

#### step1：类的加载检查

虚拟机在收到一个 new 指令之后，会首先检查指令带的参数在常量池中是否能够定位到这个类的的符号引用，然后根据符号引用检查这个符号应用代表的类是否已经被加载、解析、初始化过；如果没有，那就**必须**执行==类加载的过程==。

#### step2：内存分配

在类的加载检查通过之后，接下来虚拟机会为新生成的对象分配内存。

虚拟机为对象分配内存的方式，就好比从 Java 堆内存中划分出一块确定大小的区域出来给该对象，而内存分配算法有两种：`指针碰撞法`，`空闲列表法`，虚拟机采用哪种分配算法是由堆空间中内存是否规整（整齐）决定的，而对空间中的内存分布是否规整又是由改虚拟机所搭载的管理堆内存的垃圾回收器是否具有标记整理能力决定的。

- 指针碰撞
  - 适合于堆内存规整的情况。
  - 假设 Java 堆内存绝对规整（没有内存碎片），将已经划分给别的对象（已使用）的内存分到一边，将其他还没有使用的（空闲）的内存放到另外一边，已使用和空闲内存的零界点是一个指针，分配内存的时候就是将该指针向着空闲的那边移动需要分配的对象大小的相等的距离。
  - 搭载该分配算法的垃圾回收器：`Serial`、`NewPar`。
- 空闲列表
  - 适合堆内存不规整，存在内存碎片的情况。
  - 因为 Java 堆内存中内存分配不是连续的，存在内存碎片，所以虚拟机自己会维护一张内存空间地址和对象的表，在分配内存的时候需要从内存中调一块空闲的内存空间分配给对应的对象，然后自己在维护更新这张地址表，所以叫空闲列表。
  - 搭载该分配算法的垃圾回收器：`CMS`。

==// todo 这里还没写（TLAB）==

#### step3：初始化零值

分配到合适的内存空间之后，虚拟必须将分配到的内存空间（但不包括对象头）进行初始化零值，这一步的操作保证对象的实例字段在 Java 代码中可以不赋初始值就可以直接使用，保证程序代码能够直接访问到这些字段的数据类型对应的零值。

#### step4：设置对象头

（**Object Header**）接下来，虚拟机还要对对象进行必要的设置，也就是设置对象头的信息，其中包括：对象是属于哪个类的实例、如何才能找到类的元数据信息、对象的 `Hash` 码、对象的 `GC` 分带年龄信息等，这些信息都存在对象头中。还有，根据虚拟机当前的运行状态，会设置锁的信息（后面会说到）。

#### step5：执行 `<init>` 方法

到这里在虚拟机的角度上来看，一个新对象就已经产生了，但是站在 Java 代码的角度上来说对象的创建才刚刚开始 —— 构造函数（Class 文件中的 `<init>()` 方法）还没有执行，所有的字段都还是默认的零值。一般来说在 new 指令后会接着执行 `<init>()`，按照程序猿的想法对对象进行初始化，到这时候一个真正可用的对象才算是被完全构造出来。



### 2. 对象的内存布局

在 HotSpot 虚拟机中，对象在堆内存中的存储布局可分为三类：对象头（Object Header）、实例数据（Instance Data）、对其填充（Padding）。

HotSpot 中对象头主要包含两类数据：

- 第一类是：==**对象自身的运行时数据**==，
- 另一类是：==**类型指针**==，

==// todo 这里还没写==



### 3. 对象的访问定位

==// todo 这里还没写==



## OutOfMemoryError 异常验证

在 《Java 虚拟机规范》中，仅有除了程序计数器意外，虚拟机其他的几个运行时区域都有可能会发生 OutOfMemoryError，下面我们就来实际验证一下这些对应的区域的发生异常的实际情况。我们模拟对饮区域的异常情况有两个目的：

1. 一是通过代码我们能够验证《Java 虚拟机规范》中各个区域存储的内容。
2. 通过模拟异常的复现，能够帮助我们在实际开发的过程中，根据异常的提示信息迅速得知是哪个区域出现了内存溢出，知道什么样的代码可能会导致内存溢出，以及内存溢出之后我们该怎么处理。

### 1. Java 堆溢出

首先，我们看看堆空间，堆是用来存储对象的，我们只要不断的创建对象，并保证 GC Roots 与各个对象之间保持有可达的路径来避免这些对象被 GC 垃圾回收器扫描回收掉，那么随着对象数量的增加总会触及到堆空间的最大值限制，从而导致堆空间内存溢出。

我们需要控制变量，调整运行程序的 VM 参数，我们通过设置 `-Xmx20m ` 和 `-Xms20m ` 两个参数将堆空间的最大容量和最小容量都设置为 20M 即可限制堆空间的自动扩展，通过 `-XX:+HeapDumpOnOutOfMemoryError` 参数可以让虚拟机在发生内存溢出时 DUMP 出当前的内存堆转储快照以便后续进行分析。

![image-20220525223309265](https://cdn.jsdelivr.net/gh/WalterXiong/typora-img/img/202205252233378.png)

接下来我们通过以下代码，来模拟让堆空间发生 OOM 异常

```java
/**
 * -Xms20m -Xmx20m -XX:+HeapDumpOnOutOfMemoryError
 */

import java.util.*;

public class HeapOOM {

    static class OOMObject{
    }

    public static void main(String[] args) {

        List<OOMObject> list = new ArrayList<>();

        while (true) {
            list.add(new OOMObject());
        }
    }
}
```

![image-20220525223548183](https://cdn.jsdelivr.net/gh/WalterXiong/typora-img/img/202205252235291.png)



### 2. 虚拟机栈和本地方法栈溢出

总所粥汁（很河里：

- 虚拟机栈是为了虚拟机执行 Java 方法（字节码）服务的；
- 本地方法栈是为了虚拟机执行本地（`native`）方法服务的；

而在 《Java 虚拟机规范》规范了两种异常：

1. 如果线程申请的栈的深度大于虚拟机栈允许的最大深度，则会发生 `StackOverflowError` 异常；
2. 如果虚拟机栈==支持自动扩展==，栈内存在扩展容量时无法申请到足够的内存空间时，会发生 `OutOfMemroyError` 异常；

《Java 虚拟机规范》中明确允许 Java 虚拟机自行选择是否实现栈内存自动扩展，但是 HotSpot 虚拟机的选择是不支持扩展，所以除非虚拟机在创建线程时因为申请不到足够的内存而出现 OutOfMemoryError，否则在线程的运行期间是不会因为内存扩展而出现内存溢出的，只会因为栈容量中无法容纳新的栈帧而导致 Stackoverflow 异常。

为此我们可以验证一下上面的结论的真实性。我们先使用单线程的形式，来实验一下是否会让 HotSpot 产生 OutOfMemoryError ；

- 使用 `-Xss` 参数限制栈内存的容量，使栈的深度达到可申请栈的深度的最大值，抛出 StackoverflowError 异常，我们同时打印一下堆栈的深度；
- 同上的条件限制栈容量的同时，增大此方法帧中局部变量表的长度，抛出 StackoverflowError 异常，我们同时打印一下堆栈的深度；

第一种，我们利用方法递归来，增加请求栈的深度

```java
/**
 * VM Args: -Xss128k
 */

public class JavaVMStackSOF {

    private int stackLength = 1;

    private void stackLeak() {
        stackLength++;
        stackLeak();
    }

    public static void main(String[] args) {

        JavaVMStackSOF sof = new JavaVMStackSOF();

        try {
            sof.stackLeak();
        } catch (Throwable e) {
            System.out.println("stack length : " + sof.stackLength);
            throw e;
        }
    }
}

```

![image-20220525232631904](https://cdn.jsdelivr.net/gh/WalterXiong/typora-img/img/202205252326003.png)



第二种，往方法帧中增大局部变量表的长度（大小）

```java
/**
 * VM Args: -Xss128k
 */

public class JavaVMStackSOF_StackFrameCapacity {

    private static int stackLength = 1;

    private static void stackLeak() {

        long unused1,  unused2,  unused3,  unused4,  unused5,  
            unused6,  unused7,  unused8,  unused9,  unused10,
            unused11, unused12, unused13, unused14, unused15, 
            unused16, unused17, unused18, unused19, unused20,
            unused21, unused22, unused23, unused24, unused25, 
            unused26, unused27, unused28, unused29, unused30,
            unused31, unused32, unused33, unused34, unused35, 
            unused36, unused37, unused38, unused39, unused40,
            unused41, unused42, unused43, unused44, unused45, 
            unused46, unused47, unused48, unused49, unused50,
            unused51, unused52, unused53, unused54, unused55, 
            unused56, unused57, unused58, unused59, unused60,
            unused61, unused62, unused63, unused64, unused65, 
            unused66, unused67, unused68, unused69, unused70,
            unused71, unused72, unused73, unused74, unused75, 
            unused76, unused77, unused78, unused79, unused80,
            unused81, unused82, unused83, unused84, unused85, 
            unused86, unused87, unused88, unused89, unused90,
            unused91, unused92, unused93, unused94, unused95, 
            unused96, unused97, unused98, unused99, unused100;

        stackLength++;
        stackLeak();

        unused1 =  unused2 =  unused3 =  unused4 =  unused5 =  
        unused6 =  unused7 =  unused8 =  unused9 =  unused10 =
        unused11 = unused12 = unused13 = unused14 = unused15 = 
        unused16 = unused17 = unused18 = unused19 = unused20 =
        unused21 = unused22 = unused23 = unused24 = unused25 = 
        unused26 = unused27 = unused28 = unused29 = unused30 =
        unused31 = unused32 = unused33 = unused34 = unused35 = 
        unused36 = unused37 = unused38 = unused39 = unused40 =
        unused41 = unused42 = unused43 = unused44 = unused45 = 
        unused46 = unused47 = unused48 = unused49 = unused50 =
        unused51 = unused52 = unused53 = unused54 = unused55 = 
        unused56 = unused57 = unused58 = unused59 = unused60 =
        unused61 = unused62 = unused63 = unused64 = unused65 = 
        unused66 = unused67 = unused68 = unused69 = unused70 =
        unused71 = unused72 = unused73 = unused74 = unused75 = 
        unused76 = unused77 = unused78 = unused79 = unused80 =
        unused81 = unused82 = unused83 = unused84 = unused85 = 
        unused86 = unused87 = unused88 = unused89 = unused90 =
        unused91 = unused92 = unused93 = unused94 = unused95 = 
        unused96 = unused97 = unused98 = unused99 = unused100 = 0;
    }

    public static void main(String[] args) {
        try {
            stackLeak();
        } catch (Error e) {
            System.out.println("stack length : " + stackLength);
            throw e;
        }
    }
}

```

![image-20220526222927534](https://cdn.jsdelivr.net/gh/WalterXiong/typora-img/img/202205262229643.png)

从上面结果可以看出，无论是栈帧过大或者是栈内存太小，当新的栈帧无法分配内存的时候，HotSpot 都会抛出 Stackoverflow 异常。

**特殊**：创建线程导致内存溢出异常

```java
/**
 * VM Args: -Xss2M
 */
public class JavaVMStackOOM {

    private void dontStop() {
        while (true) {
        }
    }

    public void stackLeaBbyThread() {
        while (true) {
            new Thread(() -> dontStop()).start();
        }
    }

    public static void main(String[] args) {
        JavaVMStackOOM oom = new JavaVMStackOOM();
        oom.stackLeaBbyThread();
    }
}

```

> 注意：
>
> 这个代码 ==不要随便运行！！！== ==不要随便运行！！！== ==不要随便运行！！！==
>
> 除非你保存好了你当前的那些工作的情况下，Java 的线程是映射在操作系统上的，无限制的创建线程会给操作系统相当大的压力，会死机！（我就是知道🤣
>
> 还有就是，我在 64 位的操作系统上执行了代码但是知道电脑芜湖~起飞到死机，我任然没有看到虚拟机抛出 OutOfMemoryError 异常，不知道是不是哪里出错了，有待后续装一个 32 位的操作系统再来验证（先挖个坑🤔😏）



### 3.方法区（元空间）和运行时常量池溢出

由于运行时常量池是方法区的一部分，所以这两个区域可以放到一起来验证，并且我们可以一并验证：`JDK 7` 开始的去永久带计划，在 `JDK 8` 完成，使用元空间代替了之前版本的永久带作为方法区的实现，看看字符串常量池是不是移到了堆中

```java
/**
 * JDK6: VM Args: -XX:PermSize=6M -XX:MaxPermSize=6M
 * JDK8: VM Args: -Xmx6M -Xms6M
 */
public class RuntimeConstantPoolOOM {
  
    public static void main(String[] args) {
      
        Set<String> set = new HashSet<>();
      
        short i = 0;
      
        while (true) {
            set.add(String.valueOf(i++).intern());
        }
    }
}
```

![image-20220606213410321](https://cdn.jsdelivr.net/gh/WalterXiong/typora-img/img/202206062134511.png)

出现上述原因是因为自 `JDK 7` 开始原本位于方法区中的字符床常量池是被移到放到了堆中，所以限制堆大小往常量池中不断的添加常量会造成常量池内存溢出；

关于字符串常量池的实现出现的问题，我们还能引申出一些更有趣的影响，如下：

```java
public class RuntimeConstantPoolOOM {
    
    public static void main(String[] args) {

        String str1 = new StringBuilder("Code").append("Learning").toString();
        System.out.println(str1.intern() == str1);

        String str2 = new StringBuilder("ja").append("va").toString();
        System.out.println(str2.intern() == str2);

    }
}
// true
// false
```

这里会提到 String 的 intern() 方法，该方法的作用是将字符床加入字符串常量池，在 JDK 7 之后字符床常量池存在于 Java 堆中，所以 intern() 仅仅需要记录一下某个字符串首次出现的引用即可（意思就是，在调用 intern 方法时，会先去常量池中搜索一番，如果该字符串没有在常量池中，那么就将该字符串的引用添加到常量池中，在返回该引用，这就是为什么 str1 的执行结果为 true 的原因，至于为甚么 str2 为 false 是因为，"java" 这个字符床并符合“首次出现”这个原则，之前就被加载了，至于是什么时候被加载的，[可以看下这里](https://www.zhihu.com/question/51102308/answer/124441115)



### 4.本机直接内存溢出



```java
/**
 * VM Args: -Xmx5M -XX:MaxDirectMemorySize=1M
 * @author xiongjun
 */
public class DirectMemoryOOM {

    private static final int _1MB = 1024 * 1024;

    public static void main(String[] args) throws Exception {
        Field field = Unsafe.class.getDeclaredField("theUnsafe");
        field.setAccessible(true);
        Unsafe unsafe = (Unsafe) f.get(null);

        while (true) {
            unsafe.allocateMemory(_1MB);
        }
    }
}

```

![](https://cdn.jsdelivr.net/gh/WalterXiong/typora-img/img/LZTGD4V$EY1X34T$33M~J44.png)



## 小结

运行时数据区的内容基本到这里就总结的差不多了，这章主要对虚拟机运行时数据区中的各个具体区域的作用，功能进行了了解，虚拟机的内存模式更清晰具像化了；然后对 Java 对象的：创建过程（类的检测加载、内存分配、初始化零值、设置对象头、执行init<>() 方法），内存布局，访问定位进了学习，最后是对各个区域进行了逐步的内存溢出测试。
