---
layout: post
title: "Testing concurrent code execution"
modified:
categories: blog
excerpt: "How to easily test concurrent code execution with java 8"
tags : [test, java]
comments: true
image:
  feature:
date: 2016-09-21T17:00:00-04:00
---

Running good tests is hard. Running tests which test various scenarios in concurrent environment is even harder. 

One of my most recent use-cases was to write an integration test which proves that concurrent update of the same entity in a persistent storage throws an exception. There are dozens of other use-cases which require similar test to be written. 

The first attempt to write this kind of code is to explicitly create an ExecutorService and submit threads which execute the method being tested. But there was a lot of boilerplate code which pollutes the test. Isn't there a more elegant solution?

After few attempts to improve this, I came up with the following utility method:

{% highlight java %}
public class TestUtils {
    /**
     * Execute in parallel the provided runnable for a limited number of times.
     *
     * @param execution the {@link Runnable} to execute in parallel.
     * @param limit number of times the runnable should be executed.
     */
    public static void awaitParallelExecution(final Runnable execution, final int limit) throws Throwable {
        try {
            CompletableFuture.allOf(Stream.generate(() -> execution)
                    .limit(limit)
                    .map(CompletableFuture::runAsync)
                    .toArray(CompletableFuture[]::new)).join();
        } catch (final CompletionException e) {
            throw e.getCause();
        }
    }
}
{% endhighlight %}

The above code allows to easily test any kind of logic in parallel using CompletableFuture & Stream utilities. Using the above utility looks pretty concise and clear:

{% highlight java %}
public class MyTest {
    @Test(expectedExceptions = CASMismatchException.class)
    public void shouldFailOnConcurrentModification() throws Throwable {
        final Runnable execution = () -> userService.createOrUpdate(accountId, "John");

        //ensure document created
        execution.run();

        //perform update in parallel
        awaitParallelExecution(execution);
    }
}
{% endhighlight %}

This test assert that a hypothetical userService throws the CASMismatchException when the update operation is performed concurrently. 



# Conclusion 
The above example shows an approach of easily test how a code behave in concurrent environment.

