---
layout: post
title: "Docker basics"
excerpt: Most useful Docker commands
modified:
categories: blog
tags : [docker]
image:
  feature:
date: 2013-06-17T15:39:55-04:00
---

Docker is an open-source engine which automates the deployment of applications as highly portable, self-sufficient containers which are independent of hardware, language, framework, packaging system and hosting provider.

There is a interesting blog post about how to use Docker to install Drupal. After reading it, gives you an good starting point for trying docker on your local environment. Be aware that docker works only on 64bit processors.

The most common Docker commands are listed below:

* List images
{% highlight bash %}
docker images
{% endhighlight %}

* List running containers
{% highlight bash %}
docker ps
{% endhighlight %}

* List all available containers
{% highlight bash %}
docker ps -a
{% endhighlight %}	

* Pull an image named centos
{% highlight bash %}
docker pull centos
{% endhighlight %}

* Run container named centos
{% highlight bash %}
docker run -i -t centos /bin/bash
{% endhighlight %}

* Run a container and apply port forwarding (port 80)
{% highlight bash %}
docker run -i -t -p :80 LAMP /bin/bash
{% endhighlight %}

* Tag a container state
{% highlight bash %}
docker tag 26d9b3e0438f631b2f030eedffb6b14216261c9e4ecab0 LAMP drupal
{% endhighlight %}