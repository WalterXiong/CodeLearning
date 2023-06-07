# Spring - IoC 基础



## 1. Spring IoC

### 1.1 谈谈自己对于 Spring IoC 的了解

**IoC（Inversion of Control：控制反转）** 是一种设计思想，而不是一个具体的技术实现。IoC 的思想就是将原本在程序中手动创建对象的控制权，交由 Spring 框架来管理。不过， IoC 并非 Spring 特有，在其他语言中也有应用。

==**为什么叫控制反转？**==

- **控制** ：指的是对象创建（实例化、管理）的权力
- **反转** ：控制权交给外部环境（Spring 框架、IoC 容器）

![](https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/java-guide-blog/frc-365faceb5697f04f31399937c059c162.png)

将对象之间的相互依赖关系交给 IoC 容器来管理，并由 IoC 容器完成对象的注入。这样可以很大程度上简化应用的开发，把应用从复杂的依赖关系中解放出来。 IoC 容器就像是一个工厂一样，当我们需要创建一个对象的时候，只需要配置好配置文件/注解即可，完全不用考虑对象是如何被创建出来的。

在实际项目中一个 Service 类可能依赖了很多其他的类，假如我们需要实例化这个 Service，你可能要每次都要搞清这个 Service 所有底层类的构造函数，这可能会把人逼疯。如果利用 IoC 的话，你只需要配置好，然后在需要的地方引用就行了，这大大增加了项目的可维护性且降低了开发难度。

在 Spring 中， IoC 容器是 Spring 用来实现 IoC 的载体， IoC 容器实际上就是个 Map（key，value），Map 中存放的是各种对象。



### 1.2 什么是 Spring Bean？

简单来说，Bean 代指的就是那些被 IoC 容器所管理的对象。

> `org.springframework.beans` 和 `org.springframework.context` 这两个包是 IoC 实现的基础，如果想要研究 IoC 相关的源码的话，可以去看看



### 1.3 将一个类声明为 Bean 的注解有哪些?

- `@Component` ：通用的注解，可标注任意类为 `Spring` 组件。如果一个 Bean 不知道属于哪个层，可以使用`@Component` 注解标注。
- `@Repository` / `@Mapper` : 对应持久层即 Dao 层，主要用于数据库相关操作。
- `@Service` : 对应服务层，主要涉及一些复杂的逻辑，需要用到 Dao 层。
- `@Controller` : 对应 Spring MVC 控制层，主要用户接受用户请求并调用 Service 层返回数据给前端页面



### 1.4 @Component 和 @Bean 的区别是什么？

`@Component` 注解==**作用于类**==，而 `@Bean` 注解==**作用于方法**==。

- `@Component` 通常是通过类路径扫描来自动侦测以及自动装配到 Spring 容器中（我们可以使用 `@ComponentScan` 注解定义要扫描的路径从中找出标识了需要装配的类自动装配到 Spring 的 bean 容器中）。
- `@Bean` 注解通常是我们在标有该注解的方法中定义产生这个 bean，`@Bean` 告诉了 Spring 这是某个类的实例，当我需要用它的时候还给我。

`@Bean` 注解比 `@Component` 注解的自定义性更强，而且很多地方我们只能通过 `@Bean` 注解来注册 bean。比如当我们引用第三方库中的类需要装配到 `Spring` 容器时，则只能通过 `@Bean` 来实现。

`@Bean`注解使用示例：

```java
@Configuration
public class AppConfig {
    @Bean
    public TransferService transferService() {
        return new TransferServiceImpl();
    }
}
```

下面这个例子是通过 `@Component` 无法实现的。

```java
@Bean
public OneService getService(status) {
    case (status)  {
        when 1:
                return new serviceImpl1();
        when 2:
                return new serviceImpl2();
        when 3:
                return new serviceImpl3();
    }
}
```



### 1.5 注入 Bean 的注解有哪些？

