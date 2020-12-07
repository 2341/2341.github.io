---
layout: post
title:  "Force https in Firefox without add-ons"
date:   2020-06-15 17:36:45 +0200
---
Type about:config in the URL bar and accept the risk. Search for dom.security.https_only_mode and set it to true. If you now visit a site which does not support https a warning page will be shown where you can accept the risk and continue to the http site. This feature is available starting Firefox version 76.

<img src="/assets/img/firefox-https-only-mode.jpg" alt="">
