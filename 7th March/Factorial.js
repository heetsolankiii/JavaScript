let number = parseInt(prompt("Enter a number: "));
let fact = 1;
for(let i = 1; i <= number; i++)
{
    fact = fact * i;
}
document.getElementById("factorial").innerHTML="Factorial of " + number + " is " + fact;