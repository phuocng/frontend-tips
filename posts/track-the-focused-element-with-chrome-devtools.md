---
title: Track the focused element with Chrome DevTools
category: trick
tags:
  - posts
layout: layouts/post.njk
---

Assume that you want to test the keyboard accessibility in your website. 
    
There's a case that the pressing the _Tab_ key jumps to a particular element which is invisible in the viewport.

Chrome DevTools provides the ability of tracking the focused element.

* Open the _Console_
* Click the eye icon which is located at the right of the Filter box to create a live expression
* Type `document.activeElement`

This live expression will represent the active element which has the focus currently. You can right click on the expression's result and then choose _Reveal in Elements panel_ to inspect the focused element.

![Track the focused element](/img/track-focused-element.png)