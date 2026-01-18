const course = {
    courseName : "jsInHindi",
    price : 799,
    period : "2 Months"
}

// console.log(course.courseName);

// const {courseName} = course
// console.log(courseName)

const {courseName : anyVariableName} = course
console.log(anyVariableName)

