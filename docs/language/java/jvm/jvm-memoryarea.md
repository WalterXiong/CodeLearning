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

### 3. 对象的访问定位



## OutOfMemory 异常验证

### 1. Java 堆溢出

首先，我们需要控制变量，调整运行程序的 VM 参数

![image-20220525223309265](https://cdn.jsdelivr.net/gh/WalterXiong/typora-img/img/202205252233378.png)

`-Xms20m `

`-Xmx20m `

`-XX:+HeapDumpOnOutOfMemoryError`



接下来我们通过以下代码

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

第一种我们在限制栈的大小，再增加栈的深度

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



第二种，扩大栈帧的大小（增加栈帧中局部变量表的大小）

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



3.创建线程导致内存溢出异常

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



