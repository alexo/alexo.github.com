---
layout: post
title: "JAX London 2015 - Day2"
modified:
categories: blog
excerpt:
tags : [jax, conference]
comments: true
image:
  feature:
date: 2013-10-14T00:00:00-00:00
---



# Architecting for a scalable Enterprise

History repeat itself (every 17 years).
Problems don't change, they just get bigger
IT history repeats itself, but we can use old patterns to fix 'new' problems

Hardware to the rescue: networks speeds, screens, memory, CPU.
Raw power: apollo 11 had 2k of memory and 32k read-only storage. And it got to the moon and back.
50 yars and moore's law is still with us.

Software is slowing us down.
Example: grep vs searching a word in a large text (1G) using java. 1s vs 17s.
Java is verbose and slow.
Garbage collection is a massive problem.
Java serialization sucks.


## Analytics & Big Data
Hadoop.
Spark - an alternative to hadoop. More efficient than hadoop.
Both have the same problem - serialization/deserialization overhead

Idea for serialization problem: binary instead of Java objects. Bring back we used 20 years ago in C back into java world.

## In Memory Daga Grid solutions
Performance and memory gain can be very significant.

Binary with spark -> memory is limited, but discs are virtually infinite.

## Spring Boot
Spring-boot becoming the de facto framework for java based apps.

## Resources
[jvm-serializers](https://github.com/eishay/jvm-serializers)


# Innovation Diffusion
Diffusion - innovation communicated over time in a social system

## Success attributes:
- relative advantage
- compatibility
- complexity
- triability

## Organizational structure
Size, complexity, centralization, formalization, interconnectedness - matter when adopting a new technology.

## People
Opinion Leaders - as a change agent

## Category of adopters
Innovators, early adopters, early majority, late majority, laggers.

## Steps for adoption
Back to school
read books and blocks
fork the code
create mind-map - good for visualization of ideas or articles
plant seed - mention it
Reinvention case study - example: kinect being used for machine learning (not just for gaming)
Apply social physics
Institutionalize innovation - trainings, guides, mentoring, watch for misuse
Avoid large projects. Don't spend to much time to solve a problem.
Fail fast: learn fast and react.
Adopt learn principles
build, measure, learn - Constant learning is key to spreading innovation
Continuous improvement
Eliminate waste
Empower people.

## References
Books - Diffusion of innovations
presentation patterns
Fearless change
social physics - Alex Pentland

# Advanced AB Testing

[Slides](http://www.slideshare.net/aviranwix/advanced-ab-testing-jax-london-2015)


# The art of shifting perspective (Keynote)

Explaining can be hard work
Do not force your ideas on people
Don't Invest your time in the arguments which doesn't worth
More info helps to make a decision
Use retrospectives to tell our ideas about how to improve things and to listen to each other
Invest time in learning about something you heard about at JAX. (blog post, local meetup)
Be open to shifting your perspective. Don't be dogmatic

## References
Book - Paradox of choice


# The Unit Test is dead. Long live the Unit Test!

Speaker used to write many unit tests..
Options to test a typical social web app:
- skip unit testing http layer
-
typical way of working:
- unit testing service layer, persistence layer, unit testing transport layer

problem:
- large amount of tests
- bad unit tests are written
- is container config tested?
- is spring or hibernate config is tested?

mocking jdbc is wrong

Test pyramid
- 3 layers (UI, service, unit)
- varying from slow/flaky -> fast/stable

Inverted Test pyramid
- looks like an icecream (with cloud on top)

TDD does not guarantee well designed code
TDD is a workflow - not a design tool.

What to unit test:
- algorithmic design
- exceptional scenarios
- a service is invoked a certain number of times (ex: exactly one)

what not to unit test:
- Unit tests must not duplicate higher level design

## References
- [Blog](http://codurance.com/2015/05/12/does-tdd-lead-to-good-design/
- Bookt - Tests Need Love Too
@tddmonkey



# Java 8 Best Practices

Use latest version of jdk. Earlier versions have bugs.
Lambdas:
- prefer expression over block Lambdas
- use separate method if necessary
- use lambdas for abstractions (to extract code in the middle of a method)

Functional interfaces:
- try reusing existing functional interfaces, write your own if extra semantics are valuable
- Avoid overload method that take functional interfaces - use different name.

Exceptions:
- checked exceptions are not declared by functional interfaces
- convert checked exceptions to unchecked
- checked exceptions are a bad idea

Optional:
- agree with team how to use it
- it is not serializable
- some momory/perf cost to using it
- don't provide optionals as parameters

Streams:
- benchmark use in performance critical sections
- parallel streams must be used with great care
- shared execution pool can be conceiving.
- don't overuse it.
- extract lines if struggling to get to compile.
- learn to love collector interface

Interfaces:
- default methods, static methods
- The changes to interfaces are more important than lambdas themselves.
- prepare for future non public methods in interfaces (use explicitly public modifier in interfaces)

Date and Time:
- avoid java.util.Date/Calendar
- move away from joda-time
- Use threeTen-extra project

Other features:
- base64
- reflection on method parameters
- no PermGen
- Nashorn Javascript
- JavaFX ready to replace Swing

Java 8 Libraries:
- JOOL
- ThrowwingLambdas
- strata-collect - Guavate
- Since java is not really a functional language - take care when using functional libraries.

Summary:
- java 8 is great
- vital to rethink coding style
- beware the functional programming/scala dudes (their advice is not always appropriate)
