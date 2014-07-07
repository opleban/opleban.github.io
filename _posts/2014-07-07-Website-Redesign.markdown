---
layout: post
title:  "Website Redesign"
date:   2014-07-07 14:57:00
categories: html/css
---

This week I spent a considerable amount of time redesigning and retooling my website and blog to take advantage of [Jekyll](http://jekyllrb.com/). Jekyll is a static site generator ideal for producing content-aware websites such as blogs. Before using Jekyll, the directory for my website was a veritable mess and a huge pain in the backsdie to update. Everytime I'd add post, I'd also have to update links to that post in several different locations on my website. Jekyll takes away much of the frustration of having to update and maintain my blog, through its use of the markdown to format my posts (as opposed to HTML) and the liquid templating system to quickly generate and update page content.

I also took the opportunity to make my layout a lot cleaner and less distracting while still incorporating what I find to be interesting design elements. For example my blog directory used to look like this:

![Blog directory before]({{ site.url }}/assets/blog-directory-snapshot-before.png)

Now it looks like this:

![Blog directory after]({{ site.url }}/assets/blog-directory-snapshot-after.png)

The most noticeable difference is the blank background in my new blog directory. While I definitely did like the Moroccan tile photo, in my previous blog directory page, others found it to be too distracting and busy. I agreed with their criticism and removed it.

I also took the opportunity to create a gallery page to showcase some of my photos from the Morocco and to start experimenting in earnest with HTML/CSS and JavaScript. I wrote a couple simple lines of code in JavaScript that animate the pictures of the carpets so that they enlarge or shrink when you click on them. This was my first real effort at utilizing JavaScript to create dynamic HTML/CSS content. Although the effort took quite a bit of time, it felt extremely satisfying when I finally had it working they way I had intended.

![Gallery Page]({{ site.url }}/assets/gallery-snapshot.png)

My website is still very much a work in progress. I'm still figuring out the ins and outs of using Jekyll, but I am starting to very much appreciate its modularity and see my experience using the liquid templating system as a great primer for delving into Ruby on Rails. 