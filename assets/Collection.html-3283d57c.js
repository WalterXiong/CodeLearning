const e=JSON.parse('{"key":"v-382ffa8e","path":"/language/java/collection/Collection.html","title":"Collection","lang":"zh-CN","frontmatter":{"title":"Collection","category":"Java","tag":["Java集合"],"date":"2020-06-19T00:00:00.000Z","original":"isOriginal","description":"集合 Collection List 一个对象至少在内存中占据 16 个字节 ArrayList 数据结构：底层基于数组队列 存放元素：有序 线程是否安全：不安全 源码分析 public class ArrayList&lt;E&gt; extends AbstractList&lt;E&gt; implements List&lt;E&gt;, RandomAccess, Cloneable, java.io.Serializable { }","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/CodeLearning/language/java/collection/Collection.html"}],["meta",{"property":"og:site_name","content":"CodeLearning"}],["meta",{"property":"og:title","content":"Collection"}],["meta",{"property":"og:description","content":"集合 Collection List 一个对象至少在内存中占据 16 个字节 ArrayList 数据结构：底层基于数组队列 存放元素：有序 线程是否安全：不安全 源码分析 public class ArrayList&lt;E&gt; extends AbstractList&lt;E&gt; implements List&lt;E&gt;, RandomAccess, Cloneable, java.io.Serializable { }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-06T14:16:59.000Z"}],["meta",{"property":"article:author","content":"Mr.Walter"}],["meta",{"property":"article:tag","content":"Java集合"}],["meta",{"property":"article:published_time","content":"2020-06-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-06T14:16:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Collection\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-06-19T00:00:00.000Z\\",\\"dateModified\\":\\"2022-12-06T14:16:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Walter\\",\\"url\\":\\"https://walterxiong.github.io/CodeLearning/\\"}]}"]]},"headers":[{"level":2,"title":"List","slug":"list","link":"#list","children":[{"level":3,"title":"ArrayList","slug":"arraylist","link":"#arraylist","children":[]},{"level":3,"title":"ArrayList 和 Vector 的区别","slug":"arraylist-和-vector-的区别","link":"#arraylist-和-vector-的区别","children":[]},{"level":3,"title":"ArrayList 和 LinkedList 的区别","slug":"arraylist-和-linkedlist-的区别","link":"#arraylist-和-linkedlist-的区别","children":[]},{"level":3,"title":"CopyOnwriteArrayList（线程安全）","slug":"copyonwritearraylist-线程安全","link":"#copyonwritearraylist-线程安全","children":[]}]},{"level":2,"title":"Set","slug":"set","link":"#set","children":[{"level":3,"title":"HashSet（无序，唯一）","slug":"hashset-无序-唯一","link":"#hashset-无序-唯一","children":[]},{"level":3,"title":"LinkedHashSet","slug":"linkedhashset","link":"#linkedhashset","children":[]},{"level":3,"title":"TreeSet（有序，唯一）","slug":"treeset-有序-唯一","link":"#treeset-有序-唯一","children":[]}]},{"level":2,"title":"Queue","slug":"queue","link":"#queue","children":[{"level":3,"title":"PriorityQueue","slug":"priorityqueue","link":"#priorityqueue","children":[]},{"level":3,"title":"ArrayQueue","slug":"arrayqueue","link":"#arrayqueue","children":[]}]}],"git":{"createdTime":1670336219000,"updatedTime":1670336219000,"contributors":[{"name":"WalterXiong","email":"xiongjun-ol@outlook.com","commits":1}]},"readingTime":{"minutes":11.12,"words":3337},"filePathRelative":"language/java/collection/Collection.md","localizedDate":"2020年6月19日","excerpt":"<h1> 集合 Collection</h1>\\n<h2> List</h2>\\n<p>一个对象至少在内存中占据 16 个字节</p>\\n<h3> ArrayList</h3>\\n<blockquote>\\n<p>数据结构：底层基于数组队列</p>\\n<p>存放元素：有序</p>\\n<p>线程是否安全：不安全</p>\\n</blockquote>\\n<h4> 源码分析</h4>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">ArrayList</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">E</span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token keyword\\">extends</span> <span class=\\"token class-name\\">AbstractList</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">E</span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token keyword\\">implements</span> <span class=\\"token class-name\\">List</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">E</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">RandomAccess</span><span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">Cloneable</span><span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\"><span class=\\"token namespace\\">java<span class=\\"token punctuation\\">.</span>io<span class=\\"token punctuation\\">.</span></span>Serializable</span> <span class=\\"token punctuation\\">{</span>\\n    \\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};