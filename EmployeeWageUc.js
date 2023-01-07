const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;
const NO_OF_WORKING_DAYS = 20;
let empDailyWagearr = new Array();
let empDailyWagearrmap = new Map();
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
function CalculateDailyWage(empHrs, WAGE_PER_HR) {
    return empWagePerMonth = empHrs * WAGE_PER_HR;
}
let totalWorkingDays = 0;
let totalEmpHrs = 0;
const MAX_HRS_IN_MONTH = 160;

while (totalWorkingDays < NO_OF_WORKING_DAYS && totalEmpHrs < MAX_HRS_IN_MONTH) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = GetEmpHrs(empCheck);
    totalEmpHrs += empHrs;
    empDailyWagearr.push(CalculateDailyWage(empHrs, WAGE_PER_HR));
    empDailyWagearrmap.set(totalWorkingDays, CalculateDailyWage(empHrs, WAGE_PER_HR));
    totalWorkingDays++;
}

//console.log(empDailyWagearrmap);
let res = 0;
let key =0;
for (let key of empDailyWagearrmap.keys()) { // the same as of recipeMap.entries()
    res=res+empDailyWagearrmap[key];
  } console.log(res); 