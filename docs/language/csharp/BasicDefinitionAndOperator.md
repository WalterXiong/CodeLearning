---
title: 基本定义&操作符
category: C#
tag:
  - C# 基础
date: 2022-10-01
original: isOriginal
---

# C# - 基本定义，操作符

## C# 语言的基本构成元素

- 标记（Token）

    - 关键字（Keyword）：构成一门编程语言的基本词汇。

    - 操作符（Operator）

    - 标识符（Identifier）

    - 标点符号

    - 文本（字面值）

- 注释与空白


见名知意：

- 类名：一定要是个名词或者名词的复数形式

- 类的成员：同类名

- 类的方法：动词或者动词短语

## C# 的五大数据类型

- 类（ class ）
- 结构体（ Structure ）
- 枚举（ Enumerations ）
- 接口（ Interfaces ）
- 委托（ Delegates ）


## C# 类型派生谱系

Object

- 引用类型（ Reference Type ）

    - 类
    - 接口
    - 委托

    ```c#
    object
    string
    -----------// 上面是基本数据类型，下面是定义三个引用类型的关键字
    class
    interface
    delegate
    ```

    

- 值类型（ ValueType ）

    - 结构体
    - 枚举

    ```c#
    struct
    enum
    ```

| 类型名      | 类型名称     | 取值范围（用闭区间表示）  | 全称           | 独特的字面量格式              |
| ----------- | ------------ | ------------------------- | -------------- | ----------------------------- |
| **sbyte**   | 带符号字节型 | [-128，127]               | System.SByte   |                               |
| **byte**    | 字节型       | [0，255]                  | System.Byte    |                               |
| **ushort**  | 无符号短整型 | [0，65535]                | System.UInt16  |                               |
| **short**   | 短整型       | [-32768，32767]           | System.Int16   |                               |
| **uint**    | 无符号整型   | [0，4294967295]           | System.UInt32  | 0U 或 0u                      |
| **int**     | 整型         | [-2147483648，2147483647] | System.Int32   |                               |
| **ulong**   | 无符号长整型 | [0，$2^{64}$ - 1]         | System.UInt64  | 0UL 或 0ul                    |
| **long**    | 长整型       | [-$2^{63}$，$2^{63}$ - 1] | System.Int64   | 0L 或 0l                      |
| **float**   | 单精度浮点型 |                           | System.Single  | 0F  0f                        |
| **double**  | 双精度浮点型 |                           | System.Double  | 0D  0d<br />1E+2  1e+2        |
| **decimal** | 十进制浮点型 |                           | System.Decimal | 0M  0m                        |
| **boolean** | 布尔         | { true ，false }          | System.Boolean | true  false                   |
| **char**    | 字符         |                           | System.Char    | 'c'<br />'\u0067'<br />'\x43' |
| **string**  | 字符串       | 4 byte                    | System.String  | "string"<br />@"C:\Users"     |
| **null**    | 空值         |                           |                |                               |



## 变量，对象与内存

变量：用来存储值的容器；变量名表示该类型的值在内存中存储的位置；

变量一共有7种：

1. 静态变量
2. 实例变量（成员变量，字段）
3. 数组元素
4. 值参数
5. 引用参数
6. 输出形参
7. 局部变量

```c#
class Student
{
    public static int Amont;
    public int age;
    public string name;

    public static void Main(string[] args)
    {
        Student student = new Student();
        student.age = 18;
        student.name = "xiongjun";

        Student.Amont = 100;

        int[] arr = new int[100];
        arr[0] = 1;
        arr[99] = 2;
    }

    public static double PrintDouble(double a, double b)
    {
        double result = a + b;

        return result;
    }

    public static void PrintDouble1(ref double a, out double b)
    {
        b = 1D;
    }
}
```



申明一个变量

```c#
有效的修饰符组合 类型 变量名 初始化器
```



变量转换为二进制再内存中存储的时候是尊崇：**高高低低原则**

>  高位（内存地址的高位）存高位（变量二进制值的高位）的值，低位存低位的值

```
7 6 5 4 3 2 1 0
0 0 0 0 0 0 0 0
```



引用类型：

（栈中）初始化大小 4 个字节，存放对象在堆中分得的起始地址；

（堆中）计算实例实际需要的内存大小来分配；



### 装拆箱

装箱：将栈中的值搬往堆中再引用堆中地址的值；

拆箱：将堆中实例存储的值搬到栈中来存储；

装箱和拆箱都会影响程序的性能



## P8 ~ 9 方法的定义、调用与调试

- 方法的又来
- 方法的定义与调用
- 构造器（一种特殊的方法）
- 方法的重载（Overload）
- 如何对方法进行 debug
- 方法啊的调用与栈的关系 

