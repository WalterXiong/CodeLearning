import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as e,f as s}from"./app-422b0c18.js";const l={},d=s(`<p>---</p><p>title: 表达式&amp;语句详解</p><p>category: C#</p><p>tag:</p><p>- C# 基础</p><p>date: 2022-11-1</p><p>original: isOriginal</p><p>---</p><h1 id="c-表达式-语句详解" tabindex="-1"><a class="header-anchor" href="#c-表达式-语句详解" aria-hidden="true">#</a> C# - 表达式，语句详解</h1><ul><li><p>表达式的定义</p></li><li><p>各类表达式浅炫</p></li><li><p>语句的定义</p></li><li><p>语句详解</p></li></ul><h2 id="single-responsibility-单一职责原则" tabindex="-1"><a class="header-anchor" href="#single-responsibility-单一职责原则" aria-hidden="true">#</a> * single responsibility 单一职责原则</h2><h2 id="尽早-return-原则" tabindex="-1"><a class="header-anchor" href="#尽早-return-原则" aria-hidden="true">#</a> * 尽早 return 原则</h2><p>一、什么是表达式</p><p>二、C# 中表达式分类</p><h2 id="三、什么是语句" tabindex="-1"><a class="header-anchor" href="#三、什么是语句" aria-hidden="true">#</a> 三、什么是语句</h2><p>语句是高级语言的语法；</p><ul><li>C# 语言的语句除了能让程序员”顺序地“（sequentially）表达算法思想，还能通过条件判断、跳转和循环等方法控制程序逻辑的走向；</li><li>简而言之就是：陈述算法思想，控制逻辑走向，完成<strong>有意义的</strong>动作；</li><li>C# 的语句由分号（ <code>;</code> ）结尾，但是由分号结尾的不一定都是语句；</li><li>语句一定出现在方法中；</li></ul><p>C# 中的语句：</p><ul><li><p>声明语句</p></li><li><p>标签语句</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>hello: Console.WriteLine(&quot;Hello World!&quot;);
...
...    
goto hello;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>嵌套语句</p></li></ul><h2 id="四、语句详解" tabindex="-1"><a class="header-anchor" href="#四、语句详解" aria-hidden="true">#</a> 四、语句详解</h2><h3 id="_1-声明语句" tabindex="-1"><a class="header-anchor" href="#_1-声明语句" aria-hidden="true">#</a> 1. 声明语句</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int x = 100;
const int y = 200;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-表达式语句" tabindex="-1"><a class="header-anchor" href="#_2-表达式语句" aria-hidden="true">#</a> 2. 表达式语句</h3><ul><li><p>方法调用表达式</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>Console.WriteLine(&quot;Hello World!&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>对象创建表达式</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>new Object();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>赋值语句</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>int x = 100;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>后置加加语句</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>x++;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>后置减减语句</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>x--;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>前置加加语句</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>++x;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>前置减减语句</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>--x;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="_3-块语句" tabindex="-1"><a class="header-anchor" href="#_3-块语句" aria-hidden="true">#</a> 3. 块语句</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
	...
	...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-选择-判断、分支-语句" tabindex="-1"><a class="header-anchor" href="#_4-选择-判断、分支-语句" aria-hidden="true">#</a> 4. 选择（判断、分支）语句</h3><h4 id="_4-1-if-语句" tabindex="-1"><a class="header-anchor" href="#_4-1-if-语句" aria-hidden="true">#</a> 4.1 if 语句</h4><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>int x = 100;
int y = 200;
if(x &gt; y) 
{
	Console.WriteLine(&quot;Hello&quot;);
    Console.WriteLine(&quot;AMD&quot;);
}
else
{
    Console.WriteLine(&quot;World!&quot;);
    Console.WriteLine(&quot;Yes &quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-switch-语句" tabindex="-1"><a class="header-anchor" href="#_4-2-switch-语句" aria-hidden="true">#</a> 4.2 switch 语句</h4><blockquote><p>switch 表达式的类型为：sbyte、byte、short、ushort、int、uint、long、ulong、bool、char、string 或者 enum-type，以及上述类型的可空类型</p></blockquote><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>int score = 95;
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
        Console.WriteLine(&quot;A&quot;);
        break;
        
    case 6:
    case 7:
        Console.WriteLine(&quot;B&quot;);
        break;
        
    case 4:
    case 5:
        Console.WriteLine(&quot;C&quot;);
        break;
        
    case 1:
    case 0:
    case 2:
    case 3:
        Console.WriteLine(&quot;D&quot;);
        break;
        
    default:
        Console.WriteLine(&quot;Error&quot;);
        break;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-try-语句" tabindex="-1"><a class="header-anchor" href="#_5-try-语句" aria-hidden="true">#</a> 5. try 语句</h3><h4 id="_5-1-try-catch" tabindex="-1"><a class="header-anchor" href="#_5-1-try-catch" aria-hidden="true">#</a> 5.1 try - catch</h4><ul><li><p>通用类型的异常处理</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public int Add(string s1, string s2)
{
    int x = 0;
    try
    {
        x = int.Parse(s1);
    }
    catch
    {
        Console.WriteLine(&quot;第一个数字发生异常&quot;);
    }

    int y = int.Parse(s2);

    return x + y;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>特定类型异常的捕捉处理</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public int Add(string s1, string s2)
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
        Console.WriteLine(&quot;参数为空&quot;);
    }
    catch (FormatException)
    {
        Console.WriteLine(&quot;参数不是数字类型&quot;);
    }
    catch(OverflowException)
    {
        Console.WriteLine(&quot;超出界限&quot;);
    }

    return x + y;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="_5-2-try-finnally" tabindex="-1"><a class="header-anchor" href="#_5-2-try-finnally" aria-hidden="true">#</a> 5.2 try - finnally</h4><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>try
{
	......
}
finally
{
    // 作用1
    Console.WriteLine(&quot;释放必要的资源&quot;);
    // 作用2
    Console.WriteLine(&quot;打印 log 记录&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-3-try-catch-finally" tabindex="-1"><a class="header-anchor" href="#_5-3-try-catch-finally" aria-hidden="true">#</a> 5.3 try - catch - finally</h4><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public int Add(string s1, string s2)
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
        Console.WriteLine(&quot;参数为空&quot;);
        hasError = true;
    }
    catch (FormatException)
    {
        Console.WriteLine(&quot;参数不是数字类型&quot;);
        hasError = true;
    }
    catch(OverflowException)
    {
        Console.WriteLine(&quot;超出界限&quot;);
        hasError = true;
    }
    finally
    {
        if (hasError)
        {
            Console.WriteLine(&quot;程序执行异常的结果&quot;);
        }
        else
        {
            Console.WriteLine(&quot;程序运行结束！&quot;);
        }
    }
    return x + y;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>throw</p><p>将抓住的异常抛出去</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>namespace TryStatement
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Calculator calculator = new Calculator();

            int r = 0;
            try
            {
                r = calculator.Add(&quot;abc&quot;, &quot;2&quot;);
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
                Console.WriteLine(&quot;参数为空&quot;);
            }
            catch (FormatException fe)
            {
                Console.WriteLine(&quot;参数不是数字类型&quot;);
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_6-迭代语句" tabindex="-1"><a class="header-anchor" href="#_6-迭代语句" aria-hidden="true">#</a> 6. 迭代语句</h3><h4 id="_6-1-while-语句" tabindex="-1"><a class="header-anchor" href="#_6-1-while-语句" aria-hidden="true">#</a> 6.1 while 语句</h4><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>int score = 0;
bool canContinue = true;
while (true)
{
    Console.WriteLine(&quot;请输入第一个数字：&quot;);
    int x = int.Parse(Console.ReadLine());

    Console.WriteLine(&quot;请输入第二个数字：&quot;);
    int y = int.Parse(Console.ReadLine());

    int r = x + y;
    if (r == 100)
    {
        score++;
        Console.WriteLine($&quot;Continue! {x} + {y} = {r}&quot;);
    }
    else
    {
        canContinue = false;
        Console.WriteLine($&quot;Error! {x} + {y} = {r} != 100&quot;);
    }
}

Console.WriteLine(&quot;本轮得分：{0}&quot;, score);
Console.WriteLine(&quot;Game Over!!!&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-2-do-语句" tabindex="-1"><a class="header-anchor" href="#_6-2-do-语句" aria-hidden="true">#</a> 6.2 do 语句</h4><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>int sum = 0;
int score = 0;
do
{
    Console.WriteLine(&quot;请输入第一个数字：&quot;);
    int x = int.Parse(Console.ReadLine());

    Console.WriteLine(&quot;请输入第二个数字：&quot;);
    int y = int.Parse(Console.ReadLine());

    int sum = x + y;
    if (sum == 100)
    {
        score++;
        Console.WriteLine($&quot;Continue! {x} + {y} = {sum}&quot;);
    }
    else
    {
        Console.WriteLine($&quot;Error! {x} + {y} = {sum} != 100&quot;);
    }
} while (sum == 100) ;

Console.WriteLine(&quot;本轮得分：{0}&quot;, score);
Console.WriteLine(&quot;Game Over!!!&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-3-for-语句" tabindex="-1"><a class="header-anchor" href="#_6-3-for-语句" aria-hidden="true">#</a> 6.3 for 语句</h4><p>计数循环更方便</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>// while 实现计数循环
int counter = 0;
while (counter &lt; 10)
{
    counter++;
    Console.WriteLine(counter);
}

// for 实现计数循环
for (int i = 0; i &lt; 10; i++)
{
    Console.WriteLine(i + 1);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-4-foreach-语句" tabindex="-1"><a class="header-anchor" href="#_6-4-foreach-语句" aria-hidden="true">#</a> 6.4 foreach 语句</h4><p>什么样的集合可以被遍历：</p><p>​ <strong>所有实现了 IEnumerable 接口的集合或数组</strong></p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>List&lt;int&gt; intList = new List&lt;int&gt;() { 1, 2, 3, 4, 5, 6, 7, 8 };

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-跳转语句" tabindex="-1"><a class="header-anchor" href="#_7-跳转语句" aria-hidden="true">#</a> 7. 跳转语句</h3><h4 id="_7-1-break-语句" tabindex="-1"><a class="header-anchor" href="#_7-1-break-语句" aria-hidden="true">#</a> 7.1 break 语句</h4><p>跳出循环体，执行循环体之后的语句。</p><h4 id="_7-2-continue-语句" tabindex="-1"><a class="header-anchor" href="#_7-2-continue-语句" aria-hidden="true">#</a> 7.2 continue 语句</h4><p>结束（放弃）当前这次循环，开始下一次循环。</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>int score = 0;
bool canContinue = true;
do
{
    Console.WriteLine(&quot;请输入第一个数字：&quot;);
    string s1 = Console.ReadLine();

    if(s1.ToLower() == &quot;end&quot;)
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
        Console.WriteLine(&quot;第一个数字错误&quot;);
        continue;
    }

    Console.WriteLine(&quot;请输入第二个数字：&quot;);
    string s2 = Console.ReadLine();

    if (s2.ToLower() == &quot;end&quot;)
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
        Console.WriteLine(&quot;第二个数字错误&quot;);
        continue;
    }

    int r = x + y;
    if (r == 100)
    {
        score++;
        Console.WriteLine($&quot;Continue! {x} + {y} = {r}&quot;);
    }
    else
    {
        canContinue = false;
        Console.WriteLine($&quot;Error! {x} + {y} = {r} != 100&quot;);
    }
} while (canContinue) ;

Console.WriteLine(&quot;本轮得分：{0}&quot;, score);
Console.WriteLine(&quot;Game Over!!!&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>break 和 continue 在循环嵌套语句中，都只能影响当前包含它们的循环体语句执行（不能影响外层）</p></blockquote><h4 id="_7-3-goto" tabindex="-1"><a class="header-anchor" href="#_7-3-goto" aria-hidden="true">#</a> 7.3 goto</h4><p>非主流语句，了解在 switch 中地用法即可。</p><h4 id="_7-4-return-语句" tabindex="-1"><a class="header-anchor" href="#_7-4-return-语句" aria-hidden="true">#</a> 7.4 return 语句</h4><h4 id="_7-5-checked-unchecked-语句" tabindex="-1"><a class="header-anchor" href="#_7-5-checked-unchecked-语句" aria-hidden="true">#</a> 7.5 checked/unchecked 语句</h4><h4 id="_7-6-标签语句" tabindex="-1"><a class="header-anchor" href="#_7-6-标签语句" aria-hidden="true">#</a> 7.6 标签语句</h4><h4 id="_7-7-空语句" tabindex="-1"><a class="header-anchor" href="#_7-7-空语句" aria-hidden="true">#</a> 7.7 空语句</h4><blockquote><p>以下语句在后续学习到相关内容后再来填补</p><p>7.8 using 语句</p><p>7.9 yeild 语句</p><p>7.10 lock 语句</p></blockquote>`,66),a=[d];function r(v,c){return n(),e("div",null,a)}const o=i(l,[["render",r],["__file","ExpressionAndStatement.html.vue"]]);export{o as default};
