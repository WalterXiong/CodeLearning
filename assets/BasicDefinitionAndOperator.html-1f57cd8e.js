import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as n,f as d}from"./app-422b0c18.js";const l={},s=d(`<h1 id="c-基本定义-操作符" tabindex="-1"><a class="header-anchor" href="#c-基本定义-操作符" aria-hidden="true">#</a> C# - 基本定义，操作符</h1><h2 id="c-语言的基本构成元素" tabindex="-1"><a class="header-anchor" href="#c-语言的基本构成元素" aria-hidden="true">#</a> C# 语言的基本构成元素</h2><ul><li><p>标记（Token）</p><ul><li><p>关键字（Keyword）：构成一门编程语言的基本词汇。</p></li><li><p>操作符（Operator）</p></li><li><p>标识符（Identifier）</p></li><li><p>标点符号</p></li><li><p>文本（字面值）</p></li></ul></li><li><p>注释与空白</p></li></ul><p>见名知意：</p><ul><li><p>类名：一定要是个名词或者名词的复数形式</p></li><li><p>类的成员：同类名</p></li><li><p>类的方法：动词或者动词短语</p></li></ul><h2 id="c-的五大数据类型" tabindex="-1"><a class="header-anchor" href="#c-的五大数据类型" aria-hidden="true">#</a> C# 的五大数据类型</h2><ul><li>类（ class ）</li><li>结构体（ Structure ）</li><li>枚举（ Enumerations ）</li><li>接口（ Interfaces ）</li><li>委托（ Delegates ）</li></ul><h2 id="c-类型派生谱系" tabindex="-1"><a class="header-anchor" href="#c-类型派生谱系" aria-hidden="true">#</a> C# 类型派生谱系</h2><p>Object</p><ul><li><p>引用类型（ Reference Type ）</p><ul><li>类</li><li>接口</li><li>委托</li></ul><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>object
string
-----------// 上面是基本数据类型，下面是定义三个引用类型的关键字
class
interface
delegate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>值类型（ ValueType ）</p><ul><li>结构体</li><li>枚举</li></ul><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>struct
enum
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><table><thead><tr><th>类型名</th><th>类型名称</th><th>取值范围（用闭区间表示）</th><th>全称</th><th>独特的字面量格式</th></tr></thead><tbody><tr><td><strong>sbyte</strong></td><td>带符号字节型</td><td>[-128，127]</td><td>System.SByte</td><td></td></tr><tr><td><strong>byte</strong></td><td>字节型</td><td>[0，255]</td><td>System.Byte</td><td></td></tr><tr><td><strong>ushort</strong></td><td>无符号短整型</td><td>[0，65535]</td><td>System.UInt16</td><td></td></tr><tr><td><strong>short</strong></td><td>短整型</td><td>[-32768，32767]</td><td>System.Int16</td><td></td></tr><tr><td><strong>uint</strong></td><td>无符号整型</td><td>[0，4294967295]</td><td>System.UInt32</td><td>0U 或 0u</td></tr><tr><td><strong>int</strong></td><td>整型</td><td>[-2147483648，2147483647]</td><td>System.Int32</td><td></td></tr><tr><td><strong>ulong</strong></td><td>无符号长整型</td><td>[0，$2^{64}$ - 1]</td><td>System.UInt64</td><td>0UL 或 0ul</td></tr><tr><td><strong>long</strong></td><td>长整型</td><td>[-$2^{63}$，$2^{63}$ - 1]</td><td>System.Int64</td><td>0L 或 0l</td></tr><tr><td><strong>float</strong></td><td>单精度浮点型</td><td></td><td>System.Single</td><td>0F 0f</td></tr><tr><td><strong>double</strong></td><td>双精度浮点型</td><td></td><td>System.Double</td><td>0D 0d<br>1E+2 1e+2</td></tr><tr><td><strong>decimal</strong></td><td>十进制浮点型</td><td></td><td>System.Decimal</td><td>0M 0m</td></tr><tr><td><strong>boolean</strong></td><td>布尔</td><td>{ true ，false }</td><td>System.Boolean</td><td>true false</td></tr><tr><td><strong>char</strong></td><td>字符</td><td></td><td>System.Char</td><td>&#39;c&#39;<br>&#39;\\u0067&#39;<br>&#39;\\x43&#39;</td></tr><tr><td><strong>string</strong></td><td>字符串</td><td>4 byte</td><td>System.String</td><td>&quot;string&quot;<br>@&quot;C:\\Users&quot;</td></tr><tr><td><strong>null</strong></td><td>空值</td><td></td><td></td><td></td></tr></tbody></table><h2 id="变量-对象与内存" tabindex="-1"><a class="header-anchor" href="#变量-对象与内存" aria-hidden="true">#</a> 变量，对象与内存</h2><p>变量：用来存储值的容器；变量名表示该类型的值在内存中存储的位置；</p><p>变量一共有7种：</p><ol><li>静态变量</li><li>实例变量（成员变量，字段）</li><li>数组元素</li><li>值参数</li><li>引用参数</li><li>输出形参</li><li>局部变量</li></ol><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>class Student
{
    public static int Amont;
    public int age;
    public string name;

    public static void Main(string[] args)
    {
        Student student = new Student();
        student.age = 18;
        student.name = &quot;xiongjun&quot;;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>申明一个变量</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>有效的修饰符组合 类型 变量名 初始化器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>变量转换为二进制再内存中存储的时候是尊崇：<strong>高高低低原则</strong></p><blockquote><p>高位（内存地址的高位）存高位（变量二进制值的高位）的值，低位存低位的值</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>7 6 5 4 3 2 1 0
0 0 0 0 0 0 0 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>引用类型：</p><p>（栈中）初始化大小 4 个字节，存放对象在堆中分得的起始地址；</p><p>（堆中）计算实例实际需要的内存大小来分配；</p><h3 id="装拆箱" tabindex="-1"><a class="header-anchor" href="#装拆箱" aria-hidden="true">#</a> 装拆箱</h3><p>装箱：将栈中的值搬往堆中再引用堆中地址的值；</p><p>拆箱：将堆中实例存储的值搬到栈中来存储；</p><p>装箱和拆箱都会影响程序的性能</p><h2 id="p8-9-方法的定义、调用与调试" tabindex="-1"><a class="header-anchor" href="#p8-9-方法的定义、调用与调试" aria-hidden="true">#</a> P8 ~ 9 方法的定义、调用与调试</h2><ul><li>方法的又来</li><li>方法的定义与调用</li><li>构造器（一种特殊的方法）</li><li>方法的重载（Overload）</li><li>如何对方法进行 debug</li><li>方法啊的调用与栈的关系</li></ul><h3 id="_1-方法的由来-method" tabindex="-1"><a class="header-anchor" href="#_1-方法的由来-method" aria-hidden="true">#</a> 1. 方法的由来（method）</h3><p>当函数出现在类中作为类的成员函数时，他就叫做方法。</p><h3 id="_2-方法的定义与调用" tabindex="-1"><a class="header-anchor" href="#_2-方法的定义与调用" aria-hidden="true">#</a> 2. 方法的定义与调用</h3><p>定义一个方法</p><p>方法头： 特性~(opt)~ 有效的修饰符组合~(opt)~ partial~(opt)~ <strong>返回值</strong> <strong>方法名</strong> 类型参数列表~(opt)~ <strong>（</strong> 形式参数列表~(opt)~ <strong>）</strong> 类型参数约束~(opt)~ 方法体： 语句块 或者 ;</p><p>方法名遵循：帕斯卡命名法</p><p>Parameter（形参）</p><p>Argument（实参）</p><h3 id="_3-构造方法-constructor" tabindex="-1"><a class="header-anchor" href="#_3-构造方法-constructor" aria-hidden="true">#</a> 3. 构造方法（constructor）</h3><p>构造器快捷键：ctor</p><h3 id="_4-方法的重载" tabindex="-1"><a class="header-anchor" href="#_4-方法的重载" aria-hidden="true">#</a> 4. 方法的重载</h3><p>方法签名（method signature）：有方法的名称，类型参数的个数个每个形参（从左到右的顺序）的类型和种类（值，引用，输出）组成。<strong>方法签名不包含方法的返回值类型和访问修饰符</strong></p><h3 id="_5-debug" tabindex="-1"><a class="header-anchor" href="#_5-debug" aria-hidden="true">#</a> 5. debug</h3><ul><li>设置断点 breakpoint</li><li>观察方法调用时的 call stack （调用堆栈）</li><li>Step-in，Step-over，Step-out <ul><li>Step-in ==&gt; f11</li><li>Step-over ==&gt; f10</li><li>Step-out ==&gt; shift + f11</li></ul></li><li>观察局部变量的值与变化 <ul><li>stack fream 栈帧，C# 中方法调用传参时的参数由调用者压入栈中，压入顺序从左至右依次压入，方法执行完返回，栈帧即被释放。</li></ul></li></ul><h2 id="p10-11-12-操作符详解" tabindex="-1"><a class="header-anchor" href="#p10-11-12-操作符详解" aria-hidden="true">#</a> P10 ~ 11 ~ 12 操作符详解</h2><ul><li>操作符概览</li><li>操作符的本质</li><li>操作符优先级</li><li>同级操作符的运算顺序</li><li>操作符的示例</li></ul><h3 id="_1-操作符概览" tabindex="-1"><a class="header-anchor" href="#_1-操作符概览" aria-hidden="true">#</a> 1. 操作符概览</h3><p><img src="https://cdn.jsdelivr.net/gh/WalterXiong/typora-img/img/202211022109977.png" alt="image-20221024204209365"></p><p><strong>赋值运算符先运算右边的表达式后运行左边的表达式</strong></p><h4 id="_1-1-基本操作符" tabindex="-1"><a class="header-anchor" href="#_1-1-基本操作符" aria-hidden="true">#</a> 1.1 基本操作符</h4><ul><li><p>. ：成员访问操作符；</p></li><li><p>f()：方法调用操作符；</p></li><li><p>a[]：元素访问操作符；</p></li><li><p>x++ / x-- ：后置自 （增/减） 操作符；</p></li><li><p>typeof：我愿称之为 - 反射操作符；</p></li><li><p>default：获取变量默认值的操作符</p><ul><li>结构体类型的默认值为 0；</li><li>引用类型的默认值为 null；</li><li>枚举类型的默认值为 枚举中定义的第一个值（在枚举值自身被赋值的情况下默认值为值等于 0 的那个枚举值，否则为 0）。</li></ul><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>var x = default(Int32);
Console.WriteLine(x); // 0
Console.WriteLine(x.GetType().FullName); // System.Int32
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>new ：创建实例操作符</p><ul><li>new 还能调用类的初始化器，在调用构造器之后直接初始化属性；</li><li>var（variable） ：隐式类型的变量（就是没有告诉编译器该变量明确的数据类型的变量）们需要编译器来推断数据类型的变量；</li><li>扩展 <ul><li>设计模式：依赖注入模式（<strong>目前尚未可知</strong>）。</li><li>new 还可以作为关键字来使用，当子类继承父类时子类中想隐藏父类中同名的方法可以在访问修饰符之前加上 new 关键字即可实现对父类方法的隐藏。</li></ul></li></ul></li><li><p>checked / unchecked：检（不检）查一个值在内存中是否有溢出；</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>uint max = uint.MaxValue;
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
    Console.WriteLine(&quot;这里产生了溢出&quot;);
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
        Console.WriteLine(&quot;这里产生了溢出&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>delegate：委托操作符；</p></li><li><p>sizeof：用来获取 C# 中基本类数据类型的实例在内存中的字节数</p><ul><li>默认情况下支持获取结构体类型的字节数（排除 string 和 object，这俩货是引用类型）；</li><li>非默认情况下，支持获取非结构体类型的字节数，但是前提是处于不安全的上下文中。</li></ul><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>-&gt; ：箭头操作符，指针操作；</p></li></ul><h4 id="_1-2-一元操作符" tabindex="-1"><a class="header-anchor" href="#_1-2-一元操作符" aria-hidden="true">#</a> 1.2 一元操作符</h4><p>至于一个操作数的操作符；</p><ul><li><p><code>&amp;</code> ：取地址操作符</p></li><li><p><code>*</code> ：引用操作符</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>internal class Program
{
    static void Main(string[] args)
    {

        unsafe
        {
            Student stu;
            stu.id = 1;
            stu.score = 99;
            
            Student* pStu = &amp;stu;
            pStu -&gt; score = 100;
            
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>+</code>、<code>-</code>、<code>~</code>、<code>!</code> ：正、负、反、非；</p></li><li><p>++，-- ：前置自（增/减）操作符；</p></li><li><p><code>(T)x</code> ：强制类型转换操作符</p><ul><li><p>隐式（<strong>implicit</strong>）类型转换</p><ul><li><p>不丢失精度的转换</p><p><img src="https://cdn.jsdelivr.net/gh/WalterXiong/typora-img/img/202211022111194.png" alt="image-20221027221530678"></p></li><li><p>子类向父类的转换（多态）；一个引用类型的变量去访问一个引用类型的实例的时候，他只能访问这个变量自己的类型中的成员；</p></li><li><p>装箱</p></li></ul></li><li><p>显示（<strong>explicit</strong>）类型转换</p><ul><li><p>可能会丢失精度（会发生错误）的类型转换，即 cast</p><p><img src="https://cdn.jsdelivr.net/gh/WalterXiong/typora-img/img/202211022111893.png" alt="image-20221027222908081"></p></li><li><p>拆箱</p></li><li><p>Convert 类</p></li><li><p>ToStrin() 方法，parse() / tryPaese()</p></li></ul><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>namespace ImOrExplictOperator
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h4 id="_1-3-算数运算符" tabindex="-1"><a class="header-anchor" href="#_1-3-算数运算符" aria-hidden="true">#</a> 1.3 算数运算符</h4><ul><li><p><code>*</code></p></li><li><p><code>/</code></p></li><li><p><code>%</code></p></li><li><p><code>+</code></p></li><li><p><code>-</code></p></li></ul><h4 id="_1-4-位移操作符" tabindex="-1"><a class="header-anchor" href="#_1-4-位移操作符" aria-hidden="true">#</a> 1.4 位移操作符</h4><ul><li><code>&lt;&lt;</code>：左移运算符</li><li><code>&gt;&gt;</code>：右移运算符</li><li><code>&gt;&gt;&gt;</code>：无符号右移</li></ul><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>static void Main(string[] args)
{
    int x = 7;
	int y = x &lt;&lt; 30;
	Console.WriteLine(Convert.ToString(x, 2).PadLeft(32, &#39;0&#39;));
	Console.WriteLine(Convert.ToString(y, 2).PadLeft(32, &#39;0&#39;));
	Console.WriteLine(y);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-5-关系操作符" tabindex="-1"><a class="header-anchor" href="#_1-5-关系操作符" aria-hidden="true">#</a> 1.5 关系操作符</h4><p>所有关系运算符的结果都是布尔类型的</p><ul><li><code>&gt;</code></li><li><code>&lt;</code></li><li><code>&gt;=</code></li><li><code>&lt;=</code></li><li><code>is</code>：类型检验操作符</li><li><code>as</code>：类型检验操作符</li></ul><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>static void Main(string[] args)
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
        Console.WriteLine(&quot;eat...&quot;);
    }
}

class Human
{
    public void Chat()
    {
        Console.WriteLine(&quot;chat...&quot;);
    }
}

class Teacher
{
    public void Teach()
    {
        Console.WriteLine(&quot;teach...&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>==</code></li><li><code>!=</code></li></ul><h4 id="_1-6-逻辑运算符" tabindex="-1"><a class="header-anchor" href="#_1-6-逻辑运算符" aria-hidden="true">#</a> 1.6 逻辑运算符</h4><p>1 为真；0 为假</p><ul><li><code>&amp;</code>：位与 （同真才真，一假必假）</li><li><code>^</code>：位异或（不同才真，相同为假）</li><li><code>|</code>：位或 （同假才假，一真就真）</li></ul><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_1-7-条件运算符" tabindex="-1"><a class="header-anchor" href="#_1-7-条件运算符" aria-hidden="true">#</a> 1.7 条件运算符</h4><ul><li><code>&amp;&amp;</code>：条件 与</li><li><code>||</code>：条件 或</li></ul><h4 id="_1-8-null-值合并操作符" tabindex="-1"><a class="header-anchor" href="#_1-8-null-值合并操作符" aria-hidden="true">#</a> 1.8 null 值合并操作符</h4><ul><li><code>??</code></li></ul><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>static void Main(string[] args)
{
    Nullable&lt;int&gt; i = 1;
    Console.WriteLine(i.GetType().FullName);
    Console.WriteLine(i);

    int? x = null;
    Console.WriteLine(x.HasValue);
    Console.WriteLine(x == null);

    // x 是不是为 null，如果为 null 则替换为合并操作符之后的数
    int y = x ?? 99;
    Console.WriteLine(y); // 99
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-9-条件操作符" tabindex="-1"><a class="header-anchor" href="#_1-9-条件操作符" aria-hidden="true">#</a> 1.9 条件操作符</h4><ul><li><code>? : </code>：也叫三元运算符</li></ul><h4 id="_2-0-赋值和-lambda-表达式" tabindex="-1"><a class="header-anchor" href="#_2-0-赋值和-lambda-表达式" aria-hidden="true">#</a> 2.0 赋值和 lambda 表达式</h4><ul><li><code>=</code>、<code>*=</code>、<code>/=</code>、<code>%=</code>、<code>+=</code>、<code>-=</code>、<code>&lt;&lt;=</code>、<code>&gt;&gt;=</code>、<code>&amp;=</code>、<code>|=</code></li><li><code>=&gt;</code></li></ul><h3 id="_2-什么是操作符" tabindex="-1"><a class="header-anchor" href="#_2-什么是操作符" aria-hidden="true">#</a> 2. 什么是操作符</h3><h3 id="_3-操作符的优先级" tabindex="-1"><a class="header-anchor" href="#_3-操作符的优先级" aria-hidden="true">#</a> 3. 操作符的优先级</h3><p>同优先级的操作符计算顺序从左至右</p>`,80),a=[s];function t(r,c){return e(),n("div",null,a)}const o=i(l,[["render",t],["__file","BasicDefinitionAndOperator.html.vue"]]);export{o as default};
