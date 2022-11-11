import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{f as n}from"./app.a3cd2163.js";const e={},s=n(`<p>---</p><p>title: \u8868\u8FBE\u5F0F&amp;\u8BED\u53E5\u8BE6\u89E3</p><p>category: C#</p><p>tag:</p><p>- C# \u57FA\u7840</p><p>date: 2022-11-1</p><p>original: isOriginal</p><p>---</p><h1 id="c-\u8868\u8FBE\u5F0F-\u8BED\u53E5\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#c-\u8868\u8FBE\u5F0F-\u8BED\u53E5\u8BE6\u89E3" aria-hidden="true">#</a> C# - \u8868\u8FBE\u5F0F\uFF0C\u8BED\u53E5\u8BE6\u89E3</h1><ul><li><p>\u8868\u8FBE\u5F0F\u7684\u5B9A\u4E49</p></li><li><p>\u5404\u7C7B\u8868\u8FBE\u5F0F\u6D45\u70AB</p></li><li><p>\u8BED\u53E5\u7684\u5B9A\u4E49</p></li><li><p>\u8BED\u53E5\u8BE6\u89E3</p></li></ul><h2 id="single-responsibility-\u5355\u4E00\u804C\u8D23\u539F\u5219" tabindex="-1"><a class="header-anchor" href="#single-responsibility-\u5355\u4E00\u804C\u8D23\u539F\u5219" aria-hidden="true">#</a> * single responsibility \u5355\u4E00\u804C\u8D23\u539F\u5219</h2><h2 id="\u5C3D\u65E9-return-\u539F\u5219" tabindex="-1"><a class="header-anchor" href="#\u5C3D\u65E9-return-\u539F\u5219" aria-hidden="true">#</a> * \u5C3D\u65E9 return \u539F\u5219</h2><p>\u4E00\u3001\u4EC0\u4E48\u662F\u8868\u8FBE\u5F0F</p><p>\u4E8C\u3001C# \u4E2D\u8868\u8FBE\u5F0F\u5206\u7C7B</p><h2 id="\u4E09\u3001\u4EC0\u4E48\u662F\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u4EC0\u4E48\u662F\u8BED\u53E5" aria-hidden="true">#</a> \u4E09\u3001\u4EC0\u4E48\u662F\u8BED\u53E5</h2><p>\u8BED\u53E5\u662F\u9AD8\u7EA7\u8BED\u8A00\u7684\u8BED\u6CD5\uFF1B</p><ul><li>C# \u8BED\u8A00\u7684\u8BED\u53E5\u9664\u4E86\u80FD\u8BA9\u7A0B\u5E8F\u5458\u201D\u987A\u5E8F\u5730\u201C\uFF08sequentially\uFF09\u8868\u8FBE\u7B97\u6CD5\u601D\u60F3\uFF0C\u8FD8\u80FD\u901A\u8FC7\u6761\u4EF6\u5224\u65AD\u3001\u8DF3\u8F6C\u548C\u5FAA\u73AF\u7B49\u65B9\u6CD5\u63A7\u5236\u7A0B\u5E8F\u903B\u8F91\u7684\u8D70\u5411\uFF1B</li><li>\u7B80\u800C\u8A00\u4E4B\u5C31\u662F\uFF1A\u9648\u8FF0\u7B97\u6CD5\u601D\u60F3\uFF0C\u63A7\u5236\u903B\u8F91\u8D70\u5411\uFF0C\u5B8C\u6210<strong>\u6709\u610F\u4E49\u7684</strong>\u52A8\u4F5C\uFF1B</li><li>C# \u7684\u8BED\u53E5\u7531\u5206\u53F7\uFF08 <code>;</code> \uFF09\u7ED3\u5C3E\uFF0C\u4F46\u662F\u7531\u5206\u53F7\u7ED3\u5C3E\u7684\u4E0D\u4E00\u5B9A\u90FD\u662F\u8BED\u53E5\uFF1B</li><li>\u8BED\u53E5\u4E00\u5B9A\u51FA\u73B0\u5728\u65B9\u6CD5\u4E2D\uFF1B</li></ul><p>C# \u4E2D\u7684\u8BED\u53E5\uFF1A</p><ul><li><p>\u58F0\u660E\u8BED\u53E5</p></li><li><p>\u6807\u7B7E\u8BED\u53E5</p><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>hello: Console.WriteLine(&quot;Hello World!&quot;);
...
...    
goto hello;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5D4C\u5957\u8BED\u53E5</p></li></ul><h2 id="\u56DB\u3001\u8BED\u53E5\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u8BED\u53E5\u8BE6\u89E3" aria-hidden="true">#</a> \u56DB\u3001\u8BED\u53E5\u8BE6\u89E3</h2><h3 id="_1-\u58F0\u660E\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#_1-\u58F0\u660E\u8BED\u53E5" aria-hidden="true">#</a> 1. \u58F0\u660E\u8BED\u53E5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>int x = 100;
const int y = 200;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u8868\u8FBE\u5F0F\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#_2-\u8868\u8FBE\u5F0F\u8BED\u53E5" aria-hidden="true">#</a> 2. \u8868\u8FBE\u5F0F\u8BED\u53E5</h3><ul><li><p>\u65B9\u6CD5\u8C03\u7528\u8868\u8FBE\u5F0F</p><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>Console.WriteLine(&quot;Hello World!&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5BF9\u8C61\u521B\u5EFA\u8868\u8FBE\u5F0F</p><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>new Object();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u8D4B\u503C\u8BED\u53E5</p><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>int x = 100;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u540E\u7F6E\u52A0\u52A0\u8BED\u53E5</p><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>x++;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u540E\u7F6E\u51CF\u51CF\u8BED\u53E5</p><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>x--;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u524D\u7F6E\u52A0\u52A0\u8BED\u53E5</p><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>++x;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u524D\u7F6E\u51CF\u51CF\u8BED\u53E5</p><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>--x;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="_3-\u5757\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#_3-\u5757\u8BED\u53E5" aria-hidden="true">#</a> 3. \u5757\u8BED\u53E5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
	...
	...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-\u9009\u62E9-\u5224\u65AD\u3001\u5206\u652F-\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#_4-\u9009\u62E9-\u5224\u65AD\u3001\u5206\u652F-\u8BED\u53E5" aria-hidden="true">#</a> 4. \u9009\u62E9\uFF08\u5224\u65AD\u3001\u5206\u652F\uFF09\u8BED\u53E5</h3><h4 id="_4-1-if-\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#_4-1-if-\u8BED\u53E5" aria-hidden="true">#</a> 4.1 if \u8BED\u53E5</h4><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>int x = 100;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-switch-\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#_4-2-switch-\u8BED\u53E5" aria-hidden="true">#</a> 4.2 switch \u8BED\u53E5</h4><blockquote><p>switch \u8868\u8FBE\u5F0F\u7684\u7C7B\u578B\u4E3A\uFF1Asbyte\u3001byte\u3001short\u3001ushort\u3001int\u3001uint\u3001long\u3001ulong\u3001bool\u3001char\u3001string \u6216\u8005 enum-type\uFF0C\u4EE5\u53CA\u4E0A\u8FF0\u7C7B\u578B\u7684\u53EF\u7A7A\u7C7B\u578B</p></blockquote><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>int score = 95;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-try-\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#_5-try-\u8BED\u53E5" aria-hidden="true">#</a> 5. try \u8BED\u53E5</h3><h4 id="_5-1-try-catch" tabindex="-1"><a class="header-anchor" href="#_5-1-try-catch" aria-hidden="true">#</a> 5.1 try - catch</h4><ul><li><p>\u901A\u7528\u7C7B\u578B\u7684\u5F02\u5E38\u5904\u7406</p><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>public int Add(string s1, string s2)
{
    int x = 0;
    try
    {
        x = int.Parse(s1);
    }
    catch
    {
        Console.WriteLine(&quot;\u7B2C\u4E00\u4E2A\u6570\u5B57\u53D1\u751F\u5F02\u5E38&quot;);
    }

    int y = int.Parse(s2);

    return x + y;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u7279\u5B9A\u7C7B\u578B\u5F02\u5E38\u7684\u6355\u6349\u5904\u7406</p><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>public int Add(string s1, string s2)
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
        Console.WriteLine(&quot;\u53C2\u6570\u4E3A\u7A7A&quot;);
    }
    catch (FormatException)
    {
        Console.WriteLine(&quot;\u53C2\u6570\u4E0D\u662F\u6570\u5B57\u7C7B\u578B&quot;);
    }
    catch(OverflowException)
    {
        Console.WriteLine(&quot;\u8D85\u51FA\u754C\u9650&quot;);
    }

    return x + y;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="_5-2-try-finnally" tabindex="-1"><a class="header-anchor" href="#_5-2-try-finnally" aria-hidden="true">#</a> 5.2 try - finnally</h4><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>try
{
	......
}
finally
{
    // \u4F5C\u75281
    Console.WriteLine(&quot;\u91CA\u653E\u5FC5\u8981\u7684\u8D44\u6E90&quot;);
    // \u4F5C\u75282
    Console.WriteLine(&quot;\u6253\u5370 log \u8BB0\u5F55&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-3-try-catch-finally" tabindex="-1"><a class="header-anchor" href="#_5-3-try-catch-finally" aria-hidden="true">#</a> 5.3 try - catch - finally</h4><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>public int Add(string s1, string s2)
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
        Console.WriteLine(&quot;\u53C2\u6570\u4E3A\u7A7A&quot;);
        hasError = true;
    }
    catch (FormatException)
    {
        Console.WriteLine(&quot;\u53C2\u6570\u4E0D\u662F\u6570\u5B57\u7C7B\u578B&quot;);
        hasError = true;
    }
    catch(OverflowException)
    {
        Console.WriteLine(&quot;\u8D85\u51FA\u754C\u9650&quot;);
        hasError = true;
    }
    finally
    {
        if (hasError)
        {
            Console.WriteLine(&quot;\u7A0B\u5E8F\u6267\u884C\u5F02\u5E38\u7684\u7ED3\u679C&quot;);
        }
        else
        {
            Console.WriteLine(&quot;\u7A0B\u5E8F\u8FD0\u884C\u7ED3\u675F\uFF01&quot;);
        }
    }
    return x + y;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>throw</p><p>\u5C06\u6293\u4F4F\u7684\u5F02\u5E38\u629B\u51FA\u53BB</p><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>namespace TryStatement
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
                Console.WriteLine(&quot;\u53C2\u6570\u4E3A\u7A7A&quot;);
            }
            catch (FormatException fe)
            {
                Console.WriteLine(&quot;\u53C2\u6570\u4E0D\u662F\u6570\u5B57\u7C7B\u578B&quot;);
            }
            catch(OverflowException oe)
            {
                /*
                 * throw \u540E\u53EF\u4EE5\u4E0D\u8DDF\u6355\u83B7\u5230\u7684\u5F02\u5E38\u540D\u79F0
                 * \u540C\u65F6 catch \u4E2D\u7684\u5F02\u5E38\u53D8\u91CF\u540D\u4E5F\u53EF\u4EE5\u4E0D\u5B9A\u4E49\u51FA\u6765\u4E5F\u53EF\u4EE5\u8FDB\u884C\u629B\u51FA
                 */
                throw oe; 
            }

            return x + y;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_6-\u8FED\u4EE3\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#_6-\u8FED\u4EE3\u8BED\u53E5" aria-hidden="true">#</a> 6. \u8FED\u4EE3\u8BED\u53E5</h3><h4 id="_6-1-while-\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#_6-1-while-\u8BED\u53E5" aria-hidden="true">#</a> 6.1 while \u8BED\u53E5</h4><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>int score = 0;
bool canContinue = true;
while (true)
{
    Console.WriteLine(&quot;\u8BF7\u8F93\u5165\u7B2C\u4E00\u4E2A\u6570\u5B57\uFF1A&quot;);
    int x = int.Parse(Console.ReadLine());

    Console.WriteLine(&quot;\u8BF7\u8F93\u5165\u7B2C\u4E8C\u4E2A\u6570\u5B57\uFF1A&quot;);
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

Console.WriteLine(&quot;\u672C\u8F6E\u5F97\u5206\uFF1A{0}&quot;, score);
Console.WriteLine(&quot;Game Over!!!&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-2-do-\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#_6-2-do-\u8BED\u53E5" aria-hidden="true">#</a> 6.2 do \u8BED\u53E5</h4><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>int sum = 0;
int score = 0;
do
{
    Console.WriteLine(&quot;\u8BF7\u8F93\u5165\u7B2C\u4E00\u4E2A\u6570\u5B57\uFF1A&quot;);
    int x = int.Parse(Console.ReadLine());

    Console.WriteLine(&quot;\u8BF7\u8F93\u5165\u7B2C\u4E8C\u4E2A\u6570\u5B57\uFF1A&quot;);
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

Console.WriteLine(&quot;\u672C\u8F6E\u5F97\u5206\uFF1A{0}&quot;, score);
Console.WriteLine(&quot;Game Over!!!&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-3-for-\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#_6-3-for-\u8BED\u53E5" aria-hidden="true">#</a> 6.3 for \u8BED\u53E5</h4><p>\u8BA1\u6570\u5FAA\u73AF\u66F4\u65B9\u4FBF</p><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>// while \u5B9E\u73B0\u8BA1\u6570\u5FAA\u73AF
int counter = 0;
while (counter &lt; 10)
{
    counter++;
    Console.WriteLine(counter);
}

// for \u5B9E\u73B0\u8BA1\u6570\u5FAA\u73AF
for (int i = 0; i &lt; 10; i++)
{
    Console.WriteLine(i + 1);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-4-foreach-\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#_6-4-foreach-\u8BED\u53E5" aria-hidden="true">#</a> 6.4 foreach \u8BED\u53E5</h4><p>\u4EC0\u4E48\u6837\u7684\u96C6\u5408\u53EF\u4EE5\u88AB\u904D\u5386\uFF1A</p><p>\u200B <strong>\u6240\u6709\u5B9E\u73B0\u4E86 IEnumerable \u63A5\u53E3\u7684\u96C6\u5408\u6216\u6570\u7EC4</strong></p><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>List&lt;int&gt; intList = new List&lt;int&gt;() { 1, 2, 3, 4, 5, 6, 7, 8 };

// \u4F7F\u7528\u8FED\u4EE3\u5668\u8FED\u4EE3 intList \u96C6\u5408
IEnumerator enumerator = intList.GetEnumerator();
while (enumerator.MoveNext())
{
    Console.WriteLine(enumerator.Current);
}

// \u4F7F\u7528 forwach \u8FED\u4EE3 intList \u96C6\u5408
foreach (var item in intList)
{
    Console.WriteLine(item);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-\u8DF3\u8F6C\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#_7-\u8DF3\u8F6C\u8BED\u53E5" aria-hidden="true">#</a> 7. \u8DF3\u8F6C\u8BED\u53E5</h3><h4 id="_7-1-break-\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#_7-1-break-\u8BED\u53E5" aria-hidden="true">#</a> 7.1 break \u8BED\u53E5</h4><p>\u8DF3\u51FA\u5FAA\u73AF\u4F53\uFF0C\u6267\u884C\u5FAA\u73AF\u4F53\u4E4B\u540E\u7684\u8BED\u53E5\u3002</p><h4 id="_7-2-continue-\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#_7-2-continue-\u8BED\u53E5" aria-hidden="true">#</a> 7.2 continue \u8BED\u53E5</h4><p>\u7ED3\u675F\uFF08\u653E\u5F03\uFF09\u5F53\u524D\u8FD9\u6B21\u5FAA\u73AF\uFF0C\u5F00\u59CB\u4E0B\u4E00\u6B21\u5FAA\u73AF\u3002</p><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>int score = 0;
bool canContinue = true;
do
{
    Console.WriteLine(&quot;\u8BF7\u8F93\u5165\u7B2C\u4E00\u4E2A\u6570\u5B57\uFF1A&quot;);
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
        Console.WriteLine(&quot;\u7B2C\u4E00\u4E2A\u6570\u5B57\u9519\u8BEF&quot;);
        continue;
    }

    Console.WriteLine(&quot;\u8BF7\u8F93\u5165\u7B2C\u4E8C\u4E2A\u6570\u5B57\uFF1A&quot;);
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
        Console.WriteLine(&quot;\u7B2C\u4E8C\u4E2A\u6570\u5B57\u9519\u8BEF&quot;);
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

Console.WriteLine(&quot;\u672C\u8F6E\u5F97\u5206\uFF1A{0}&quot;, score);
Console.WriteLine(&quot;Game Over!!!&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>break \u548C continue \u5728\u5FAA\u73AF\u5D4C\u5957\u8BED\u53E5\u4E2D\uFF0C\u90FD\u53EA\u80FD\u5F71\u54CD\u5F53\u524D\u5305\u542B\u5B83\u4EEC\u7684\u5FAA\u73AF\u4F53\u8BED\u53E5\u6267\u884C\uFF08\u4E0D\u80FD\u5F71\u54CD\u5916\u5C42\uFF09</p></blockquote><h4 id="_7-3-goto" tabindex="-1"><a class="header-anchor" href="#_7-3-goto" aria-hidden="true">#</a> 7.3 goto</h4><p>\u975E\u4E3B\u6D41\u8BED\u53E5\uFF0C\u4E86\u89E3\u5728 switch \u4E2D\u5730\u7528\u6CD5\u5373\u53EF\u3002</p><h4 id="_7-4-return-\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#_7-4-return-\u8BED\u53E5" aria-hidden="true">#</a> 7.4 return \u8BED\u53E5</h4><h4 id="_7-5-checked-unchecked-\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#_7-5-checked-unchecked-\u8BED\u53E5" aria-hidden="true">#</a> 7.5 checked/unchecked \u8BED\u53E5</h4><h4 id="_7-6-\u6807\u7B7E\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#_7-6-\u6807\u7B7E\u8BED\u53E5" aria-hidden="true">#</a> 7.6 \u6807\u7B7E\u8BED\u53E5</h4><h4 id="_7-7-\u7A7A\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#_7-7-\u7A7A\u8BED\u53E5" aria-hidden="true">#</a> 7.7 \u7A7A\u8BED\u53E5</h4><blockquote><p>\u4EE5\u4E0B\u8BED\u53E5\u5728\u540E\u7EED\u5B66\u4E60\u5230\u76F8\u5173\u5185\u5BB9\u540E\u518D\u6765\u586B\u8865</p><p>7.8 using \u8BED\u53E5</p><p>7.9 yeild \u8BED\u53E5</p><p>7.10 lock \u8BED\u53E5</p></blockquote>`,66);function l(d,a){return s}var c=i(e,[["render",l],["__file","ExpressionAndStatement.html.vue"]]);export{c as default};
