# CSS

## Basics CSS
Not a programming language, styling language, used for presentation

- CSS Selector
element selector:
h1 {
    color: blue
}
class selector:
.class-name {
    property:value;
}
id selector: unique
#id-name {

}
- Selector Combinations
.selector-1.selector-2{
    no spacing
}

.ancestor .child{
    need spacing
}

- Box model
content
padding
border
margin

unit: 
pixels (px) fixed size to every screen font-size:16px;
% relative to the parent, adjusts based on the parent element's size. width:50%
em relative to the current element's font size; font-size: 1.5em 1.5x the parent element's font-size
rem(root em) relative to the root <html> element's font size, root font-size commonly 16px by default
 



## CSS crash course 
color property:
1. hex value:     #123456
2. rgba : rgba(0,0,0)

font property:
font-family: sans-serif;
font-style:italic;
font-weight:bold;
font-decoration:none;
font-size:50px;

text layout property:
text-align: left,right,center; 
line-height:2;
letter-spacing:4px;
word-spacing:20px;

style lists property:
ul {
    list-style-type: circle, square, none;
    margin:0;
    padding:0;
}

cascade:
when two rules apply that have equal specificity, the one that comes last in CSS is the one that will be used
specificity:
how the browser decides which rule applies if multiple rules have different selectors but apply to the same element
inheritance:
some CSS property values set on parent elements are inherited by their child elements, and some aren't

display: block, inline, none;

position: 
1. static (default)
Behavior: The default position — the element follows normal document flow.
Offset properties (top, left, etc.) are ignored.

2. relative
Behavior: Positioned relative to its normal position.
Offset properties (top, left, right, bottom) move it from where it would naturally be.
Still occupies space in the document.

3. absolute
Behavior: Positioned relative to the nearest positioned ancestor (relative, absolute, or fixed).
If none exists, it's relative to the <html> element.
Removed from document flow — doesn’t affect sibling layout.

4. fixed
Behavior: Positioned relative to the viewport.
Stays in place even during scroll.
Removed from document flow.

5. sticky
Hybrid of relative and fixed.
Acts like relative until a threshold is reached (e.g., scroll position), then it "sticks" like fixed.



## Layout
flex & grid


## Responsive Design
media query in 7 min (the 1st 3-4 minutes)
Responsive design web dev simplified (optional)

## BEM (just know what it is)

