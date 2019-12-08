// Edit existing image
var image = new SimpleImage("hilton.jpg");
for (var p of image.values()) {
    var w = image.getWidth();
    var h = image.getHeight();
    var midW = w/2;
    var midH = h/2;
    if (p.getX() < 10 || p.getY() < 10 || p.getX() >= image.getWidth()-10 || p.getY() >= image.getHeight()-10) {
            p.setRed(155);
            p.setBlue(200);
            p.setGreen(80);
        }
    if ( (p.getX() > (midW-5)) && (p.getX() < (midW + 5))){ 
        p.setRed(155);
        p.setBlue(200);
        p.setGreen(80);
    }
    if ( (p.getY() > (midH -5)) && (p.getY() < (midH + 5))){
        p.setRed(155);
        p.setBlue(200);
        p.setGreen(80);   
    }
}
print(image);
