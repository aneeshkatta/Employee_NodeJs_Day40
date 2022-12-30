const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;
function GetEmpHrs(empCheck) {
    switch (empCheck) {
        case IS_FULL_TIME:
            return FULL_TIME_HRS;
            break;
        case IS_PART_TIME:
            return PART_TIME_HRS;
            break;
        default:
            return IS_ABSENT;
            break;
    }

}
const NO_OF_WORKING_DAYS = 20;
let empHrs = 0;
for (let day = 0; day < NO_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = GetEmpHrs(empCheck);
    let empWage = empHrs * WAGE_PER_HR;
    console.log("Total Hrs: " + empHrs + " Employee Wage:" + empWage);
}

