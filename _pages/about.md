---
permalink: /
title: "About Me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
I'm a first year Computer Architecture PhD @ the University of Oxford in the Department of Engineering Science. My current research interests are in next-generation Memory Architectures and Memory Optimizations for better, more efficient AI systems.

Prior to starting my PhD, I completed my MEng in Electrical and Electronic Engineering at the University of Nottingham (First Class) in 2025. During my undergraduate studies, I completed two summer internships at Qualcomm working in the Physical Design team and the R&D Lab team as part of my UKESF scholarship. I also spent a month as a Research Assistant at the University of Oxford researching GPU memory architectures as a prefix to starting my DPhil in Engineering in October 2025.

I am a member of the **[Oxford Secure Computer Architecture Research (OSCAR)](https://www.oscar-ox.com/)** group as well as a contributor to the **[Computing Infrastructure Group](https://eng.ox.ac.uk/computing/)**. My PhD (Oxford calls them DPhils) is fully funded by the Advanced Research and Invention Agency (ARIA) as part of Oxford-based Project GLASS which aims to design the next generation of AI systems from physical layer design to the application layer. (Read here for more: [https://eng.ox.ac.uk/computing/glass](https://eng.ox.ac.uk/computing/glass))





## Research interests

<ul class="wt-tags">
  <li>Memory Architectures</li>
  <li>Memory Optimisation for AI</li>
  <li>GPU &amp; Accelerator Memory</li>
  <li>Hardware Security</li>
  <li>Efficient AI Systems</li>
</ul>

## News

<ul class="wt-news">
  <li><time>2026</time><span><strong>VERVE</strong> accepted at the 44th IEEE International Conference on Computer Design (<strong>ICCD 2026</strong>).</span></li>
  <li><time>Oct 2025</time><span>Started my DPhil in Engineering Science at Oxford, funded by <strong>ARIA</strong> as part of <a href="https://eng.ox.ac.uk/computing/glass">Project GLASS</a>.</span></li>
  <li><time>Summer 2025</time><span>Research Assistant at the University of Oxford, working on GPU memory architectures for AI acceleration.</span></li>
  <li><time>2025</time><span>Graduated with a First Class MEng in Electrical and Electronic Engineering from the University of Nottingham.</span></li>
</ul>

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
