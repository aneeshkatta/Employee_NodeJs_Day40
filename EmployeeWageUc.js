const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;
let empHrs = 0;
let empCheck = Math.floor(Math.random() * 10) % 3;
switch (empCheck) {
    case  IS_FULL_TIME :
        console.log("Employee is Full Time");
        empHrs = 8;
        break;
    case  IS_PART_TIME :
        console.log("Employee is Part Time");
        empHrs = 8;
        break;
    default :
    console.log("Employee is Absent");
        empHrs = 0;
        break;
}
let empWage=empHrs*WAGE_PER_HR;
console.log("Employee Wage:"+empWage);
