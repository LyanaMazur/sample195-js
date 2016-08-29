//var hello = 'Hello World!';
//document.write(hello);
//console.log(hello); спитати як відкрити консоль
//var num1 = 10;
//var num2 = 20;
//var sum = num1 + num2;
//document.write(sum);
//зчитуємо 2 числа і рахуємо суму
//var num1=String(prompt("Enter value1"));
//num1=Number(num1);
//document.write(num1);
//var num2=String(prompt("Enter value2"));
//num2=Number(num2);
//document.write(num2);
//var sum = num1 + num2;
//document.write(sum);

//функція

var a=String(prompt("Enter a"));
a=Number(a);
var b=String(prompt("Enter b"));
b=Number(b);
var c=String(prompt("Enter c"));
c=Number(c);
//document.write(a,b,c);

quad_eq(a,b,c);

function quad_eq (a1,b1,c1)
{
    var d, x1, x2;
    
        if ((a1==0)&&(b1==0)&&(c1==0)) {
        return document.write("The solution is any number");
    } 
        else 
    
        if ((a1==0)&&(b1==0)&&(c1!==0)) {
        return document.write("There are no solutions");
    } 
        else 
    
        if ((a1==0)&&(b1!=0)&&(c1!=0)) {
            x1=-c1/b1;
            x1=String(x1);
            return document.write("There is only one solution",": ",x1);
    } 
        else  
    
    d=b1*b1-4*a1*c1;
 
    if (d>=0) { 
    x1=(-b1+Math.sqrt(d))/(2*a1);
    x2=(-b1-Math.sqrt(d))/(2*a1);
    x1=String(x1);
    x2=String(x2);
    return document.write(x1," ; ",x2);

    }
    else
   return document.write("There are no solutions");
}

