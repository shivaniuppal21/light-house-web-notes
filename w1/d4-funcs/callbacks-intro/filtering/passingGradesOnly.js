const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];
const passingGrades = grades.filter(grade =>{
    if (grade >= 70){
        return true
    }else{
        return false
    }
});
console.log("The passing grades are :" , passingGrades)