Spring 内置的 `@Autowired` 以及 JDK 内置的 `@Resource` 和 `@Inject` 都可以用于注入 Bean。

| Annotaion    | Package                            | Source       |
| ------------ | ---------------------------------- | ------------ |
| `@Autowired` | `org.springframework.bean.factory` | Spring 2.5+  |
| `@Resource`  | `javax.annotation`                 | Java JSR-250 |
| `@Inject`    | `javax.inject`                     | Java JSR-330 |

`@Autowired` 和 `@Resource` 使用的比较多一些。



### 1.6 @Autowired 和 @Resource 的区别是什么？

#### @Autowired

`Autowired` 属于 Spring 内置的注解，==默认的注入方式为`byType`（根据类型进行匹配）==，也就是说会优先根据接口类型去匹配并注入 Bean （接口的实现类）。

**这会有什么问题呢？** 当一个接口存在多个实现类的话，`byType` 这种方式就无法正确注入对象了，因为这个时候 Spring 会同时找到多个满足条件的选择，默认情况下它自己不知道选择哪一个。

这种情况下，注入方式会变为 `byName`（根据名称进行匹配），这个名称通常就是类名（首字母小写）。就比如说下面代码中的 `smsService` 就是我这里所说的名称，这样应该比较好理解了吧。

```java
// smsService 就是我们上面所说的名称
@Autowired
private SmsService smsService;
```

举个例子，`SmsService` 接口有两个实现类: `SmsServiceImpl1`和 `SmsServiceImpl2`，且它们都已经被 Spring 容器所管理。

```java

@Autowired
private SmsService smsService;		// 报错，byName 和 byType 都无法匹配到 bean


@Autowired
private SmsService smsServiceImpl1;	// 正确注入 SmsServiceImpl1 对象对应的 bean

@Autowired
@Qualifier(value = "smsServiceImpl1")
private SmsService smsService;		// 正确注入  SmsServiceImpl1 对象对应的 bean
									// smsServiceImpl1 就是我们上面所说的名称
```

我们还是建议通过 `@Qualifier` 注解来显式指定名称而不是依赖变量的名称。

#### @Resource

`@Resource`属于 JDK 提供的注解，默认注入方式为 `byName`。如果无法通过名称匹配到对应的 Bean 的话，注入方式会变为`byType`。

`@Resource` 有两个比较重要且日常开发常用的属性：`name`（名称）、`type`（类型）。

```java
public @interface Resource {
    String name() default "";
    Class<?> type() default Object.class;
}
```

如果仅指定 `name` 属性则注入方式为`byName`，如果仅指定`type`属性则注入方式为`byType`，如果同时指定`name` 和`type`属性（不建议这么做）则注入方式为`byType`+`byName`。

```java
@Resource
private SmsService smsService;		// 报错，byName 和 byType 都无法匹配到 bean

@Resource
private SmsService smsServiceImpl1;	// 正确注入 SmsServiceImpl1 对象对应的 bean

@Resource(name = "smsServiceImpl1")
private SmsService smsService;		// 正确注入 SmsServiceImpl1 对象对应的 bean（推荐这种方式）
```

#### 简单总结一下：

- `@Autowired` 是 Spring 提供的注解，`@Resource` 是 JDK 提供的注解。
- `Autowired` 默认的注入方式为`byType`（根据类型进行匹配），`@Resource`默认注入方式为 `byName`（根据名称进行匹配）。
- 当一个接口存在多个实现类的情况下，`@Autowired` 和`@Resource`都需要通过名称才能正确匹配到对应的 Bean。`Autowired` 可以通过 `@Qualifier` 注解来显式指定名称，`@Resource`可以通过 `name` 属性来显式指定名称。



### 1.7 Bean 的作用域有哪些?

- **singleton** : IoC 容器中只有唯一的 bean 实例。Spring 中的 bean 默认都是单例的，是对单例设计模式的应用。

