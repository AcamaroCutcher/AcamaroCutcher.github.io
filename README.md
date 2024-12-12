# Final Assignment Web Development

# Webpage

### Webpage: https://acamarocutcher.github.io/contact.html

### Github: https://github.com/AcamaroCutcher/acamarocutcher.github.io

## Webpage Development Process:

### Navigation Bar Process

First I started with setting up the navigation bar. I have an unordered list of elements and I style them using main.css.

I decided to use a simple design, so I use a black background color for the navigation bar. Now to make it responsive,
I decided to use the pseduo element (hover) to change color of the border to indicate selection of that element. I
initially had some issues getting it to work just right, and I ended up noticing that if I did not want the naviation
bar to resize I had to also include a border (1px solid color black) when the mouse was not hovering over it.

Another issue that I encounter was the position of the navigation bar. My plan was to include some form of logo, or text
to make the webpage more personable. I ended up deciding to use my name as a logo for the webpage. I wanted to logo to be position on the right hand side of the screen. After looking around in the web, I tried without succes to have the "li" element float to the right, has described in this stackoverflow page:
https://stackoverflow.com/questions/27238143/positioning-elements-in-same-navigation-bar-left-center-right
The styling ended up not working, and it just made things out of sync. So I did not figure out a proper way to
style the content using float. So I decided to use left margin spacing to make it work.

I want to add some more style to the name so I search around how to use font styles in CSS or HTML file. I found this
really cool font: https://www.1001fonts.com/scribble-font.html and I learned how to use in the CSS file by looking in to
this wepage: https://www.geeksforgeeks.org/how-to-include-a-font-ttf-using-css/ and https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/src.
