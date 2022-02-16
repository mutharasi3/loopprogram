// 21.program to find marriage eligibility
let age = 12,
    gender = "male",
    maritalstatus = "i";
if (maritalstatus == "m") {
    console.log(" not eligible to marry");
} else if (maritalstatus == "u") {
    if (gender == "male") {
        if (age >= 25) {
            console.log("elligible to marry");
        } else {
            console.log("not elligible to marry");
        }
    } else if (gender == "female") {
        if (age >= 21) {
            console.log("elligible to marry");
        } else {
            console.log("not elligible to marry");
        }
    }
} else {
    console.log("invalid maritalstatus");
}