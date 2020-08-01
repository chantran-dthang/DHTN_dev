
function CalRetangle()
{
    var length=Number(prompt("Input retangle length: "));
    var width=Number(prompt("Input retangle width :"));

    var S=length*width;
    var P= ( length + width)*2;
    
    console.log("Length is: "+length);
    console.log("Width is: "+width);
    console.log("Primeter is: " +P);
    console.log("Square is: " + S);
}
function CallVar(a, b)
{
    a=Number(prompt("Input retangle length: "));
    b=Number(prompt("Input retangle width :"));
}
function CalPrimeter(a, b)
{
    console.log("Primeter is: " + (a+b)*2);
}
function CalSquare(a, b)
{
    console.log("Square is: " + a*b);
}

function CalRetangle2()
{
    var length, width;
    CallVar(length, width);
    CalPrimeter(length, width);
    CalSquare(length, width);
    
}

console.log( new Date());


