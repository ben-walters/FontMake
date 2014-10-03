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
