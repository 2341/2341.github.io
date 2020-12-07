---
layout: post
title:  "Run Shell-Script after closing the shell"
date:   2020-06-20 7:00:45 +0200
---
In the example the output of the minecraft server is send to nohup.out file in the directory the file is being executed by using nohup. The & at the end causes the shell to execute the command in the background subshell. The shell does not wait for the command to finish and the return status is 0.

{% highlight bash %}
nohup java -Xms1024M -Xmx2048M -jar minecraft_server.jar nogui &
{% endhighlight %}