//print a number is armstrong or not
let n = 371,
    sum = 0,
    rem = 0,
    temp = n;
while (n > 0) {
    rem = n % 10;
    sum = sum + (rem * rem * rem);
    c = n - rem;
    n = c / 10;
}
if (temp == sum) {
    console.log("armstrong");
} else {
    console.log("not armstrong");
}