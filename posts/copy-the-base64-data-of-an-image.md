---
title: Copy the base64 data of an image
category: Tip
date: '2021-04-04 13:09:00 +7'
topics: DevTools
---

If you want to copy the base64 data of an image, probably you will right-click on the associate element under the _Elements_ tab. However, there's no menu item there to copy the data URI.

In fact, Chrome DevTools provides the ability of doing that but it's a little bit hidden.

Under the _Sources_ tab, click the _Page_ tab and you will see all the images of the page listed in the `top > WEB-URL > image` branch where `WEB-URL` represents the website's URL.

Clicking an image will show it up on the right side. The _Copy image as data URI_ functionality is available when you right-click the image.

![Copy image URI with DevTools](/img/copy-image-uri.png)
