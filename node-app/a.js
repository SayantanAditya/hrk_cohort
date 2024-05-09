"use strict";
;
function isLegal(user) {
    if (user.age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
isLegal({
    firstName: "Sayantan",
    lastName: "Aditya",
    age: 23,
    email: "ashah"
});
