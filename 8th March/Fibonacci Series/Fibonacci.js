let limit = parseInt(prompt("Enter a limit: "))
let i = 0;
let j = 1;
document.write(i + " ")
document.write(j + " ")
let k = 0;
while (k < limit)
{
    k = i + j;
    document.write(k + " ")
    i = j;
    j = k;
}