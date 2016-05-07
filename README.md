
## Website Performance Optimization Project
###Overview
The goal of this project was to optimize [websites](https://github.com/gosukiwi/web-performance-portfolio) given by Udacity with low performace issues and low PageSpeed Insights score ranging from 28 to 88.
The critical rendering path of the pages was optimized using the techniques explained in the [Critical Rendering Path course](https://www.udacity.com/course/ud884) and using the Grunt task runner. All pages were optimized to a PageSpeed Insights score of 95 or above.

###How to use :
Download the directory in this GitHub link: https://github.com/Awnallah/frontend-nanodegree-mobile-portfolio .
To Test/modify the files and run the task runner:
- Install npm, and grunt in order to use the task runner. 
- Install the dependencies in the Gruntfile.js and run grunt.

###Page loading optimization:
All optimizations using grunt can be found in the dev folder
- optimized all images using grunt (imagemin).
- concatenated minified all CSS using cssmin in grunt then inlined the minified css into relevant html files.
- uglified all scripts.
- minified the html of the pizza.html page.

###Frame rate per second optimization (pizza.html):
- Refactored the code for resizing the pizzas. Removed the determineDx function and made necessary changes to changePizzaSizes function in order to prevent forced-reflow.
- Removed any code from for loops in cases where it wasn't needed to be in the loop.
- Refactored the scrolling code and added animation frame when scrolling.
- Applied more efficient CSS/DOM manipulation techniques, including transform: translateX() instead of the left property, getElementsByClassName or Class instead of querySelectorAll.

###Use these links to check the PageSpeed Insights scores:
- https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fawnallah.github.io%2Ffrontend-nanodegree-mobile-portfolio%2F&tab=mobile
- https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fawnallah.github.io%2Ffrontend-nanodegree-mobile-portfolio%2Fdev%2Fviews%2Fpizza.min.html&tab=mobile
- https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fawnallah.github.io%2Ffrontend-nanodegree-mobile-portfolio%2Fproject-webperf.html
- https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fawnallah.github.io%2Ffrontend-nanodegree-mobile-portfolio%2Fproject-2048.html
- https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fawnallah.github.io%2Ffrontend-nanodegree-mobile-portfolio%2Fproject-mobile.html


###MIT License











