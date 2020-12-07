---
layout: post
title:  "Content Security Policy for Jekyll blog hosted on Github"
date:   2020-06-21 7:00:00 +0200
---
As of writing this post it was not possible to add a CSP in the http header for github.io pages. As an alternativ you can add a CSP in the HTML meta tag. The only limitation is that you can't use frame-ancestors, report-uri, or sandbox features of CSP.

Add an folder _includes to your jekyll blog. Then add a head.html file in that folder. Get the original head.html of the jekyll theme you are using with the gem path. You can find the name of your theme in your _config.yml file.

{% highlight bash %}
gem install gem-path
gem path minima
{% endhighlight %}

Once you you got the path navigate into the _include folder and copy the contents of the head.html into the head.html file your created earlier. Then just add you CSP in as a meta tag.

{% highlight bash %}
<head>
  <meta charset="utf-8">
  <meta http-equiv="Content-Security-Policy" content="default-src https://diedrich.me; child-src 'none'; object-src 'none'">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  ...
{% endhighlight %}