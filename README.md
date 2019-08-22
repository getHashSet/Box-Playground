# Box-Playground
*Using Java Script to display Parent/Child properties using CSS*

*by Matthew Carpenter*

Check out the deployed project [here]( https://gethashset.github.io/Box-Playground/) on GitHub.

## How it works
* **First**: enter a number and click the `px` `em` `%` button to the right.
    * This will display an orange box of the selected size.
    * This also displays the relationship of the size vs the view window.
* **Second**: go through the options below and see how the different CSS affects the box.

## Current Features
**Size**: Select a size from `px` pixels `em` 16-pixel `%` vs parent box.

**Grow**: Input a size and then use the `blue buttons` to add to the x or y values of the child box. *(parent box will not be edited)*

**Color**: Select color based on default options of the OS being used. Then press the `blue "color" button` to apply the coloring.

**Fade**: Select fade button to add or remove opacity settings in the `CSS`.
  * With Slider
  
**Border**: Creates a frame for the child box.
  * Border Bottom: Border Bottom will adjust seperatly.
  
**Shape**: Border Radius is used in the `CSS` to round the corners. *(try rounding the corners 50%!)*

**Position**: *advanced* Play with the `static`, `absolute`, `relative` positoining vs the parent object. *parent object uses relative positioning.*

`CSS` order Top - Right - Bottom - Left


**Margin**: Adds margin using the `px`, `em`, `%` values. You can mix and match the values on each side of the Margin. *(margin: all; not supported.)*

**Get CSS*
`disabled`

## Project 
This project was to demonstrate how parent and child properties interact with one another.

## Stack
* HTML
* CSS
* Javascript
* Google Fonts
* Git

## BUG report
**Spin** function will have issues when updating multiple other CSS properties at the same time. It will display a high speed spin at unpredictable times.

**CSS** output does not respond to all properties. Disabled for tuning.

## version 1.2.1

Removed support for Margin all from the first margin box. Tool tip did not display that would happen.

When position is returned to default. The `transform: translate (-50%, -50%);` returns to the `CSS` Code line.

** Added sticky header.

**Bonus** added `w`, `a`, `s`, `d` support for `onkeyup events`.

## coming soon...

Returning `CSS` values at the end.
Update to a button creater using standard <div> elements.
  
  
