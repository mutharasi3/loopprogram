//print a prime number within a given range
let n = 23,
    i, newn, flag = 1;
for (newn = 2; newn <= n; newn++) {
    flag = 1;
    for (i = 2; i <= newn / 2; i++) {
        if (newn % i == 0) {
            flag = 0;

        }
    }
    if (flag == 1) {
        console.log(newn);
    }
}