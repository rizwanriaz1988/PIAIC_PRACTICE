/* class Course {
    nameProgramme:string;
    nameCourse:string;
    fee:number;
    duration:string;
    creditHours:number;
    constructor(_nameProgramme:string,_nameCourse:string,_fee:number,_duration:string,_creditHours:number){
        this.nameProgramme = _nameProgramme
        this.nameCourse=_nameCourse
        this.fee=_fee
        this.duration=_duration
        this.creditHours=_creditHours

    }
}

const course1 = new Course("BS","BS Physics",2000,"2 Years",120)
const course2 = new Course("MS","BS Physics",2000,"2 Years",120)
const course3 = new Course("PHd","BS Physics",2000,"2 Years",120)
const course4 = new Course("ADP","BS Physics",2000,"2 Years",120)

const courseClassObjectsList:any = []
const programmesList:any = []
const BSlist:any = []
const MSlist:any = []
const PHDlist:any = []
const ADPlist:any = []


courseClassObjectsList.push(course1,course2,course3,course4)

courseClassObjectsList.map((each:any)=>{
    programmesList.push(each.nameProgramme)
    if(each.nameProgramme == "BS"){
        BSlist.push(each.nameCourse)
    }else if(each.nameProgramme == "MS"){
        MSlist.push(each.nameCourse)
    }else if(each.nameProgramme == "PHd"){
        PHDlist.push(each.nameCourse)
    }else if(each.nameProgramme == "ADP"){
        ADPlist.push(each.nameCourse)
    }
})
// console.log(programmesList);
// console.log(BSlist);
// console.log(MSlist);
// console.log(PHDlist);
// console.log(ADPlist); */
//In TypeScript, each member is public by default.
/* class Animal {
    private name:string;
    constructor(theName: string) {
        this.name = theName;
    }
    
    move(meters: number) {
        alert(this.name + " moved " + meters + "m.");
    }
}

var a = new Animal("cat").name;
console.log(a); */
//TypeScript supports getters/setters as a way of intercepting 
//accesses to a member of an object, thus allowing Encapsulation
//This gives you a way of having finer-grained control over how a 
//member is accessed on each object.
//Encapsulation is the packing of data and functions into a single 
//component. 
//It allows selective hiding of properties and methods in an 
//object by building an impenetrable wall to protect the code
// from accidental corruption.
var passcode = "secret passcode";
class Employee {
    get fullName() {
        return this._fullName;
    }
    set fullName(newName) {
        this._fullName = newName;
    }
}
var employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
export {};
