---
layout: post
title: "JAX London 2015 - Day1"
modified:
categories: blog
excerpt:
tags : [jax, conference]
comments: true
image:
  feature:
date: 2013-10-13T00:00:00-00:00
---

# From Design Thinking to DevOps and Back Again: Unifying Design and Operations
First keynote.
There is no definition of done. The software is continuously being changed and improved.

# The Performance Model of Streams in Java 8
Is using parallel stream faster? It depends!

# Java Generics: Past, Present and Future
How all started. Why generics were introduced.
How are they used in present.



# From 1 RPM to 1,000 RPM – Succeeding in a Software-Defined Economy

why do we do software?
IT is for business (supporting IT or making it more competitive). Ex: for the business to make more money or spend less money.

IT is not only for business, IT is business.

Software is what truly differentiate a product.

Example: VW vs Tesla - updating software (years vs seconds)

Traditional Development vs Continuous Delivery.
Reduce risk & cost by releasing often. Push your changes to production in an easy fashion.

Automation is key to fast iteration.

Steps:
* Embrace CI
* Embrace Devops and CD
* Educate the business. Start with MVP and iterate.
* Start small. Pick a POC.
* Advertise your win. Make it a business case - not a technical one.
* Iterate. Big bang solutions never work.

Software is what will make or kill companies.
Developers have a huge opportunity ahead ... but also a great responsibility.

Recommended book:
[The Phoenix Project](http://www.amazon.co.uk/Phoenix-Project-DevOps-Helping-Business/dp/0988262509/ref=sr_1_1/280-8710239-5266607?ie=UTF8&qid=1444742624&sr=8-1&keywords=the+pheonix+project).

# [Love your architecture](http://blog.hello2morrow.com/2015/06/love-your-architecture/)
Managing dependencies is very important.
Software architects rarely do architecture.
It is hard to check conformity of code to architectural rules.
Often nobody is responsible for technical quality (architecture and structure)

Everytime you write a code which is not quite write, you are taking a debt.

Categories of technical debt:
* programming
* Testing
* Local/global metrics
* architecture (Repair Cost - very high/ visible impact - low/ maintanability impact - very high)

Agile development and architecture
* agile does not create maintainable and well architectured systems.
* architectural debt is a very toxic form of technical debt


Architectural debt - Symptoms
* rigidity
* fragility
* immobility
* viscosity

How to give love to your architecture
* define architecture in formal way
* use tools to check for violations of architecture rules (ideally with every commit)
* avoid cyclic dependencies
* invest 20% of dev and maintainance effort into code hygiene and architecture

Using DSL to describe architecture
- written in text
- can be versioned, diffed
- easy to read and understand

[Blog](blog.hello2morrow.com)



# Distributed Lesson in one lesson

What it is?
- a collection of independent computers which appear to users as one computer

Characteristics
- operate concurrently
- fail independently
- do not share global clock

## Storage
Uses Cassandra as an example:
Read replication.
Sharding.
consistent hashing.
Replication.
Consistency. R + W > N
CAP Theorem: uses coffee shop analogy to describe partitioning (writing notes over phone for replication)

## Distributed Transactions
responses to failure:
- write-off
- retry
- compensating action

## Computation
MapReduce
Spark:
  - scatter/gather paradigm
  - more general data Model (RDDs)
  - storage agnostic
Storm - Distributed event processing framework
Lambda Architecture:
  - uses long-term storage and batch processing -> correct but slow
  - uses streaming which guarantees fast answer no matter what (possibly wrong)

## Synchronization
Vector clocks: a mechanism used to identify there is a write conflict (ordering of events)

## Messaging
Kafka

# Use Your Type System; Write Less Code
[Blog](http://talks.samirtalwar.com/use-your-type-system.html)


# Pragmatic Functional Refactoring with Java 8
Example of how code is reused using predicate.
Passing method as arguments is recommended for increased readability and reusability when lambda are complex.

First class functions.
Currying
Mutable Objects
