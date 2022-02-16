//24.print first N even numbers
let n = 20;
for (i = 2; i <= n; i++) {
    if (i % 2 == 0) {
        console.log("even", i);
    } else {
        console.log("odd", i);
    }
}