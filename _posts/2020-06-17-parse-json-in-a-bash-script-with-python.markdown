---
layout: post
title:  "Using python in a bash script to parse json"
date:   2020-06-17 17:36:45 +0200
---
Very convenient way to get some specific value out of a json file. The example returns the most current minecraft version.

{% highlight bash %}
curl -s https://launchermeta.mojang.com/mc/game/version_manifest.json |
python3 -c "import sys, json; print(json.load(sys.stdin)['latest']['release'])"
{% endhighlight %}
