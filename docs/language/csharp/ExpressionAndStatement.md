\---

title: 表达式&语句详解

category: C#

tag:

 \- C# 基础

date: 2022-11-1

original: isOriginal

\---



# C# - 表达式，语句详解

- 表达式的定义

- 各类表达式浅炫

- 语句的定义

- 语句详解

    

## * single responsibility 单一职责原则

## * 尽早 return 原则



一、什么是表达式

二、C# 中表达式分类

## 三、什么是语句

语句是高级语言的语法；

- C# 语言的语句除了能让程序员”顺序地“（sequentially）表达算法思想，还能通过条件判断、跳转和循环等方法控制程序逻辑的走向；
- 简而言之就是：陈述算法思想，控制逻辑走向，完成**有意义的**动作；
- C# 的语句由分号（ `;` ）结尾，但是由分号结尾的不一定都是语句；
- 语句一定出现在方法中；

C# 中的语句：

- 声明语句

- 标签语句

  ```c#
  hello: Console.WriteLine("Hello World!");
  ...
  ...    
  goto hello;
  ```

  

- 嵌套语句



## 四、语句详解

### 1. 声明语句

```
int x = 100;
const int y = 200;
```



### 2. 表达式语句

- 方法调用表达式

    ```c#
    Console.WriteLine("Hello World!");
    ```

    

- 对象创建表达式

    ```c#
    new Object();
    ```

    

- 赋值语句

    ```c#
    int x = 100;
    ```

    

- 后置加加语句

    ```c#
    x++;
    ```

    

- 后置减减语句

    ```c#
    x--;
    ```

    

- 前置加加语句

    ```c#
    ++x;
    ```

    

- 前置减减语句

    ```c#
    --x;
    ```

    

### 3. 块语句

```
{
	...
	...
}
```

 

### 4. 选择（判断、分支）语句

#### 4.1 if 语句

```c#
int x = 100;
int y = 200;
if(x > y) 
{
	Console.WriteLine("Hello");
    Console.WriteLine("AMD");
}
else
{
    Console.WriteLine("World!");
    Console.WriteLine("Yes ");
}
```



#### 4.2 switch 语句

>  switch 表达式的类型为：sbyte、byte、short、ushort、int、uint、long、ulong、bool、char、string 或者 enum-type，以及上述类型的可空类型

```c#
int score = 95;
switch(score/10)
{
    case 10:
        if(score == 100)
        {
            goto case 9;
        }
        else
        {
            goto default;
        }
        break;
        
    case 8: 
	case 9:
        Console.WriteLine("A");
        break;
        
    case 6:
    case 7:
        Console.WriteLine("B");
        break;
        
    case 4:
    case 5:
        Console.WriteLine("C");
        break;
        
    case 1:
    case 0:
    case 2:
    case 3:
        Console.WriteLine("D");
        break;
        
    default:
        Console.WriteLine("Error");
        break;
}
```



### 5. try 语句

#### 5.1 try - catch

- 通用类型的异常处理

  ```c#
  public int Add(string s1, string s2)
  {
      int x = 0;
      try
      {
          x = int.Parse(s1);
      }
      catch
      {
          Console.WriteLine("第一个数字发生异常");
      }
  
      int y = int.Parse(s2);
  
      return x + y;
  }
  ```

- 特定类型异常的捕捉处理

  ```c#
  public int Add(string s1, string s2)
  {
      int x = 0;
      int y = 0;
      try
      {
          x = int.Parse(s1);
          y = int.Parse(s2);
      }
      catch(ArgumentNullException)
      {
          Console.WriteLine("参数为空");
      }
      catch (FormatException)
      {
          Console.WriteLine("参数不是数字类型");
      }
      catch(OverflowException)
      {
          Console.WriteLine("超出界限");
      }
  
      return x + y;
  }
  ```


#### 5.2 try - finnally

```c#
try
{
	......
}
finally
{
    // 作用1
    Console.WriteLine("释放必要的资源");
    // 作用2
    Console.WriteLine("打印 log 记录");
}
```

#### 5.3 try - catch - finally

```c#
public int Add(string s1, string s2)
{
    int x = 0;
    int y = 0;
    bool hasError = false;

    try
    {
        x = int.Parse(s1);
        y = int.Parse(s2);
    }
    catch(ArgumentNullException)
    {
        Console.WriteLine("参数为空");
        hasError = true;
    }
    catch (FormatException)
    {
        Console.WriteLine("参数不是数字类型");
        hasError = true;
    }
    catch(OverflowException)
    {
        Console.WriteLine("超出界限");
        hasError = true;
    }
    finally
    {
        if (hasError)
        {
            Console.WriteLine("程序执行异常的结果");
        }
        else
        {
            Console.WriteLine("程序运行结束！");
        }
    }
    return x + y;
}
```

