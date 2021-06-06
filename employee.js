/uc4 cal wage for month
const NUM_OF_WORKING_DAYS = 2;
let empHrs = 0;
for(let day = 0; day<NUM_OF_WORKING_DAYS; day++) {
    let empcheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empcheck); 
}
let empWage = empHrs * WAGE_PER_HOURS;
console.log("Total Hrs:" +empHrs+ "Emp Wage;" + empWage);

//uc5 num of workingdays or twh per month 
const MAX_HRS_IN_MONTH = 100;
const NUM_OF_WORKING_DAYS = 10;
let TotalEmpHrs = 0;
let totalWorkingDays = 0;
while(TotalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays< NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empcheck = Math.floor(math.random() * 10) % 3;
    TotalEmpHrs += getWorkingHours(empcheck);
let empWage = TotalEmpHrs * WAGE_PER_HOURS ;
console.log("UC5- Total Days:" = totalWorkingDays +
"Total Hrs:" + TotalEmpHrs + "Emp Wage:" + empWage);
}
//uc6 array
function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOURS;
}
const MAX_HRS_IN_MONTH = 100;
const NUM_OF_WORKING_DAYS = 10;
let TotalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
while(TotalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays< NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empcheck = Math.floor(math.random() * 10) % 3;
    let EmpHrs = getWorkingHours(empcheck);
    TotalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}
let empWage = calcDailyWage(TotalEmpHrs);
console.log("UC6- Total Days:" = totalWorkingDays +
"Total Hrs:" + TotalEmpHrs + "Emp Wage:" + empWage);

//uc7A cala wagw using array for each travesal
let totEmpWage = 0;
function sum(dailyWage)  {
    totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A- Total Days:" + totalWorkingDays + "Total Hrs:" + TotalEmpHrs + "Emp Wage:" + totEmpWage);

function totalWages(totalWage,dailyWage) {
    return totalWage + dailyWage;
}
console.log ("UC7 - Emp Wage with reduce: " + empDailyWagerArr.reduce(totalWages,0));

//uc7b day along with daily wage using array map
let dailyCntr =0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + "=" + dailyWage;
}
let mapDailyWithWageArr = empDailyWageArr.map(mapDayWithWage);
console . log ("UC7B - Daily Wage Map");
console.log (mapDailyWithWageArr);


//uc7c show full time wage 160
function fulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDailyWithWageArr.filter(fulltimeWage);
console.log ("UC7C - daily Wage Filter When Fulltime Wage Eraned");
console.log (fullDayWageArr);


//uc7D
function findFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log ("UC7D - Frist time Fulltime Wage was eraned one day: "+
mapDailyWithWageArr.find(FulltimeWage));

//uc7E
function isAllFulltimeWage (dailyWage) {
    return dailyWage.includes("160");
}
console.log ("UC7E - check All the element have Full Time Wage: "+
fullDailyWithWageArr.every(isFulltimeWage));

//uc7F
function isAnyParttimeWage (dailyWage) {
    return dailyWage.includes("80");
}
console.log ("UC7F - check if Any  Part Time Wage: "+
mapDailyWithWageArr.some(isParttimeWage));

//uc7g
function totalDaysWorked(numofDays, dailyWage) {
    if(dailyWage >0) return numofDays+1;
    return numofDays;
}
console.log ("UC7G - number of Days Emp Worked:" +
empDailyWageArr.reduce(totalDaysWorked, 0));


//uc8
const MAX_HRS_IN_MONTH = 100;
const NUM_OF_WORKING_DAYS = 30;
let TotalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWagemap = new Map();
function calcDailyWage(empHrs) {
    return empHrs= WAGE_PER_HOUR;
}

while(TotalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays< NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empcheck = Math.floor(math.random() * 10) % 3;
    let EmpHrs = getWorkingHours(empcheck);
    TotalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
    empDailyWageMap .set(totalWorkingDays, calcDailyWage(empHrs));
}
console.log(empDailyWageMap);
function totalWage(totalWage, dailyWage){
    return totalWage + dailyWage;
}
console.log("UC7A- Emp Wage Map totalHrs:"  +
 Array.from (empDailyWageMap.values ()). reduce(totalempWage, 0));
 

