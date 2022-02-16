//1.program to find a number is positive or negative
// let n = 90;
// if (n >= 0) {
//     console.log("positive");
// } else {
//     console.log("negative");
// }


//2.multiple of 7
// let n = 147;
// if (n % 7 == 0) {
//     console.log("multiple of 7");
// } else {
//     console.log("not multiple of 7");
// }

//3.program to find large number 

// let a = 43;
// b = 34;
// c = 10000;
// if (a > b) {

//     if (a > c) {
//         console.log(a);

//     } else {
//         console.log(c);
//     }
// } else {
//     console.log(b);
// }

//4.program to find marital status
// let age = 67,
//     gender = "f",
//     maritalstatus = "unmarried";
// if (maritalstatus == "married") {
//     console.log("not eligible to marry");
// } else if (maritalstatus == "unmarried") {
//     if (gender == "m") {
//         if (age >= 25)
//             console.log("elligible");
//         else
//             console.log("not elligible");
//     } else if (gender == "f") {
//         if (age >= 21)
//             console.log("elligible");
//         else
//             console.log("not elligible");
//     }
// }

//5.ascending order of three numbers

// var a = prompt('enter the number'),
//     b = prompt('enter the number'),
//     c = prompt('enter the number');
// if (a > b && a > c) {
//     if (b > c) {

//         console.log(c, b, a);
//     } else {
//         console.log(b, c, a);
//     }
// } else if (b > a && b > c) {
//     if (a > c) {
//         console.log(c, a, b);
//     } else {
//         console.log(a, c, b);
//     }
// } else(c > a && c > b)
// if (a > b) {
//     console.log(b, a, c);
// } else {
//     console.log(a, b, c);
// }



//6.program to write number into words
// let n = 9;
// if (n == 1) {
//     console.log("one");
// } else if (n == 2) {
//     console.log("two");
// } else if (n == 3) {
//     console.log("three");
// } else if (n == 4) {
//     console.loglog("four");
// } else if (n == 5) {
//     console.log("five");
// } else if (n == 6) {
//     console.log("six");
// } else if (n == 7) {
//     console.log("seven");
// } else if (n == 8) {
//     console.log("eight");
// } else if (n == 9) {
//     console.log("nine");
// } else {
//     console.log("its not a single digit");
// }

//7.program to find ascending number of four numbers


// var a = 10000,
//     b = 8,
//     c = 7000,
//     d = 90,
//     temp = 0;

// if (a > b && a > c && a > d) {
//     if (b > c && b > d) {
//         if (c > d) {
//             console.log(a, b, c, d);
//         } else {
//             console.log(a, b, d, c);
//         }
//     } else if (b > c) {
//         if (d > b) {
//             console.log(a, c, d, b);
//         } else {
//             console.log(a, c, b, d);
//         }
//     } else if (d > c) {
//         if (c > b) {
//             console.log(a, d, c, b);
//         } else {
//             console.log(a, d, b, c);
//         }
//     }
// }
// } else if (b > a && b > c && b > d) {
//     if (c > d && c > a) {
//         if (d > a) {
//             console.log(b, c, d, a);
//         } else {
//             console.log(b, c, a, d);
//         }
//     } else if (d > c) {
//         console.log(b, a, d, c);
//     } else {
//         console.log(b, a, c, d);
//     }
//     if (a > c) {
//         console.log(b, d, a, c);
//     } else {
//         console.log(b, d, c, a);
//     }
// } else if (c > a && c > b && c > d) {
//     if (d > a && d > b) {
//         if (a > b) {

//             console.log(c, d, a, b);
//         } else {
//             console.log(c, d, b, a);
//         }
//     } else if (b > a) {
//         console.log(c, b, a, d);
//     } else {
//         console.log(c, a, b, d);
//     }
//     if (b > d) {
//         console.log(c, a, b, d);
//     } else {
//         console.log(c, a, d, b);
//     }
// }
//  else(d > a && d > b && d > c)
// if (a > b && a > c) {
//     if (b > c) {
//         console.log(d, a, b, c);
//     } else {
//         console.log(d, a, c, b);
//     }
// }

// if (a > b) {
//     temp = a;
//     a = b;
//     b = temp;
// }
// if (a > c) {
//     temp = a;
//     a = c;
//     c = temp;
// }
// if (a > d) {
//     temp = a;
//     a = d;
//     d = temp;
// }
// if (b > c) {
//     temp = b;
//     b = c;
//     c = temp;
// }
// if (b > d) {
//     temp = b;
//     b = d;
//     d = temp;
// }
// if (c > d) {
//     temp = c;
//     c = d;
//     d = temp;
// }
// console.log(a, b, c, d);
// console.log(d, c, b, a);

// 8.write a program to print table of a given number n
// let n = 22,
//     tab;
// for (i = 1; i <= 10; i++) {
//     for (j = 1; j <= i; j++) {
//         tab = i * n;
//         console.log(i + "*" + n + "=" + (i * n));
//     }
// }

// 9.write a program to accept an integer from user and print that interger in words
// let n = 123,
//     rev = 0,
//     rem = 0;
// while (n > 0) {
//     rem = n % 10;
//     rev = (rev * 10) + rem;
//     c = n - rem;
//     n = c / 10;
// }
// let a = rev,
//     rev1 = 0;
// while (a > 0) {
//     rem = a % 10;
//     rev1 = (rev1 * 10) + rem;
//     c = a - rem;
//     a = c / 10;
//     string = string + "" + rem;
//     if (n == 1) {
//         console.log("one");
//     } else if (n == 2) {
//         console.log("two");
//     } else if (n == 3) {
//         console.log("three");
//     }
//     rev = rev / 10;
// }

// console.log(rev);

//write a program ro accept an integer n and print the series like 1 22 333 444
// let n = 12;
// for (i = 1; i <= n; i++) {
//     for (j = 1; j <= i; j++) {
//         console.log(i);
//     }
// }