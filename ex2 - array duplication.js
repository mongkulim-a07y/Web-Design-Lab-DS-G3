// 1. We are managing a data structure of students -  representing a student with 'firstName' and 'age' properties.
// 2. The 'updateStudentAge' function is supposed to update the age of a student his/her first name
// 3. However, some students have the same first name !
// 4. To fix this bug, we want to add 2 properties : lastName and batch  (given a firstName + lastName + batch we do not expect duplication)

// TODO:
// - Update the data strucure and the functions to manage those new properties
const STUDENTS_DATA = [
  { firstName: "Kolheng", lastName: "Bou",batch: 12, age: 20 },
  { firstName: "Seva", lastName: "Kna",batch: 12, age: 22 },
  { firstName: "Mongkul", lastName: "Im",batch: 12, age: 21 },
  { firstName: "Kolheng", lastName: "Bo",batch: 13, age: 19 }, // Duplicate first name !
];

/**
 * Update 1 student age, given his/her first name
 * @param {string} firstName - the student first name
 * @param {age} newAge  - the student new age
 */
function updateStudentAge(fName, lName, batch, newAge){
    const student = STUDENTS_DATA.find(item => 
        item.firstName === fName &&
        item.lastName === lName &&
        item.batch === batch
    );

    if(!student) return false;

    student.age = newAge;
    return true
}

// 1 - Update An age to 30
updateStudentAge("Kolheng", "Bo", 13, 18);

// 2 - Print the updated data
console.log(JSON.stringify(STUDENTS_DATA));
