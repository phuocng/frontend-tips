---
title: Create shapes with the clip path property
category: Tip
date: 2021-04-08 11:38:00 +7
layout: layouts/post.njk
topics: CSS
---

In the old days, we often used the `:before` and `:after` pseudo elements to create shapes, [triangles](https://csslayout.io/patterns/triangle-buttons), [arrows](https://csslayout.io/patterns/arrow-buttons) for example.

Nowadays, it can be accomplished with a single CSS property named `clip-path`. As the name implies, it creates a clipping region from the original element.

> If you're looking for a complex shape, then check this amazing [CSS clip-path maker](https://bennettfeely.com/clippy)

<style>
.demo__shape {
    background: rgba(0, 0, 0, .3);
    height: 4rem;
    margin-right: 0.5rem;
    width: 4rem;
}
.demo__shape--arrow-left {
    clip-path: polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%);
}
.demo__shape--arrow-right {
    clip-path: polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%);
}
.demo__shape--bubble {
    clip-path: polygon(0% 50%, 15% 60%, 15% 85%, 85% 85%, 85% 15%, 15% 15%, 15% 40%);
}
.demo__shape--circle {
    clip-path: circle(50% at 50% 50%);
}
.demo__shape--decagon {
    clip-path: polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%);
}
.demo__shape--diamond {
    clip-path: polygon(15% 50%, 50% 85%, 85% 50%, 50% 15%);
}
.demo__shape--ellipse {
    clip-path: ellipse(25% 40% at 50% 50%);
}
.demo__shape--heptagon {
    clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);
}
.demo__shape--hexagon {
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}
.demo__shape--nonagon {
    clip-path: polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%);
}
.demo__shape--octagon {
    clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
}
.demo__shape--parallelogram {
    clip-path: polygon(5% 20%, 25% 80%, 95% 80%, 75% 20%);
}
.demo__shape--pentagon {
    clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
}
.demo__shape--rectangle {
    clip-path: polygon(0% 25%, 0% 75%, 100% 75%, 100% 25%);
}
.demo__shape--square {
    clip-path: polygon(15% 15%, 15% 85%, 85% 85%, 85% 15%);
}
.demo__shape--star {
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}
.demo__shape--trapezoid {
    clip-path: polygon(25% 20%, 5% 80%, 95% 80%, 75% 20%);
}
.demo__shape--triangle-up {
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
.demo__shape--triangle-down {
    clip-path: polygon(100% 0%, 0% 0%, 50% 100%);
}
.demo__shape--triangle-left {
    clip-path: polygon(100% 0%, 0% 50%, 100% 100%);
}
.demo__shape--triangle-right {
    clip-path: polygon(100% 50%, 0% 0%, 0% 100%);
}
.demo__shape--triangle-top-left {
    clip-path: polygon(0 0, 0% 100%, 100% 0);
}
.demo__shape--triangle-top-right {
    clip-path: polygon(0 0, 100% 100%, 100% 0);
}
.demo__shape--triangle-bottom-left {
    clip-path: polygon(0 0, 0 100%, 100% 100%);
}
.demo__shape--triangle-bottom-right {
    clip-path: polygon(100% 0, 0 100%, 100% 100%);
}
</style>

### Arrow

```css
.arrow-left {
    clip-path: polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%);
}
.arrow-right {
    clip-path: polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%);
}
```

<div style="display: flex; align-items: center">
    <div class="demo__shape demo__shape--arrow-left"></div>
    <div class="demo__shape demo__shape--arrow-right"></div>
</div>

### Bubble

```css
.bubble {
    clip-path: polygon(0% 50%, 15% 60%, 15% 85%, 85% 85%, 85% 15%, 15% 15%, 15% 40%);
}
```

<div class="demo__shape demo__shape--bubble"></div>

### Circle

```css
.circle {
    clip-path: circle(50% at 50% 50%);
}
```

<div class="demo__shape demo__shape--circle"></div>

### Decagon

```css
.decagon {
    clip-path: polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%);
}
```

<div class="demo__shape demo__shape--decagon"></div>

### Diamond

```css
.diamond {
    clip-path: polygon(15% 50%, 50% 85%, 85% 50%, 50% 15%);
}
```

<div class="demo__shape demo__shape--diamond"></div>

### Heptagon

```css
.heptagon {
    clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);
}
```

<div class="demo__shape demo__shape--heptagon"></div>

### Hexagon

```css
.hexagon {
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}
```

<div class="demo__shape demo__shape--hexagon"></div>

### Ellipse

```css
.ellipse {
    clip-path: ellipse(25% 40% at 50% 50%);
}
```

<div class="demo__shape demo__shape--ellipse"></div>

### Nonagon

```css
.nonagon {
    clip-path: polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%);
}
```

<div class="demo__shape demo__shape--nonagon"></div>

### Octagon

```css
.octagon {
    clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
}
```

<div class="demo__shape demo__shape--octagon"></div>

### Parallelogram

```css
.parallelogram {
    clip-path: polygon(5% 20%, 25% 80%, 95% 80%, 75% 20%);
}
```

<div class="demo__shape demo__shape--parallelogram"></div>

### Pentagon

```css
.pentagon {
    clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
}
```

<div class="demo__shape demo__shape--pentagon"></div>

### Rectangle

```css
.rectangle {
    clip-path: polygon(0% 25%, 0% 75%, 100% 75%, 100% 25%);
}
```

<div class="demo__shape demo__shape--rectangle"></div>

### Square

```css
.square {
    clip-path: polygon(15% 15%, 15% 85%, 85% 85%, 85% 15%);
}
```

<div class="demo__shape demo__shape--square"></div>

### Star

```css
.star {
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}
```

<div class="demo__shape demo__shape--star"></div>

### Trapezoid

```css
.trapezoid {
    clip-path: polygon(25% 20%, 5% 80%, 95% 80%, 75% 20%);
}
```

<div class="demo__shape demo__shape--trapezoid"></div>

### Triangle

```css
.triangle-up {
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
.triangle-down {
    clip-path: polygon(100% 0%, 0% 0%, 50% 100%);
}
.triangle-left {
    clip-path: polygon(100% 0%, 0% 50%, 100% 100%);
}
.triangle-right {
    clip-path: polygon(100% 50%, 0% 0%, 0% 100%);
}
.triangle-top-left {
    clip-path: polygon(0 0, 0% 100%, 100% 0);
}
.triangle-top-right {
    clip-path: polygon(0 0, 100% 100%, 100% 0);
}
.triangle-bottom-left {
    clip-path: polygon(0 0, 0 100%, 100% 100%);
}
.triangle-bottom-right {
    clip-path: polygon(100% 0, 0 100%, 100% 100%);
}
```

<div style="display: flex; align-items: center">
    <div class="demo__shape demo__shape--triangle-up"></div>
    <div class="demo__shape demo__shape--triangle-down"></div>
    <div class="demo__shape demo__shape--triangle-left"></div>
    <div class="demo__shape demo__shape--triangle-right"></div>
    <div class="demo__shape demo__shape--triangle-top-left"></div>
    <div class="demo__shape demo__shape--triangle-top-right"></div>
    <div class="demo__shape demo__shape--triangle-bottom-left"></div>
    <div class="demo__shape demo__shape--triangle-bottom-right"></div>
</div>