- **prototype** : 每次获取都会创建一个新的 bean 实例。也就是说，连续 `getBean()` 两次，得到的是不同的 Bean 实例。
- **request** （仅 Web 应用可用）: 每一次 HTTP 请求都会产生一个新的 bean（请求 bean），该 bean 仅在当前 HTTP request 内有效。
- **session** （仅 Web 应用可用） : 每一次来自新 session 的 HTTP 请求都会产生一个新的 bean（会话 bean），该 bean 仅在当前 HTTP session 内有效。
- **application/global-session** （仅 Web 应用可用）： 每个 Web 应用在启动时创建一个 Bean（应用 Bean），该 bean 仅在当前应用启动时间内有效。
- **websocket** （仅 Web 应用可用）：每一次 WebSocket 会话产生一个新的 bean。

#### **如何配置 bean 的作用域呢？**

xml 方式：

```xml
<bean id="..." class="..." scope="singleton"></bean>
```

注解方式：

```java
@Bean
@Scope(value = ConfigurableBeanFactory.SCOPE_PROTOTYPE)
public Person personPrototype() {
    return new Person();
}
```



### 1.8 Bean 的生命周期了解么?

![](https://images.xiaozhuanlan.com/photo/2019/b5d264565657a5395c2781081a7483e1.jpg)

1. 实例化
    - 首先是 Bean 容器在配置文件中找到 Spring Bean 的定义。
    - Bean 容器利用反射创建一个 Bean 的实例。
2. 属性填充
    - 如果这个实例涉及到一些属性，那么调用 set()  方法设置这些属性。
    - 如果 Bean 实现了 `BeanNameAware` 接口，调用 `setBeanName()` 方法，传入 Bean 的名字。
    - 如果 Bean 实现了 `BeanClassLoaderAware` 接口，调用 `setBeanClassLoader()` 方法，传入 `ClassLoader` 对象的实例。
    - 如果 Bean 实现了 `BeanFactoryAware` 接口，调用 `setBeanFactory()`方法，传入 `BeanFactory` 对象的实例。
        - 与上面的类似，如果实现了其他 `*.Aware`接口，就调用相应的方法
3. 初始化
    - 进行 Bean 的==前置处理==。（如果定义了和加载这个 Bean 的 Spring 容器相关的 `BeanPostProcessor` 对象，执行`postProcessBeforeInitialization()` 方法）
    - 如果 Bean 实现了 `InitializingBean` 接口，执行 `afterPropertiesSet()` 方法。
    - 如果 Bean 在配置文件中的定义包含 init-method 属性，执行指定的方法。
    - 进行 Bean 的==后置处理==。（如果定义了和加载这个 Bean 的 Spring 容器相关的 `BeanPostProcessor` 对象，执行`postProcessBeforeInitialization()` 方法）
4. 销毁
    - 当要销毁 Bean 的时候，如果 Bean 实现了 `DisposableBean` 接口，执行 `destroy()` 方法。
    - 当要销毁 Bean 的时候，如果 Bean 在配置文件中的定义包含 destroy-method 属性，执行指定的方法。























## 什么是循环依赖？

容器中多个 Bean 之间相互依赖，形成了闭环；例如： A 依赖 B，B 依赖 A

**IoC（Inversion of Control:控制反转）** 是一种设计思想，而不是一个具体的技术实现。IoC 的思想就是将原本在程序中手动创建对象的控制权，交由 Spring 框架来管理。不过， IoC 并非 Spring 特有，在其他语言中也有应用。

循环依赖抛出异常：==BeanCurrentlyInCreationException==

## 3级缓存解决循环依赖（singleton）

**DefualtSingletonBeanRegistry**

1. 一级缓存：singletonObject  			---  ConcurrentHashMap    单例池
2. 二级缓存：earlySingletonObject     ---  HashMap                        beanName，代理对象
3. 三级缓存：SingletonObject              ---  ConcurrentHashMap    beanName，生成代理对象 lambda 表达式



三级缓存的详细流程：