### 1. 方法的由来（method）

当函数出现在类中作为类的成员函数时，他就叫做方法。

### 2. 方法的定义与调用

定义一个方法

方法头：
	特性~(opt)~  有效的修饰符组合~(opt)~  partial~(opt)~  **返回值**  **方法名**  类型参数列表~(opt)~  **（** 形式参数列表~(opt)~ **）**  类型参数约束~(opt)~ 
方法体：
	语句块 或者 ;

方法名遵循：帕斯卡命名法



Parameter（形参）

Argument（实参）

### 3. 构造方法（constructor）

构造器快捷键：ctor

### 4. 方法的重载

方法签名（method signature）：有方法的名称，类型参数的个数个每个形参（从左到右的顺序）的类型和种类（值，引用，输出）组成。**方法签名不包含方法的返回值类型和访问修饰符**

### 5. debug

- 设置断点 breakpoint
- 观察方法调用时的 call stack （调用堆栈）
- Step-in，Step-over，Step-out
    - Step-in		==> f11
    - Step-over   ==> f10
    - Step-out     ==> shift + f11
- 观察局部变量的值与变化
    - stack fream 栈帧，C# 中方法调用传参时的参数由调用者压入栈中，压入顺序从左至右依次压入，方法执行完返回，栈帧即被释放。



## P10 ~ 11 ~ 12 操作符详解

- 操作符概览
- 操作符的本质
- 操作符优先级
- 同级操作符的运算顺序
- 操作符的示例

### 1. 操作符概览

