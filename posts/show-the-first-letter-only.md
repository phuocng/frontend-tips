---
title: Show the first letter only
category: trick
date: 2021-03-04 09:00:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: CSS
---

There are cases that we would like to populate the full text in generated HTML, but only the first letter is displayed.
The remaining characters are hidden visually. It's usesful when we have to support a smaller screen, for example. 

The trick here is to set zero font size for the element, whereas the first letter has a normal font size.

```css
.element {
    font-size: 0;
}
.element::first-letter {
    font-size: 1.5rem;
}
```

_Demo_

<style>
.demo__calendar th {
    font-size: 0;
    text-align: center;
}
.demo__calendar td {
    text-align: center;
}
.demo__calendar th::first-letter {
    font-size: 1.5rem;
}
</style>

<table class="demo__calendar" style="width: 18rem">
    <thead>
        <tr>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
        </tr>
        <tr>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
        </tr>
        <tr>
            <td>15</td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td>19</td>
            <td>20</td>
            <td>21</td>
        </tr>
        <tr>
            <td>22</td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
        </tr>
        <tr>
            <td>29</td>
            <td>30</td>
            <td colspan="5"></td>
        </tr>
    </tbody>
</table>