//uc9 arroe function

const findTotal = (totalVal,dailyVal) => {
    returntotalVal + dailyVal;
}
let count = 0;
let totalHours = Array.from(empdailyHrsMap.values()).reduce(findTotal,0);
let totalsalary = empDailyWageArr.filter(dailyCntr =>DailyWage > 0)
.reduce(findTotal,0);
console .log ("uc9A - Emp Wage with Arrow.: "+" Total Hours:"+ totalHours+"TotalWages:" + totalsalary);
let noWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.foreach(value,key,) => {
    if(value == 8) fullWorkingDays.push(key);
    else if (value == 4)parttimeWorkindDays.push(key);
    else noWorkingDays.push(key);
});
console.log ("Full Working Days:" + fullWorkingDays);
console.log ("Part  Working Days:" + partWorkingDays);
console.log ("Non Working Days:" + nonWorkingDays);

//uc10

let TotalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
while(TotalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays< NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empcheck = Math.floor(math.random() * 10) % 3;
    let EmpHrs = getWorkingHours(empcheck);
    TotalEmpHrs += empHrs;
    empDailyWageArr.push(
        {
            dayNum: totalWorkingDays,dailyHours:empHrs,dailyWage:calcDailyWage(empHrs),
            totalstring() {
                return'\nDay' + thisdayNum + '=> Working Hours is ' + this.dailyHours+
                'And Wage Eraned = ' + this.DailyWage
            },
        });
    }
    console.log ("uc10 showing Daily Hours Worked and Wage Eraned: " +empDailyHrsWagerArr);

    
//uc11
let totalWages=empDailyWagerArr
.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
.reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage,0);
let totalHours = empDailyHrsAndWagerArr
.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
.reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours,0);
console.log("uc11A Total Hours:" +totalHours+ " Total Wage; " +totalWage);

Process.stdout .write("uc11B logging full Work Days")
empDailyHrsAndWagerArr.fliter(dailyHrsAndWage => dailyHrsAndWage.dailyHours ==8)
.foreach(dailyHrsAndWage => process.stdout.writer(dailyHrsAndWage.tostring()));

let partWorkingDaysstrArr = empDailyHrsAndWagerArr
filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours > 4)
.map( dailyHrsAndWage =>  dailyHrsAndWage.tostring());
console.log("uc11AC Part Working Daystrings:" +partWorkingDaystrArr);

let noWorkingDaysNums = empDailyHrsAndWagerArr
.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
.map( dailyHrsAndWage =>  dailyHrsAndWage.dayNum);
console.log ("UC11D NonWorkingDayNums:" +noWorkingDaysNums);

class EmployeePayrollData {
id;
salary;
gender;
startDate;

constructor(parans) {
    this.id = parans[0]
    this.salary = parans[1]
    this.gender = parans[2]
    this.startDate = parans[3]
    this.name = parans[4]

    get .name() { return this._name}
    set .name(name){
         let nameRegex = RegExp{'^[A-Z{1}[a-z]{3,}$')
         if (nameRegex.test(name))
         this._name=name;
         else throw 'Name is Incorrect!';
    }
tostring() {
    const option = { year: 'numeric',month: 'long',day:'numeric' };
    const empDate = !this.startDate ? "undefined"  ;
    this .startDate.localDatestring("en-us", option);
    return"id" +this.id + ".",name" + this.name =," +empDate;
}

}


let employeepayrollDate = new EmployeePayrollData(1 "mark",300000);
console .log(employeepayRollData.tostring());
try {
    employeepayRollData.name = "john";
    console.log(employeepayrollData.tostring());
}
catch(e) {
    console.error(e);
}
let newEmployeePayRollData = new EmployeePayrollData(1,"kumar",80000,f,new Date());
console.log(newEmployeeRollData.toString());




