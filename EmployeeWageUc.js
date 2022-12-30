const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;
const NO_OF_WORKING_DAYS = 20;
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
let totalWorkingDays = 0;
let totalEmpHrs=0;
const MAX_HRS_IN_MONTH=100;
while ( totalWorkingDays < NO_OF_WORKING_DAYS && totalEmpHrs<MAX_HRS_IN_MONTH ) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += GetEmpHrs(empCheck);   
    totalWorkingDays++;
}
let empWagePerMonth = totalEmpHrs * WAGE_PER_HR;
    console.log("Total Working Days: "+totalWorkingDays+" Total Hrs: " + totalEmpHrs + " Employee Wage:" + empWagePerMonth);

