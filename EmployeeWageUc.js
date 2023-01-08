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
// console.log(empDailyWagearrmap);
// uc-09 Use the Daily Wage Map and  Daily Hour Map perform  following operations using  Arrow Functions
// a. Calc total Wage and total hours worked
// b. Show the full workings days, part working days and  no working days
const Findtotal = (totalvalue, dailyvalue) => {
    return totalvalue + dailyvalue
}
totalEmpHrs = Array.from(empDailyWagearrmap.values()).reduce(Findtotal, 0);
totalsalary = empDailyWagearr.filter(dailyvalue => dailyvalue > 0).reduce(Findtotal, 0);
// console.log("Total-hrs :"+totalEmpHrs+" Total salary :"+totalsalary);
let nonWorkingdays = new Array();
let PTWorkingdays = new Array();
let FTWorkingdays = new Array();
empDailyWagearrmap.forEach((value, key, map) => {
    if ((value / WAGE_PER_HR) == 8) FTWorkingdays.push(key);
    else if ((value / WAGE_PER_HR) == 4) PTWorkingdays.push(key);
    else nonWorkingdays.push(key);
});
// console.log("FULL WORKING DAYS:"+FTWorkingdays);
// console.log("PTWorkingdays"+PTWorkingdays);
// console.log("nonWorkingdays"+nonWorkingdays);
// uc10-Ability to store the Day,Hours Worked and Wage Earned in a single object.
totalEmpHrs = 0;
totalWorkingDays = 0;
let empDyHrDailyWagearr = new Array();
while (totalWorkingDays < NO_OF_WORKING_DAYS && totalEmpHrs < MAX_HRS_IN_MONTH) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empDyHrDailyWagearr.push({
        totalWorkingDays, empHrs : GetEmpHrs(empCheck), Day_wage:CalculateDailyWage(empHrs, WAGE_PER_HR), toString() {
            return "Day:" + totalWorkingDays + "Emp Hrs:" + empHrs + "Emp Daily Wage:" + Day_wage;
        },});
        totalWorkingDays++;
}
//console.log(empDyHrDailyWagearr);
//UC11 -> Perform following Object operations using Arrow Functions.
//11a. Calc total Wage and total hours worked
let totalWages=empDyHrDailyWagearr.filter(dailyHrsAndWage => dailyHrsAndWage.Day_wage > 0).reduce((totalwage,dailyHrsAndWage) => totalwage+=dailyHrsAndWage.Day_wage,0);
let OverallWorkingHours=empDyHrDailyWagearr.filter(dailyHrsAndWage => dailyHrsAndWage.empHrs >0).reduce((totalhrs,dailyHrsAndWage) => totalhrs+=dailyHrsAndWage.empHrs,0);
console.log("UC 11A - Overall Total Working Hours :"+OverallWorkingHours+" Overall Total Employee Wage : "+totalWages);
//11b. Show the full workings days using foreach
let fullTimeWorkingdays=empDyHrDailyWagearr.filter(dailyHrsAndWage => dailyHrsAndWage.empHrs == 8).map(dailyHrsAndWage => dailyHrsAndWage.totalWorkingDays);
console.log("UC 11B - Full Time Working days are: "+fullTimeWorkingdays);

//11c. Show Part working days using Map by reducing to String Array
let partTimeWorkingDays=empDyHrDailyWagearr.filter(dailyHrsAndWage => dailyHrsAndWage.empHrs == 4).map(dailyHrsAndWage => dailyHrsAndWage.totalWorkingDays);
console.log("UC 11C - Part Time Working days are: "+ partTimeWorkingDays);

//11d. No working days only using Map function
let nonWorkingDays=empDyHrDailyWagearr.filter(dailyHrsAndWage => dailyHrsAndWage.empHrs == 0).map(dailyHrsAndWage => dailyHrsAndWage.totalWorkingDays);
console.log("UC 11D - Non working days are :"+nonWorkingDays)