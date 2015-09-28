---
layout: post
title: "Unit testing aspects with spring"
modified:
categories: blog
excerpt:
tags : [test, spring, java]
comments: true
image:
  feature:
date: 2013-02-22T15:39:55-04:00
---


I was working recently on a annotation based retry mechanism. The idea is simple: when a method invocation fails, it should retry the call based on some retry policy. Sample code:

{% highlight java %}
public class ServiceBroker {
    private RemoteService remoteService;
    @Retryable(retryIdentifierBean = "retry.default")
    public void destroySession(final String token) throws BusinessException {
        //invoke a service or do other business logic stuff here
        remoteService.destroySession(token); 
    }

    public void setRemoteService(RemoteService remoteService) {
        this.remoteService = remoteService;
    }
}
{% endhighlight %}

I won't dive into details about the aspect handling the retry mechanism. Notice that the destroySession method is annotated with @Retryable annotation which is provided with the spring bean id retry.default representing the retry policy.

The interesting question is how could I unit test this? How to prove that the implementation of my code indeed works as intended?

At the first glance, the only approach seems to be an integration tests. But suppose that ServiceBroker has many heavy dependencies which might be hard to configure. In the same time, all you want is to test the retry mechanism only, without worrying about anything else.

The solution is a combination of integration & unit test. Instead of loading a spring application context with all beans configured, the following trick can be applied:

{% highlight java %}
public class ServiceBrokerTest {    
    @InjectMocks
    private ServiceBroker victim;
    @Mock
    private RemoteService remoteService;
    private GenericXmlApplicationContext context;

    @Before
    public void setUp() {
        // Configure the bean to be added to application context and set mock dependencies, to avoid bean initialization exception.
        final ServiceBroker broker = new ServiceBroker();
        initMocks(this);
        //set here other dependencies on victim if required
        context = new GenericXmlApplicationContext();
        final AutowireCapableBeanFactory autowireFactory = context.getAutowireCapableBeanFactory();
        victim = (ServiceBroker) autowireFactory.initializeBean(broker, "serviceBrokerBeanName");
    }

    @After
    public void tearDown() {
        context.close();
    }
}
{% endhighlight %}

The above code shows how the unit test is set up. Instead of using the manually instantiated ServiceBroker, we use the one initialized by spring using AutowireCapableBeanFactory. This trick, allows to unit test the proxy of the ServiceBroker, instead the ServiceBroker itself. Thus we can test the retry mechanism itself (continuation of ServiceBrokerTest):

{% highlight java %}
private static final int NUMBER_OF_RETRIES = 5;
@Test
public void shouldRetryExpectedNumberOfTimes() throws Exception {
    Mockito.doThrow(new TimeoutException()).when(remoteService).destroySession(Mockito.anyString());
    victim.destroySession("");
    verify(remoteService, times(NUMBER_OF_RETRIES)).destroySession( Mockito.anyString());
}
{% endhighlight %}

The above unit test, asserts that the remoteService was invoked expected number of times when it fails.

# Conclusion 
The above example shows an approach of easily unit testing aspects in a spring based application.