![image-20221024204209365](https://cdn.jsdelivr.net/gh/WalterXiong/typora-img/img/202211022109977.png)

**赋值运算符先运算右边的表达式后运行左边的表达式**

#### 1.1 基本操作符

- . ：成员访问操作符；

- f()：方法调用操作符；

- a[]：元素访问操作符；

- x++ / x-- ：后置自 （增/减） 操作符；

- typeof：我愿称之为 - 反射操作符；

- default：获取变量默认值的操作符

    - 结构体类型的默认值为 0；
    - 引用类型的默认值为 null；
    - 枚举类型的默认值为 枚举中定义的第一个值（在枚举值自身被赋值的情况下默认值为值等于 0 的那个枚举值，否则为 0）。

    ```c#
    var x = default(Int32);
    Console.WriteLine(x); // 0
    Console.WriteLine(x.GetType().FullName); // System.Int32
    ```

- new ：创建实例操作符 

    - new 还能调用类的初始化器，在调用构造器之后直接初始化属性；
    - var（variable） ：隐式类型的变量（就是没有告诉编译器该变量明确的数据类型的变量）们需要编译器来推断数据类型的变量；
    - 扩展  
        - 设计模式：依赖注入模式（**目前尚未可知**）。
        - new 还可以作为关键字来使用，当子类继承父类时子类中想隐藏父类中同名的方法可以在访问修饰符之前加上 new 关键字即可实现对父类方法的隐藏。

- checked / unchecked：检（不检）查一个值在内存中是否有溢出；

    ```c#
    uint max = uint.MaxValue;
    Console.WriteLine(max);// 4294967295
    
    string bin = Convert.ToString(max, 2);
    Console.WriteLine(bin);// 11111111111111111111111111111111
    
    uint value = max + 1;
    Console.WriteLine(value);// 0
    
    // checked/unchecked 用法
    // 写法一：
    try
    {
        uint value = checked/unchecked(max + 1);
        Console.WriteLine(value);
    }
    catch (Exception)
    {
        Console.WriteLine("这里产生了溢出");
    }
    
    // 写法二：
    checked/unchecked
    {
        try
        {
            uint value = max + 1;
            Console.WriteLine(value);
        }
        catch (Exception)
        {
            Console.WriteLine("这里产生了溢出");
        }
    }
    ```

- delegate：委托操作符；

- sizeof：用来获取 C# 中基本类数据类型的实例在内存中的字节数 

    - 默认情况下支持获取结构体类型的字节数（排除 string 和 object，这俩货是引用类型）；
    - 非默认情况下，支持获取非结构体类型的字节数，但是前提是处于不安全的上下文中。

    ```c#
    
    ```

- -> ：箭头操作符，指针操作；

#### 1.2 一元操作符

至于一个操作数的操作符；

- `&` ：取地址操作符

- `*` ：引用操作符

    ```c#
    internal class Program
    {
        static void Main(string[] args)
        {
    
            unsafe
            {
                Student stu;
                stu.id = 1;
                stu.score = 99;
                
                Student* pStu = &stu;
                pStu -> score = 100;
                
                (*pStu).score = 1000;
                
                Console.WriteLine(stu.score);
            }
        }
    }
    
    struct Student
    {
        public int id;
        public int score;
    }
    ```

- `+`、`-`、`~`、`!` ：正、负、反、非；

- ++，--  ：前置自（增/减）操作符；

- `(T)x` ：强制类型转换操作符

    - 隐式（**implicit**）类型转换

        - 不丢失精度的转换

            ![image-20221027221530678](https://cdn.jsdelivr.net/gh/WalterXiong/typora-img/img/202211022111194.png)

        - 子类向父类的转换（多态）；一个引用类型的变量去访问一个引用类型的实例的时候，他只能访问这个变量自己的类型中的成员；

        - 装箱

    - 显示（**explicit**）类型转换

        - 可能会丢失精度（会发生错误）的类型转换，即 cast

            ![image-20221027222908081](https://cdn.jsdelivr.net/gh/WalterXiong/typora-img/img/202211022111893.png)

        - 拆箱

        - Convert 类

        - ToStrin() 方法，parse() / tryPaese()

        ```c#
        namespace ImOrExplictOperator
        {
            internal class Program
            {
                static void Main(string[] args)
                {
                    Stone stone = new Stone();
                    stone.age = 5000;
        
                    Monkey wukongSun = stone;			// 隐式类型转换
                    
                    Monkey wukongSun = (Monkey)stone; 	// 显示类型转换 
                    
                    Console.WriteLine(wukongSun.age); 	// 10
                }
            }
        
            class Stone
            {
                public int age;
        
                // 隐式类型转换操作符
                public static implicit operator Monkey(Stone stone)
                {
                    Monkey mon = new Monkey();
                    mon.age = stone.age / 500;
                    return mon;
                }
                
                // 显示类型转换操作符
                public static explicit operator Monkey(Stone stone)
                {
                    Monkey mon = new Monkey();
                    mon.age = stone.age / 500;
                    return mon;
                }
            }
        
            class Monkey
            {
                public int age;
            }
        }
        ```

#### 1.3 算数运算符

- `*`
- `/`
- `%`

- `+`
- `-`

#### 1.4 位移操作符

- `<<`：左移运算符
- `>>`：右移运算符
- `>>>`：无符号右移

```c#
static void Main(string[] args)
{
    int x = 7;
	int y = x << 30;
	Console.WriteLine(Convert.ToString(x, 2).PadLeft(32, '0'));
	Console.WriteLine(Convert.ToString(y, 2).PadLeft(32, '0'));
	Console.WriteLine(y);
}
```



#### 1.5 关系操作符

所有关系运算符的结果都是布尔类型的

- `>`
- `<`
- `>=`
- `<=`
- `is`：类型检验操作符
- `as`：类型检验操作符

```c#
static void Main(string[] args)
{
    Object o = new Teacher();

    if (o is Teacher)
    {
        Teacher tmpT = (Teacher)o;
        tmpT.Teach();
    }

    Teacher t;
    if((t = o as Teacher) != null)
    {
        t.Teach();
    }
}

class Animal
{
    public void Eat()
    {
        Console.WriteLine("eat...");
    }
}

class Human
{
    public void Chat()
    {
        Console.WriteLine("chat...");
    }
}

class Teacher
{
    public void Teach()
    {
        Console.WriteLine("teach...");
    }
}
```

- `==`
- `!=`

#### 1.6 逻辑运算符

1 为真；0 为假

- `&`：位与	（同真才真，一假必假）
- `^`：位异或（不同才真，相同为假）
- `|`：位或    （同假才假，一真就真）

```c#

```

#### 1.7 条件运算符

- `&&`：条件 与
- `||`：条件 或

#### 1.8 null 值合并操作符

- `??` 

```c#
static void Main(string[] args)
{
    Nullable<int> i = 1;
    Console.WriteLine(i.GetType().FullName);
    Console.WriteLine(i);

    int? x = null;
    Console.WriteLine(x.HasValue);
    Console.WriteLine(x == null);

    // x 是不是为 null，如果为 null 则替换为合并操作符之后的数
    int y = x ?? 99;
    Console.WriteLine(y); // 99
}
```

#### 1.9 条件操作符

- `? : `：也叫三元运算符

#### 2.0 赋值和 lambda 表达式

- `=`、`*=`、`/=`、`%=`、`+=`、`-=`、`<<=`、`>>=`、`&=`、`|=`
- `=>`

### 2. 什么是操作符

### 3. 操作符的优先级

同优先级的操作符计算顺序从左至右
