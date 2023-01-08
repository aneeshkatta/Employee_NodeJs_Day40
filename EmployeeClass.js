class EmployeePayrollData{
    id;
    salary;
    gender;
    startDate;
    constructor(...params){
        this.id=params[0];
        this.name=params[1];
        this.salary=params[2];
        this.gender=params[3];
        this.startDate=params[4];
    }
    get name()  {return this._name;}
    set name(name)  {this._name=name;}
    get salary()  {return this._salary;}
    set salary(salary)  {this._salary=salary;}
    get gender()  {return this._gender;}
    set gender(gender)  {this._gender=gender;}
    get startDate()  {return this._startDate;}
    set startDate(startDate)  {this._startDate=startDate;}
    toString()
    {
        const options = { day:'numeric', month:'long', year: 'numeric'};
        const empdate=this.startDate ===undefined ?"undefined": 
        this.startDate.toLocaleDateString("en-US",options);
        return "id="+this.id+", name="+this.name+", salary="+this.salary+", gender="+this.gender+", startDate="+empdate ;
    }
}

let employeePayrollData=new EmployeePayrollData(1,"ravi",50000,"M",new Date());
console.log(employeePayrollData);
