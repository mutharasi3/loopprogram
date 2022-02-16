// 20.print grade based on marks of a student
let m1 = 89,
    m2 = 84,
    m3 = 90,
    total, average;
total = m1 + m2 + m3;
average = total / 3;
if (average >= 80) {
    console.log("grade A");
} else if (average >= 60 && average <= 80) {
    console.log("grade B");
} else {
    console.log("grade C");
}