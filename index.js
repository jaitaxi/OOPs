class Employee{
    constructor(name, salary, position, experience, workinghours ,lunchtime){
        this.name=name;
        this.salary=salary;
        this.position=position;
        this.experience=experience;
        this.workinghours=workinghours;
        this.lunchtime=lunchtime;
    }

    haveExperience(){
        console.log(`${this.name},Have Experience`);
    }
}

class manager extends Employee{
    constructor(name, salary, position, experience, workinghours ,lunchtime,hire,management){
        super(name, salary, position, experience, workinghours ,lunchtime, hire ,management)
        this.hire=hire;
        this.management=management;
    }
    attendmetting(){
        console.log(`${this.name},yes`);
    }
}

let abc=new Employee("abc",12000,"EM1",5,8,2)
console.log(abc);

abc.haveExperience()

let jaitaxi=new manager("jaitaxi",30000,"M1",6,8,2,"hire aurthority","yes")
console.log(jaitaxi);
jaitaxi.attendmetting()