---
title: Categorías
permalink: /categories/
---
{% for tag in site.categories %} 
  <h2 id="{{ tag[0] }}">{{ tag[0] | capitalize }}</h2>
  <ul class="post-list">
  	{% assign pages_list = tag[1] %}  
    {% for post in pages_list %}
		* [{{post.title}}]({{ site.url }}{{ post.url }})
    {% endfor %}
    {% assign pages_list = nil %}
    {% assign group = nil %}
  </ul>
{% endfor %}
