- h1-h6

- ul>li/ol>li/dl>dt>dd

- table>tr>td
    - caption
    - th
    - thead
    - tbody
    - tfoot

- background:
    - background-color
    - background-image:url()
    - background-origin
    - background-clip
    - background-position
    - background-size
    - background-attachment
    - background-repeat

- outline
    - outline-width
    - outline-color
    - outline-style
    - outline-offset

- text-align
- text-decoration
- text-indent
- line-height
- letter-spacing
- word-spacing

- font
    - font-color
    - font-size
    - font-family
    - font-weight
    - font-style

# 过渡

- transition
- transition-property
- transition-duration
- transition-delay
- transition-timing-function

# 2D变换

- transform
- transform:
    - translatex();
    - translatey();
    - translate(x, y);
    - rotate(xxdeg);
    - scalex();
    - scaley();
    - scale(x, y);
    - skewx();
    - skewy();
    - skew(x, y);
- transform-origin
- perspective

# 3D

- transform
- transform-style: flat | preserve-3d;
- transform-origin
- perspective
- perspective-origin
- transform:
    - translateX();
    - translateY();
    - translateZ();
    - translate3d(x, y, z);
    - rotateX();
    - rotateY();
    - rotateZ();
    - rotate3d(x, y, z);
    - scaleX();
    - scaleY();
    - scaleZ();
    - scale3d(x, y, z);
    
# 动画

- animation
- animation-name
- animation-duration
- animation-delay
- animation-timing-function
- animation-direction  
- animation-iteration-count
- animation-play-state
- animation-fill-mode
- @keyframes
```css
@keyframes animationName {
    from {}
    to {}
}
```
```css
@keyframes animationName {
    10% {}
    20% {}
    30% {}
    /*  ...  */
}
```
      
# 边框

- border-radius: x-offset y-offset blur outset color inset

- text-overflow: clip | ellipsis

- box-sizing: border-box | content-box;

- box-shadow: x-offset y-offset
