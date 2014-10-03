FontMake
========

Pulls fonts from here to there and makes a wonderful little css file for y'all!


##Usage

```
node maker.js [src] [destination] [remote font path]
```

For instance
```
Parent
|
|- Fonts
|   ∟ Somefont.ttf
|
∟ Maker.js
```
and your server serves your font from /assets/fonts/

from parent run:
```
node maker.js ./Fonts . ./assets/fonts
```

BOOSH
```
Parent
|
|- Fonts
|   ∟ Somefont.ttf
|
∟ Maker.js
∟ font-file.css

```
@font-face {
    font-family: "Somefont";
    src: url("./assets/fonts/Somefont.eot");
    src: url("./assets/fonts/Somefont.eot?#iefix") format("embedded-opentype"),
    url("./assets/fonts/Somefont.svg#Somefont") format("svg"),
    url("./assets/fonts/Somefont.woff") format("woff"),
    url("./assets/fonts/Somefont.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
}
```