- throw

  将抓住的异常抛出去

  ```c#
  namespace TryStatement
  {
      internal class Program
      {
          static void Main(string[] args)
          {
              Calculator calculator = new Calculator();
  
              int r = 0;
              try
              {
                  r = calculator.Add("abc", "2");
              }
              catch(OverflowException oe)
              {
                  Console.WriteLine(oe);
              }
  
              Console.WriteLine(r);
          }
      }
  
      class Calculator
      {
          public int Add(string s1, string s2)
          {
              int x = 0;
              int y = 0;
              bool hasError = false;
  
              try
              {
                  x = int.Parse(s1);
                  y = int.Parse(s2);
              }
              catch(ArgumentNullException ane)
              {
                  Console.WriteLine("参数为空");
              }
              catch (FormatException fe)
              {
                  Console.WriteLine("参数不是数字类型");
              }
              catch(OverflowException oe)
              {
                  /*
                   * throw 后可以不跟捕获到的异常名称
                   * 同时 catch 中的异常变量名也可以不定义出来也可以进行抛出
                   */
                  throw oe; 
              }
  
              return x + y;
          }
      }
  }
  ```



### 6. 迭代语句

#### 6.1 while 语句

```c#
int score = 0;
bool canContinue = true;
while (true)
{
    Console.WriteLine("请输入第一个数字：");
    int x = int.Parse(Console.ReadLine());

    Console.WriteLine("请输入第二个数字：");
    int y = int.Parse(Console.ReadLine());

    int r = x + y;
    if (r == 100)
    {
        score++;
        Console.WriteLine($"Continue! {x} + {y} = {r}");
    }
    else
    {
        canContinue = false;
        Console.WriteLine($"Error! {x} + {y} = {r} != 100");
    }
}

Console.WriteLine("本轮得分：{0}", score);
Console.WriteLine("Game Over!!!");
```



#### 6.2 do 语句

```c#
int sum = 0;
int score = 0;
do
{
    Console.WriteLine("请输入第一个数字：");
    int x = int.Parse(Console.ReadLine());

    Console.WriteLine("请输入第二个数字：");
    int y = int.Parse(Console.ReadLine());

    int sum = x + y;
    if (sum == 100)
    {
        score++;
        Console.WriteLine($"Continue! {x} + {y} = {sum}");
    }
    else
    {
        Console.WriteLine($"Error! {x} + {y} = {sum} != 100");
    }
} while (sum == 100) ;

Console.WriteLine("本轮得分：{0}", score);
Console.WriteLine("Game Over!!!");
```



#### 6.3 for 语句

计数循环更方便

```c#
// while 实现计数循环
int counter = 0;
while (counter < 10)
{
    counter++;
    Console.WriteLine(counter);
}

// for 实现计数循环
for (int i = 0; i < 10; i++)
{
    Console.WriteLine(i + 1);
}
```



#### 6.4 foreach 语句

什么样的集合可以被遍历：

​	**所有实现了 IEnumerable 接口的集合或数组**

```c#
List<int> intList = new List<int>() { 1, 2, 3, 4, 5, 6, 7, 8 };

// 使用迭代器迭代 intList 集合
IEnumerator enumerator = intList.GetEnumerator();
while (enumerator.MoveNext())
{
    Console.WriteLine(enumerator.Current);
}

// 使用 forwach 迭代 intList 集合
foreach (var item in intList)
{
    Console.WriteLine(item);
}
```



### 7. 跳转语句

#### 7.1 break 语句

跳出循环体，执行循环体之后的语句。

#### 7.2 continue 语句

结束（放弃）当前这次循环，开始下一次循环。

```c#
int score = 0;
bool canContinue = true;
do
{
    Console.WriteLine("请输入第一个数字：");
    string s1 = Console.ReadLine();

    if(s1.ToLower() == "end")
    {
        break;
    }

    int x = 0;
    try
    {
        x = int.Parse(s1);
    }
    catch
    {
        Console.WriteLine("第一个数字错误");
        continue;
    }

    Console.WriteLine("请输入第二个数字：");
    string s2 = Console.ReadLine();

    if (s2.ToLower() == "end")
    {
        break;
    }

    int y = 0;
    try
    {
        y = int.Parse(s2);
    }
    catch
    {
        Console.WriteLine("第二个数字错误");
        continue;
    }

    int r = x + y;
    if (r == 100)
    {
        score++;
        Console.WriteLine($"Continue! {x} + {y} = {r}");
    }
    else
    {
        canContinue = false;
        Console.WriteLine($"Error! {x} + {y} = {r} != 100");
    }
} while (canContinue) ;

Console.WriteLine("本轮得分：{0}", score);
Console.WriteLine("Game Over!!!");
```

>  break 和 continue 在循环嵌套语句中，都只能影响当前包含它们的循环体语句执行（不能影响外层）



#### 7.3 goto

非主流语句，了解在 switch 中地用法即可。

#### 7.4 return 语句

#### 7.5 checked/unchecked 语句

#### 7.6 标签语句

#### 7.7 空语句



> 以下语句在后续学习到相关内容后再来填补
>
> 7.8 using 语句
>
> 7.9 yeild 语句
>
> 7.10 lock 语句





