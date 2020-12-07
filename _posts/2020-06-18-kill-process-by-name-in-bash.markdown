---
layout: post
title:  "Kill process by name in bash"
date:   2020-06-18 17:36:45 +0200
---
Easy way to kill processes by name in bash. Get list of processes with "ps aux". Then filter the lines of the table that contain the searched name. With "awk {'print $2'}" get the PID of the processes that matched the name before. Finally kill the process with "xargs kill -9".

{% highlight bash %}
ps aux | grep -i exampleName | awk {'print $2'} | xargs kill -9
{% endhighlight %}
