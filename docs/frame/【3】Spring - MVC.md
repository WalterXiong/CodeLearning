# Spring - MVC

springMVC 开始项目

![](https://gitee.com/walterxiong/typora-images/raw/master/SpringMVC.png)

1. **`DispatcherServlet`**：**前端控制器**

   用户请求到达前端控制器，它相当于 MVC 模式中的 C（Controller），DispatcherServlet 是整个流程控制的中心，由它调用其它组件处理用户的请求，DispatcherServlet 的存在降低了组件之间的耦合性。

   作用：作为接受请求，响应结果，相当于转发器，中央处理器，减少其他组件之间的耦合度。

2. **`HandlerMapping`**：**处理器映射器**

   HandlerMapping 负责根据用户请求找到 Handler（即：处理器），SpringMVC 提供了不同的映射器实现实现不同的映射方式，例如：配置文件方式、实现接口方式、注解方式等。

   作用：根据请求的 Url 查找 Handler

3. **`Handler`**：**处理器** （需要程序员开发）

   Handler 是继 DispatcherServlet 前端控制器的后端控制器，在 DispatcherServlet 的控制下，Handler 对具体的用户请求进行处理。由于 Handler 设计到具体的用户业务请求，所以一般情况需要程序员根据业务需求开发 Handler。

4. **`HandlerAdapter`**：**处理器适配器**

   通过 HandlerAdapter 对处理器进行执行，这是适配器模式的应用，通过扩展适配器可以对更多类型的处理器进行执行。

   主要作用是适配处理器中的各个方法！！！

5. **`ViewResolver`**：**视图解析器**

   ViewResolver 负责将处理结果生成 View 视图，ViewResolver 首先根据逻辑视图名解析成物理视图名，即具体的页面地址，再生成View视图对象，最后对View进行渲染将处理结果通过页面的展示给用户。

   SpringMVC 框架提供了很多 View 视图类型，包括：JSTLView、freemarkerView、pdfView等等.

6. **`View`**：**视图** （需要程序员开发 jsp） 

   View是一个接口，实现类支持不同的View类型（jsp、freemarker、pdf）

   一般情况下需要通过页面标签或者页面模板技术将模型数据通过页面展示给用户，需要由程序员根据业务需求开发具体的页面。



## 实际项目配置

导入依赖包：

```txt
spring-webmvc-4.3.10.RELEASE.jar
spring-web-4.3.10.RELEASE.jar
spring-aop-4.3.10.RELEASE.jar
spring-beans-4.3.10.RELEASE.jar
spring-context-4.3.10.RELEASE.jar
spring-core-4.3.10.RELEASE.jar
commons-logging-1.2.jar
spring-expression-4.3.10.RELEASE.jar
servlet-api.jar
```

在 web.xml 中配置前端控制器

```xml
<!-- 所有的请求都交给 dispatcherservlet 处理 -->
<servlet>
    <servlet-name>abc</servlet-name>
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
    <!-- 加载 springMVC 配置文件 -->
    <init-param>
        <!-- 属性名 -->
        <param-name>contextConfigLocation</param-name>
        <!-- Tomcat 上加载配置文件的目录 classes ==》classpath -->
        <param-value>classpath:spring-context-mvc4.xml</param-value>
    </init-param>
    <load-on-startup>1</load-on-startup>
</servlet>
<servlet-mapping>
    <servlet-name>abc</servlet-name>
    <!-- 
   /* 和 /**
   ==》 /* 	：拦截所有的请求，但是 jsp 文件除外
   ==》 /**	：拦截所有的请求，包括 jsp
   -->
    <url-pattern>/</url-pattern>
</servlet-mapping>
```

在 src 下，创建 spring-mvc 的 xml 配置文件，并进行配置（**第四种 + 注解的方式**）

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xmlns:tx="http://www.springframework.org/schema/tx"
       xmlns:mvc="http://www.springframework.org/schema/mvc"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans 
       			   http://www.springframework.org/schema/beans/spring-beans.xsd
       			   http://www.springframework.org/schema/context 
       			   http://www.springframework.org/schema/context/spring-context.xsd
       			   http://www.springframework.org/schema/aop
       			   http://www.springframework.org/schema/aop/spring-aop.xsd
       			   http://www.springframework.org/schema/tx
       			   http://www.springframework.org/schema/tx/spring-tx.xsd
       			   http://www.springframework.org/schema/mvc
       			   http://www.springframework.org/schema/mvc/spring-mvc.xsd" >
	
	<!-- 扫描注解 -->
	<context:component-scan base-package="com.xiongjun.controller"></context:component-scan>
	
	<!-- 版本4 -->
	<!-- 自动创建 handler 处理映射器和处理器适配器 -->
	<mvc:annotation-driven></mvc:annotation-driven>
		
	<!-- 视图解析器：将逻辑视图转换成物理视图 -->
	<bean class="org.springframework.web.servlet.view.InternalResourceViewResolver"></bean>
	
	<!-- 放行静态资源：html、css、js、图片、视频-->
	<mvc:default-servlet-handler/>
	
</beans>
```

