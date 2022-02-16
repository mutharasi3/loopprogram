//25-print n odd numbers

let n = 34;
for (i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
        console.log("odd", i);
    } else {
        console.log("even", i);
    }
}