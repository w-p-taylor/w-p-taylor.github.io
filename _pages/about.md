---
permalink: /
title: "About Me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
<div class="wt-tldr">
  <span class="wt-tldr__label">TL;DR</span>
  <dl>
    <dt>Now</dt>
    <dd>Computer Architecture PhD, University of Oxford (Engineering Science)</dd>
    <dt>Research</dt>
    <dd>
      <ul class="wt-tags">
        <li>Memory Architectures</li>
        <li>Memory Optimisation for AI</li>
        <li>GPU &amp; Accelerator Memory</li>
        <li>Hardware Security</li>
        <li>Efficient AI Systems</li>
      </ul>
    </dd>
    <dt>Groups</dt>
    <dd><a href="https://www.oscar-ox.com/">OSCAR</a> &middot; <a href="https://eng.ox.ac.uk/computing/">Computing Infrastructure Group</a></dd>
    <dt>Funding</dt>
    <dd>ARIA, as part of <a href="https://eng.ox.ac.uk/computing/glass">Project GLASS</a></dd>
    <dt>Before</dt>
    <dd>MEng EEE, University of Nottingham (First Class) &middot; 2&times; Qualcomm intern</dd>
  </dl>
</div>

I'm a first year Computer Architecture PhD @ the University of Oxford in the Department of Engineering Science. My current research interests are in next-generation Memory Architectures and Memory Optimizations for better, more efficient AI systems.

I am a member of the **[Oxford Secure Computer Architecture Research (OSCAR)](https://www.oscar-ox.com/)** group as well as a contributor to the **[Computing Infrastructure Group](https://eng.ox.ac.uk/computing/)**. My PhD (Oxford calls them DPhils) is fully funded by the Advanced Research and Invention Agency (ARIA) as part of Oxford-based Project GLASS which aims to design the next generation of AI systems from physical layer design to the application layer. (Read here for more: [https://eng.ox.ac.uk/computing/glass](https://eng.ox.ac.uk/computing/glass))

## Selected publications

<ul class="wt-pubs">
{% for post in site.publications reversed limit: 3 %}
  <li>
    <span class="wt-pubs__venue">{{ post.excerpt | strip_html | strip }}</span>
    <span class="wt-pubs__title">{{ post.title }}</span>
  </li>
{% endfor %}
</ul>

<p class="wt-more"><a href="{{ site.baseurl }}/publications/">All publications &rarr;</a></p>
