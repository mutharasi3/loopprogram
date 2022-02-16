//34.print fibonacci series
let n = 11,
    a = 0,
    b = 1,
    c;
console.log(a);
for (i = 0; i <= n; i++) {
    c = b;
    b = a + b;
    a = c;
    console.log(b);
}