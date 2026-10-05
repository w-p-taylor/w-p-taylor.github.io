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
        <li>Computer Architecture</li>
        <li>Memory Systems</li>
        <li>Hardware-based Security</li>
        <li>Accelerators</li>
        <li>Parallelism</li>
      </ul>
    </dd>
    <dt>Groups</dt>
    <dd><a href="https://www.oscar-ox.com/">OSCAR</a> &middot; <a href="https://eng.ox.ac.uk/computing/">Computing Infrastructure Group</a></dd>
    <dt>Funding</dt>
    <dd>ARIA, as part of <a href="https://eng.ox.ac.uk/computing/glass">Project GLASS</a></dd>
    <dt>Before</dt>
    <dd>MEng EEE, University of Nottingham (First Class) &middot; 2&times; Qualcomm intern</dd>
  </dl>
  <details class="wt-full">
    <summary>Read the full version</summary>
    <div class="wt-full__body">
      <p>I'm a first year Computer Architecture PhD @ the University of Oxford in the Department of Engineering Science. My current research interests are in next-generation Memory Architectures and Memory Optimizations for better, more efficient AI systems.</p>
      <p>Prior to starting my PhD, I completed my MEng in Electrical and Electronic Engineering at the University of Nottingham (First Class) in 2025. During my undergraduate studies, I completed two summer internships at Qualcomm working in the Physical Design team and the R&amp;D Lab team as part of my UKESF scholarship. I also spent a month as a Research Assistant at the University of Oxford researching GPU memory architectures as a prefix to starting my DPhil in Engineering in October 2025.</p>
      <p>I am a member of the <strong><a href="https://www.oscar-ox.com/">Oxford Secure Computer Architecture Research (OSCAR)</a></strong> group as well as a contributor to the <strong><a href="https://eng.ox.ac.uk/computing/">Computing Infrastructure Group</a></strong>. My PhD (Oxford calls them DPhils) is fully funded by the Advanced Research and Invention Agency (ARIA) as part of Oxford-based Project GLASS which aims to design the next generation of AI systems from physical layer design to the application layer. (Read here for more: <a href="https://eng.ox.ac.uk/computing/glass">https://eng.ox.ac.uk/computing/glass</a>)</p>
    </div>
  </details>
</div>

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
