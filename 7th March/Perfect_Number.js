let number = parseInt(prompt("Enter a number: "));
let sum = 0;
for(let i = 1; i < number; i++)
{
    if(number % i == 0)
    {
        sum = sum + i; 
    }
}
if(sum == number) 
{
    document.getElementById("perfect").innerHTML=number + " is a perfect number.";
}
else
{
    document.getElementById("perfect").innerHTML=number + " is a not perfect number.";
}