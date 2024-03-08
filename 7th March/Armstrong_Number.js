let number = parseInt(prompt("Enter a number: "));
let remainder, sum = 0, tempNumber;
tempNumber = number;
while(tempNumber > 0)
{
    remainder = tempNumber % 10;
    sum = sum + (remainder*remainder*remainder);
    tempNumber = parseInt(tempNumber / 10);
}
if(sum == number)
{
    document.getElementById("armstrong").innerHTML=number + " is an armstrong number."
}
else
{
    document.getElementById("armstrong").innerHTML=number + " is not an armstrong number."
}