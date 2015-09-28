---
layout: post
title: "Create Custom Service in Ubuntu"
modified:
categories: blog
excerpt:
tags : [linux, tips]
image:
  feature:
date: 2013-06-17T15:39:55-04:00
---

When developing software application on linux, instead of creating custom scripts it could be easier to invoke them as a service.

Creating a custom service is very easy (for Debian based distro's).

Create a file in the following folder: /etc/init.d/myService
Make it executable:

{% highlight bash %}
chmod u+x /etc/init.d/myService*
{% endhighlight %}

Edit it:
{% highlight bash %}
start() {
        echo "Starting myService"
}

stop() {
        echo "Stopping myService"
}

restart() {
        stop
        start
}

case "$1" in 
start)
        start
;;
stop)
        stop
;;
restart)
        restart
;;

*)

echo $"Usage: $0 {start|stop|restart}"
{% endhighlight %}

Now just run the following in your bash:

{% highlight bash %}
$ service myService start
{% endhighlight %}