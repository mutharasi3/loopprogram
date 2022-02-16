//print a given number is prime or not
let n = 79,
    flag = 0;
for (i = 2; i <= n / 2; i++) {
    if (n % i == 0) {
        flag = 1;

    }
}
if (flag == 0) {
    console.log("prime");
} else {
    console.log("not prime");
}