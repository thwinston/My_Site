function calculate() {
    
var height = 0;
var b1 = 0;
var b2 = 0;
var s1 = 0;
var s2 = 0;
var s3 = 0;
var perimeter = 0;
var area = 0;
var volume = 0;
    
var firstInput = prompt("What shape do you want to calculate?");
var shape = firstInput.toLowerCase();
console.log(shape);
  
if (shape==="square"){
    b1 = prompt("What is the length or height?");
    perimeter = b1 * 4;
    area = b1 * b1;
    volume = "N/A";
}

else if (shape==="rectangle"){
    b1 = prompt("What is the length of the base?");
    height = prompt("What is the height?");
    perimeter = b1 * 2 + height * 2;
    area = b1 * height;
    volume = "N/A";
}

else if (shape==="rhombus"){
    s2 = prompt("What is the length of side 1?");
    s1 = prompt("What is length of side 2?");
    perimeter = s2 * 2 + s1 * 2;
    area = s2 * s1;
    volume = "N/A";
}

else if (shape==="triangle"){
    b1 = prompt("What is the length of the base?");
    s1 = prompt("What is the length of one side?");
    s2 = prompt("What is the length of the final side?");
    height = prompt("what is the height?","From the base to the point opposite the base");
    perimeter = b1 + s1 + s2;
    area = (b1*height)/2;
    volume = "N/A";
}

else if (shape==="circle"){
    s1 = prompt("What is the diameter?");
    perimeter = s1 * Math.PI;
    area = Math.PI * (s1 * s1);
    volume = "N/A";
}

else if (shape==="trapezoid"){
    b1 = prompt("What is the length of base #1?");
    b2 = prompt("What is the length of base #2?");
    s1 = prompt("What is the length of side #1?");
    s2 = prompt("What is the length of side #2?");
    height = prompt("What is the height?","Distance from base 1 to base 2");
    perimeter = b1 + b2 + s1 +s2;
    area = ((b1 + b2) * height) / 2;
    volume = "N/A";
}
 
else if (shape==="pentagon"){
    s1 = prompt("What is the length of one side?");
    perimeter = s1 * 5;
    area = (s1 * s1 * 5) / (4 * Math.tan(180 / 5));
    volume = "N/A";
}

else if (shape==="hexagon"){
    s1 = prompt("What is the length of one side?");
    perimeter = s1 * 6;
    area = (s1 * s1 * 6) / (4 * Math.tan(180 / 6));
    volume = "N/A";
}

else if (shape==="heptagon"){
    s1 = prompt("What is the length of one side?");
    perimeter = s1 * 7;
    area = (s1 * s1 * 7) / (4 * Math.tan(180 / 7));
    volume = "N/A";
}

else if (shape==="octagon"){
    s1 = prompt("What is the length of one side?");
    perimeter = s1 * 8;
    area = (s1 * s1 * 8) / (4 * Math.tan(180 / 8));
    volume = "N/A";
}

else if (shape==="nonagon"){
    s1 = prompt("What is the length of one side?");
    perimeter = s1 * 9;
    area = (s1 * s1 * 9) / (4 * Math.tan(180 / 9));
    volume = "N/A";
}

else if (shape==="decagon"){
    s1 = prompt("What is the length of one side?");
    perimeter = s1 * 10;
    area = (s1 * s1 * 10) / (4 * Math.tan(180 / 10));
    volume = "N/A";
}

else if (shape==="cube"){
    s1 = prompt("what is the length?");
    perimeter = "N/A";
    area = 6 * Math.pow(s1,2);
    volume = s1 * s1 * s1;
}

else if (shape==="rectangular prism"){
    s1 = prompt("What is length # 1?");
    s2 = prompt("What is length # 2?");
    s3 = prompt("What is length # 3?");
    perimeter = "N/A";
    area = 2 * s1 * s2 + 2 * s2 * s3 + 2 * s3 * s1;
    volume = s1 * s2 * s3;
}

else if (shape==="cylinder"){
    s1 = prompt("What is the radius of the base?");
    height = prompt("What is the height?");
    perimeter = "N/A";
    area = 2 * (Math.PI * Math.pow(s1,2)) + 2 * Math.PI * s1 * height;
    volume = (Math.PI * Math.pow(s1,2)) * height;
}

else if (shape==="square pyramid"){
    s1 = prompt("What is the length of one of the base's sides?");
    s2 = prompt("What is the slant length?","For Surface Area only");
    height = prompt("What is the height?","Base to top");
    perimeter = "N/A";
    if  (s2===" "){
        area = "N/A";
        }
    else {
        area = Math.pow(s1,2) * 1/2 * (s1 * 4) * s2;
        }
    volume = (s1 * s1) * height / 3;
}

else if (shape==="triangular pyramid"){
    s1 = prompt("What is the area of the base?");
    s2 = prompt("What is the side length?","Needed for surface area only");
    height = prompt("What is the height?","Base to top");
    perimeter = "N/A";
    if (s2===" "){
        area = "N/A";
        }
    else{
        area = s1 + 1/2 * perimeter * s2;
        }
    volume = 1/3 * s1 * height;
}

else if (shape==="rectangular pyramid"){
    s1 = prompt("What is one side of the base?");
    s2 = prompt("What is the other side of the base?","Perpendicular to the first");
    height = prompt("What is the height?");
    perimeter = "N/A";
    area = s1 * s2 + s1 * Math.sqrt(Math.pow(s2 / 2, 2) + Math.pow(height, 2) + s2) + s2 * Math.sqrt(Math.pow(s1 / 2, 2) + Math.pow(height, 2));
    volume = (s1 * s2 * height) / 3;
}

else if (shape==="sphere"){
    s1 = prompt("What is the radius?");
    perimeter = "N/A";
    area = 4 * Math.PI  * (s1 * s1);
    volume = 4 / 3 * Math.PI * (s1 * s1 * s1);
}   

else if (shape==="hemisphere"){
    s1 = prompt("What is the radius?");
    perimeter = "N/A";
    area = (4 * Math.PI  * (s1 * s1)) / 2;
    volume = (4 / 3 * Math.PI * (s1 * s1 * s1)) / 2;
}   

else if (shape==="triangular prism"){
    s1 = prompt("What is the area of the base?");
    s2 = prompt("What is the length of one side of the base?");
    height = prompt("What is the height?");
    perimeter = "N/A";
    area = 2 * s1 + 3 * s2 * height;
    volume = s1 * height;
}

else if (shape==="cone"){
    s1 = prompt("What is the radius of the base?");
    height = prompt("What is the height?");
    perimeter = "N/A";
    area = Math.PI * s1 * (s2 + Math.sqrt(Math.pow(height,2) * Math.pow(s1,2)));
    volume = Math.PI * Math.pow(s1,2) * height/3;
}
    
if (shape !== 0) {
    confirm("Perimeter = " + perimeter + " (surface)Area = " + area + "Volume = " + volume);
}

if (shape===0){
    confirm("What the heck kinda shape is that? (Remember: only lower case is accepted)");
}

    var display1 = document.getElementById("shapeDisplay");
    display1.textContent = firstInput;
    var text1 = display1.textContent;
    
    var display2 = document.getElementById("perimeterDisplay");
    display2.textContent = perimeter;
    var text2 = display2.textContent;
    
    var display3 = document.getElementById("areaDisplay");
    display3.textContent = area;
    var text3 = display3.textContent;
    
    var display4 = document.getElementById("volumeDisplay");
    display4.textContent = volume;
    var text4 = display4.textContent;
    
    perimeter = 0;
    area = 0;
    volume = 0;
}
btn1.onclick = calculate();