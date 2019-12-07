//steganography
function pixeladapt(pixval) {
    var x = Math.floor(pixval/64)*64;
    return x;
}

function prepare(image) {
    for (var px of image.values()){
        px.setRed(pixeladapt(px.getRed()));
        px.setGreen(pixeladapt(px.getGreen()));
        px.setBlue(pixeladapt(px.getBlue()));
    }
    return image;
}

function shiftright(im){
    var nim = new SimpleImage (im.getWidth(), im.getHeight());
    for (var px of im.values()){
        var x = px.getX();
        var y = px.getY();
        var npx = nim.getPixel(x,y);
        npx.setRed(Math.floor(px.getRed()/64));
        npx.setGreen(Math.floor(px.getGreen()/64));
        npx.setBlue(Math.floor(px.getBlue()/64));
    }
    return nim;
}

function test_extract(fromImage){
    // I wrote this to test that the image
    // was successfully encoded, because I can't see it with my eyes!
    var extracted = new SimpleImage(fromImage.getWidth(), fromImage.getHeight());
    for(var px of fromImage.values()){
        var x = px.getX();
        var y = px.getY();
        var newPixel = extracted.getPixel(x,y);
        var oldPixel = fromImage.getPixel(x,y);
        newPixel.setRed(16*(oldPixel.getRed()&3));
        newPixel.setBlue(16*(oldPixel.getBlue()&3));
        newPixel.setGreen(16*(oldPixel.getGreen()&3));
    }
    return extracted;
}

var start = new SimpleImage("duke_blue_devil.png")
var hide = new SimpleImage("pixabayhands.jpg")



start = prepare(start);
hide = shiftright(hide);



for(var spx of start.values()){
    var x = spx.getX();
    var y = spx.getY();
    var hpx = hide.getPixel(x,y);
    // Do the adding here
    spx.setRed( spx.getRed() + hpx.getRed() );
    spx.setGreen(spx.getGreen() + hpx.getGreen());
    spx.setBlue (spx.getBlue() + hpx.getBlue());
    
}

print(start);
var testImage = test_extract(start);
print(testImage);
