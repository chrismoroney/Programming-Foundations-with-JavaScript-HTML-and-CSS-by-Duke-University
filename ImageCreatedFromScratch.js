// creating my own image
var image = new SimpleImage (200,200);
for (var p of image.values()) {
    var x = image.getWidth();
    var y = image.getHeight();
    if (p.getX() > 10 && p.getX() < 190 && p.getY() > 10 && p.getY() < 190) {
        p.setRed(255);
}
    if (p.getX() > 20 && p.getX() < 180 && p.getY() > 20 && p.getY() < 180){
        p.setRed(255);
        p.setGreen(255);
    }
    if (p.getX() > 30 && p.getX() < 170 && p.getY() > 30 && p.getY() < 170){
        p.setRed(255);
        p.setGreen(135);
    }
    if (p.getX() > 40 && p.getX() < 160 && p.getY() > 40 && p.getY() < 160){
        p.setRed(0);
        p.setGreen(255);
    }
    if (p.getX() > 50 && p.getX() < 150 && p.getY() > 50 && p.getY() < 150){
        p.setGreen(0);
        p.setBlue(255);
    }
    if (p.getX() > 60 && p.getX() < 140 && p.getY() > 60 && p.getY() < 140) {
        p.setRed(135);
        p.setBlue(255);
    }
    if (p.getX() > 70 && p.getX() < 130 && p.getY() > 70 && p.getY() < 130) {
        p.setRed(235);
        p.setGreen(90);
    }
}
print(image);
