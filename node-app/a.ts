interface User {
  firstName : string ;
  lastName : string;
  age: number;
  email?: string;
};
function isLegal(user: User): boolean {
  if (user.age >= 18) {
    return true;
  } else {
    return false;
  }
}

isLegal({
  firstName: "Sayantan",
  lastName: "Aditya",
  age: 23,
  email: "ashah"
})