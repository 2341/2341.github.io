---
layout: post
title:  "Pcap to Json with Wireshark"
date:   2020-06-29 7:00:00 +0200
---

Tshark allows you to convert Pcap files to Json with `-T ek`. With `-e` you can decide what information you want to be included in the Json file.

{% highlight bash %}
tshark -T ek -e dns.qry.name -e dns.flags.rcode -x -r > $OUT
{% endhighlight %}

