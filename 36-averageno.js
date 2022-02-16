//calculate average of given number

let n = 10,
    sum = 0,
    avg;
for (i = 1; i <= n; i++) {
    sum = sum + i;
    // console.log(sum);
}
avg = sum / n;
console.log(avg);