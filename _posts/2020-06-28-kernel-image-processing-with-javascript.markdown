---
layout: post
title:  "Kernel (image processing) with JavaScript"
date:   2020-06-28 7:00:00 +0200
---
Load a filter or write your own. More on how it works here [https://en.wikipedia.org/wiki/Kernel_(image_processing)](https://en.wikipedia.org/wiki/Kernel_(image_processing)).

{% raw %}
<button type="button" id="0">Edge detection</button>
<button type="button" id="1">Blur1</button>
<button type="button" id="2">Blur2</button>
<button type="button" id="3">Motion blur</button>
<button type="button" id="4">Sharpen1</button>
<button type="button" id="5">Sharpen2</button>
<button type="button" id="6">Emboss</button>
<button type="button" id="7">Mean</button>
<textarea id="filter" name="filter" rows="9" cols="50"></textarea>
<label for="bias">bias:</label>
<input type="text" id="bias" name="bias">
<label for="factor">factor:</label>
<input type="text" id="factor" name="factor">
<p><button type="button" id="apply">Apply filter</button></p>
<canvas id="canvas"></canvas>
<script src="/assets/js/imagefilter.js"></script> 
{% endraw %}