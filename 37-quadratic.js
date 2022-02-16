//calculate quadratic equation
let x,
    r1,
    r2,
    a = 14,
    b = 15,
    c = 29;
x = b * b - 4 * a * c;
r1 = (-b + x) / 2 * a;
r2 = (-b - x) / 2 * a;
if (x > 0)
    console.log('roots are unequal');
else if (x < 0)
    console.log("roots are imaginery");
else
    console.log("roots are same");
console.log("r1", r1);
console.log("r2", r2);