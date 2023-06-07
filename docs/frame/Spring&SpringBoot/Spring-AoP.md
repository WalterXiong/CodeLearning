# Spring - AoP



## 谈谈自己对于 AOP 的了解

AOP（Aspect-Oriented Programming - 面向切面编程（基于动态代理实现）），在程序原有纵向执行流程中，针对某一个或某一些方法添加通知，形成横切面过程就叫做面向切面编程。

能够将那些与业务无关，却为业务模块所共同调用的逻辑或责任（例如事务处理、日志管理、权限控制等）封装起来，便于减少系统的重复代码，降低模块间的耦合度，并有利于未来的可拓展性和可维护性。

Spring AOP 就是基于动态代理的，如果要代理的对象，实现了某个接口，那么 Spring AOP 会使用 **JDK Proxy**，去创建代理对象，而对于没有实现接口的对象，就无法使用 JDK Proxy 去进行代理了，这时候 Spring AOP 会使用 **Cglib** 生成一个被代理对象的子类来作为代理，如下图所示：

![SpringAOPProcess](https://img-blog.csdnimg.cn/img_convert/230ae587a322d6e4d09510161987d346.jpeg)



### AOP 切面编程设计到的一些专业术语

![](https://gitee.com/walterxiong/typora-images/raw/master/spring-AOP.png)

| 术语                | 含义                                                         |
| :------------------ | :----------------------------------------------------------- |
| 目标(Target)        | 被通知的对象                                                 |
| 代理(Proxy)         | 向目标对象应用通知之后创建的代理对象                         |
| 连接点(JoinPoint)   | 目标对象的所属类中，定义的所有方法均为连接点                 |
| 切入点(Pointcut)  ② | 被切面拦截 / 增强的连接点（切入点一定是连接点，连接点不一定是切入点）<br />==需要添加额外功能的方法== |
| 通知(Advice)        | 增强的逻辑 / 代码，也即拦截到目标对象的连接点之后要做的事情<br />前置通知 ③：在切点之前执行的功能，before advice <br />后置通知 ④：在切点之后执行的功能，after advice <br />异常通知：如果切点执行过程中出现异常，会触发异常通知，throws advice |
| 切面(Aspect)  ①     | 切入点(Pointcut) + 通知(Advice)；==所有功能总称叫做切面==    |
| Weaving(织入)       | 将通知应用到目标对象，进而生成代理对象的过程动作；<br />==把切面嵌入到原有功能的过程叫做织入== |



### Spring AOP 和 AspectJ AOP 有什么区别？

**Spring AOP 属于运行时增强，而 AspectJ 是编译时增强。** Spring AOP 基于代理(Proxying)，而 AspectJ 基于字节码操作(Bytecode Manipulation)。

Spring AOP 已经集成了 AspectJ ，AspectJ 应该算的上是 Java 生态系统中最完整的 AOP 框架了。AspectJ 相比于 Spring AOP 功能更加强大，但是 Spring AOP 相对来说更简单，

如果我们的切面比较少，那么两者性能差异不大。但是，当切面太多的话，最好选择 AspectJ ，它比 Spring AOP 快很多



### AspectJ 定义的通知类型有哪些？

- **Before**（前置通知）：目标对象的方法调用之前触发
- **After** （后置通知）：目标对象的方法调用之后触发
- **AfterReturning**（返回通知）：目标对象的方法调用完成，在返回结果值之后触发
- **AfterThrowing**（异常通知） ：目标对象的方法运行中抛出 / 触发异常后触发。AfterReturning 和 AfterThrowing 两者互斥。如果方法调用成功无异常，则会有返回值；如果方法抛出了异常，则不会有返回值。
- **Around** （环绕通知）：编程式控制目标对象的方法调用。环绕通知是所有通知类型中可操作范围最大的一种，因为它可以直接拿到目标对象，以及要执行的方法，所以环绕通知可以任意的在目标对象的方法调用前后搞事，甚至不调用目标对象的方法。



### 多个切面的执行顺序如何控制？

1、通常使用`@Order` 注解直接定义切面顺序

```java
// 值越小优先级越高
@Order(3)
@Component
@Aspect
public class LoggingAspect implements Ordered {
```

**2、实现`Ordered` 接口重写 `getOrder` 方法。**

```java
@Component
@Aspect
public class LoggingAspect implements Ordered {

    // ....

    @Override
    public int getOrder() {
        // 返回值越小优先级越高
        return 1;
    }
}
```





## AspectJ

- 每个通知不需要实现接口或类

- 配置 spring 配置文件时在<aop : config> 的子标签 <aop : aspect>中配置

首次有 UserService 接口和 UserServiceImpl 实现类，模拟实际开发场景

```java
//接口
public interface UserService {
	
	public void addUser();

	public void deleteUser(int userid);
	
	public void updateUser(String user);
}

//实现类
public class UserServiceImpl implements UserService{

	public void addUser() {
		System.out.println("执行 sql，保存 user");
	}

	@Override
	public void deleteUser(int userid) {
		System.out.println("删除用户");
		
	}

	@Override
	public void updateUser(String user) {
		System.out.println("更新用户信息");
	}

}
```

 

## 普通配置方式

通知类：

```java
//前置通知（before）
public void before(){
	System.out.println("前置通知：开启事务");
}
```

```java
//后置通知（after）
//不论切点是否遇到异常导致方法结束，他都会执行
public void after(){
    System.out.println("后置通知：（日志处理）");
}
```

```java
//返回后通知(after-returning)
//执行 return 之后的通知，意味着方法正常结束，没有异常
public void afterReturning(){
    System.out.println("返回后通知：提交事务");
}
```

```java
//异常通知（）
//只有切点发生异常才会执行
public void exception(){
    System.out.println("异常：回滚");
}
```

```java
//环绕通知（around）
//环绕通知，通过 point 对象可以知道将要执行的切点方法是哪个方法
public void around(ProceedingJoinPoint point){

    MethodSignature signature = (MethodSignature) point.getSignature();

    System.out.println("即将执行的：" + signature.getMethod().getName());

    //调用切点方法
    try {
        point.proceed();
    } 
    catch (Throwable e) {
        //可以在此处向日志表插入一条信息：时间、方法（全名）、参数、异常信息（）
        e.printStackTrace();
    }
    //System.out.println("环绕通知：环绕");
}
```

spring-context：

```java
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:context="http://www.springframework.org/schema/context"
	   xmlns:aop="http://www.springframework.org/schema/aop"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans 
       			   http://www.springframework.org/schema/beans/spring-beans.xsd
       			   http://www.springframework.org/schema/context 
       			   http://www.springframework.org/schema/context/spring-context.xsd
	               http://www.springframework.org/schema/aop
       			   http://www.springframework.org/schema/aop/spring-aop.xsd" >
	
	<!-- 配置 userServiceImpl 类对象 -->
	<bean id="userService" class="com.xiongjun.service.impl.UserServiceImpl"></bean>

	<!-- 切面类，配置通知类的 bean-->
	<bean id="advice" class="com.xiongjun.advice.AspectAdvice"></bean>

	<!--配置切面-->
	<aop:config>
        
		<!--配置切点：告知 spring 那些方法需要添加通知
			expreession：切入点表达式，通过表达式找到需要添加他通知的方法
		-->
		<aop:pointcut expression="execution(* com.xiongjun.service.impl.*.*(..))" id="pc"/>

		<!--给切点配置通知-->
		<aop:aspect ref="advice">
			<aop:before method="before" pointcut-ref="pc"/>
			<aop:after method="after" pointcut-ref="pc"/>
			<aop:after-returning method="afterReturning" pointcut-ref="pc"/>
			<aop:after-throwing method="exception" pointcut-ref="pc"/>
			<aop:around method="around" pointcut-ref="pc"/>
		</aop:aspect>
	</aop:config>
	
</beans>
```

测试类：

```java
public class Test {
	
	public static void main(String[] args) {
		
		ApplicationContext context = new ClassPathXmlApplicationContext("spring-context-anno.xml");
		
		UserService userService = context.getBean(UserService.class);
			
		userService.addUser();
		System.out.println("==================");
		userService.deleteUser(1);
		System.out.println("==================");
		userService.updateUser("user");
		
		String[] names = context.getBeanDefinitionNames();
		
		for (String string : names) {
			System.out.println(string);
		}
		
		System.out.println(userService.getClass());	
	}
}
```



## 处理事务配置方式（SM Ultra）

### 普通 XML 配置方式

spring-config.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xmlns:tx="http://www.springframework.org/schema/tx"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans 
       			   http://www.springframework.org/schema/beans/spring-beans.xsd
       			   http://www.springframework.org/schema/context 
       			   http://www.springframework.org/schema/context/spring-context.xsd
       			   http://www.springframework.org/schema/aop
       			   http://www.springframework.org/schema/aop/spring-aop.xsd
       			   http://www.springframework.org/schema/tx
       			   http://www.springframework.org/schema/tx/spring-tx.xsd" >
	
	<!-- 引入数据库连接文件 -->
	<context:property-placeholder location="db.properties"/>
	
	<!-- 1.创建一个 DataSource -->
	<bean id="dataSource" class="org.springframework.jdbc.datasource.DriverManagerDataSource">
		<property name="driverClassName" value="${jdbc.driver}"></property>
		<property name="url" value="${jdbc.url}"></property>
		<property name="username" value="${jdbc.username}"></property>
		<property name="password" value="${jdbc.password}"></property>
	</bean>
	
	<!-- 2.配置 Mybatis 的 SqlSessionFactory -->
	<bean id="factory" class="org.mybatis.spring.SqlSessionFactoryBean">
		
		<!-- 配置 dataSource 操作哪个数据库 ref：是上面创建的 dataSource -->
		<property name="dataSource" ref="dataSource"></property>
		
		<!-- 读取 mybatis 的配置文件 -->
		<property name="configLocation" value="mybatis-config.xml"></property>		
	</bean>
	
	<!-- 3.配置 mapper 利用 spring 自动生成 mapper-->
	<bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">
		
		<!-- 扫描 mapper 所在的包，自动生成 mapper -->
		<property name="basePackage" value="com.xiongjun.mapper"></property>
		
		<!-- 指定 factory，由 factory 创建 session，再由 session 创建 mapper (此处有天坑)-->
		<property name="sqlSessionFactoryBeanName" value="factory"></property>
	</bean>
	
	<!-- 配置 Service -->
	<bean id="userService" class="com.xiongjun.service.impl.UserServiceImpl">
		<property name="userMapper" ref="userMapper"></property>
		<property name="logService" ref="logService"></property>
	</bean>
	
	<bean id="logService" class="com.xiongjun.service.impl.LogServiceImpl">
		<property name="logMapper" ref="logMapper"></property>
	</bean>
	
	<!-- ============================== 事务处理配置 ==================================== -->
	<aop:config>
		<!-- 切点 -->
		<aop:pointcut expression="execution(* com.xiongjun.service.impl.*.*(..))" id="pc"/>
		
		<!-- 事务通知（器） -->
		<aop:advisor advice-ref="tx_advice" pointcut-ref="pc"/>
	</aop:config>
	
	<!-- 事务通知的 bean ：偏好设置-->
	<tx:advice id="tx_advice" transaction-manager="transactionManager">
		<!-- 此处可以为不同的切点方法，配置不同的 事务处理方式 -->
		<tx:attributes>
			<!-- 此处代表所有方法上的额事务都按照默认的哦欸之行进处理 -->
			<!-- propagation :事务传播机制
					·如果执行一个方法遇到了两个事务，怎么处理两个事务
					·默认 required
			 -->
			<tx:method name="*" propagation="REQUIRED" isolation="DEFAULT"/>
		</tx:attributes>
	</tx:advice>
	
	<!-- 事务管理器 -->
	<bean id="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
		<!-- 指定管理哪给数据的数据 -->
		<property name="dataSource" ref="dataSource"></property>
	</bean>
	
	
</beans>
```



UserService 接口和 UserServiceImpl 实现类：

```java
//接口
public interface UserService {
	
	public void addUser(User user);
}

//实现类
public class UserServiceImpl implements UserService{

	private UserMapper userMapper;
	
	private LogService logService;
    
    @Override
	public int addUser(User user) {
		
        //添加用户
		int result = userMapper.addUser(user);

		//记录日志
		Log log = 
				new Log()
				.setActiontime(new Date())
				.setMessage("新注册了一个用户："+ user.getAccount());
        
		//添加日志
		logService.addLog(log);
		
		System.out.println(1/0);
		return result;
	}

}
```



Log（Mapper、Service、ServiceImpl）：

```java
//mapper
public interface LogMapper {

	//插入一条数据
	@Insert("insert into log values(default, #{actiontime}, #{message})")
	public int addLog(Log log);
}

//service
public interface LogService {

	public int addLog(Log log);
}

//service实现类
@Data
public class LogServiceImpl implements LogService{

	private LogMapper logMapper;
	
	@Override
	public int addLog(Log log) {

		return logMapper.addLog(log);
		
	}
}
```



测试类：

```java
public class UserTest {
	
	public static void main(String[] args) {
		
		//1.加载配置文件
		ApplicationContext context = new ClassPathXmlApplicationContext("spring-context.xml");
		
		//String[] names = context.getBeanDefinitionNames();
		
		UserService userService = context.getBean(UserService.class);
		
		userService.addUser(new User().setAccount("xiong6").setPassword("123"));
		
	}
	
}
```



### 注解配置方式

spring-context-anno

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:context="http://www.springframework.org/schema/context"
	   xmlns:aop="http://www.springframework.org/schema/aop"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans 
       			   http://www.springframework.org/schema/beans/spring-beans.xsd
       			   http://www.springframework.org/schema/context 
       			   http://www.springframework.org/schema/context/spring-context.xsd
	               http://www.springframework.org/schema/aop
       			   http://www.springframework.org/schema/aop/spring-aop.xsd" >
	
	<!-- 扫描注解：主要是加了
		@Repository
		@service
		@controller
		@Autowird
		@Component
	 -->
	<context:component-scan base-package="com.xiongjun"></context:component-scan>
	
	<!-- 扫描通知类 开启 Aop 扫描，自动扫描类中被 @Aspect 修饰的类-->
	<aop:aspectj-autoproxy></aop:aspectj-autoproxy>
</beans>
```



UserService 接口和 UserServiceImpl 实现类：

```java
//接口
public interface UserService {
	
	public void addUser();

	public void deleteUser(int userid);
	
	public void updateUser(String user);
}

//实现类
@Service
public class UserServiceImpl implements UserService{

    @Override
	public void addUser() {
		System.out.println("执行 sql，保存 user");
		//System.out.println(1/0);
	}

	@Override
	public void deleteUser(int userid) {
		System.out.println("删除用户");
		
	}

	@Override
	public void updateUser(String user) {
		System.out.println("更新用户信息");
	}
}
```



AnnoAdvice（通知类）

```java
@Component	//（非 MVC）注入 IOC 容器
@Aspect		//表示单签的类为通知类
public class AnnoAdvice {
	
	//配置切点
	//方法名就是切点的 id --> pc()
	@Pointcut("execution(* com.xiongjun.service.impl.*.*(..))")
	public void pc() {};
	
	//前置通知
	@Before("pc()")
	public void before() {
		System.out.println("前置通知");
	}
	
    //执行后通知
	@AfterReturning("pc()")
	public void afterReturning() {
		System.out.println("后置通知");
	}
}
```



测试类：

```java
public class DtoTest {
	
	public static void main(String[] args) {
		
		ApplicationContext context = new ClassPathXmlApplicationContext("spring-context-anno.xml");
		
		UserService userService = context.getBean(UserService.class);
			
		userService.addUser();
		System.out.println("==================");
		userService.deleteUser(1);
		System.out.println("==================");
		userService.updateUser("user");
	
		System.out.println(userService.getClass());
	}
}
```





## 切入点表达式

```java
//拦截com.woniuxy.service包下所有类的所有方法
execution(* com.woniuxy.service.*.*(..))		

//拦截所有public方法
execution(public * *(..))
		
//save开头的方法
execution(* save*(..))
		
//拦截指定类的指定方法, 拦截时候一定要定位到方法
execution(public com.woniuxy.g_pointcut.OrderDao.save(..))
		
//拦截指定类的所有方法
execution(* com.woniuxy.g_pointcut.UserDao.*(..))
		
//拦截指定包，以及其子包下所有类的所有方法
execution(* com..*.*(..))
		
//多个表达式
// || 和 or 表示两种满足其一即可，取两个表达式的并集
execution(* com.woniuxy.g_pointcut.UserDao.save()) || execution(* com.woniuxy.g_pointcut.OrderDao.save())

execution(* com.woniuxy.g_pointcut.UserDao.save()) or execution(* com.woniuxy.g_pointcut.OrderDao.save())

// &amp;&amp; 和 and 表示两种都同时满足才行，取交集
//下面2个且关系的，没有意义
execution(* com.woniuxy.g_pointcut.UserDao.save()) &amp;&amp; execution(* com.woniuxy.g_pointcut.OrderDao.save())

execution(* com.woniuxy.g_pointcut.UserDao.save()) and execution(* com.woniuxy.g_pointcut.OrderDao.save())
		
//取非值   ! 和 not 表示不在该范围内的作为切点
!execution(* com.woniuxy.g_pointcut.OrderDao.save())
not execution(* com.woniuxy.g_pointcut.OrderDao.save())
```





