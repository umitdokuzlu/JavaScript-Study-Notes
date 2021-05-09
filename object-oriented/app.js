// const emp1={
//     name:"mustafa",
//     age:25,
//     showInfos:function(){console.log("bilgiler gösteriliyor.");}

// };
// const emp2={
//     name:"ahmet",
//     age:25
// };
// emp1.salary=400;
// console.log(emp1,emp2)
// emp1.showInfos();

// function Employee(){
//     this.name="mustafa";
// }
// const emp1= new Employee();
// const emp2=new Employee();
// console.log(emp1)
// console.log(emp2)
// function Employee(name,age,salary){
//     this.name=name;
//     this.age=age;
//     this.salary=salary;

//     this.showInfos=function(){
//         console.log(this.name,this.salary,this.age)
//     }
    
// }
// const emp1= new Employee("ali",25,4000);
// const emp2=new Employee("umit",25,5000);

// console.log(emp1)

// function Employee(name,age){
//     this.name=name;
//     this.age=age;
//     this.showInfos=function(){
//         console.log("Bilgiler Gösteriliyor..")
//     }
// }

// const emp1=new Employee("mustafa",25);
// console.log(emp1);

// function Employee(name,age){
//     this.name=name;
//     this.age=age;
//     this.showInfos=function(){
//         console.log("isim:" +" "+ this.name + " "+ "yaş:" + this.age);
//     }
// }
// const emp1=new Employee("mustafa",25)
// const emp2=new Employee("umit",24)
// console.log(emp1,emp2);
// emp1.showInfos();
// emp2.showInfos();

// const obj={
//     test1:function(){
//         console.log("test 1");
//     },
//     test2:function(){
//         console.log("test 2");
//     }
// }

// const emp=Object.create(obj)
// emp.name="mustafa";
// emp.age=25;
// console.log(emp)
// function Person(){

// }
// Person.prototype.test1=function(){
//     console.log("test 1")
// }
// Person.prototype.test2=function(){
//     console.log("test 2")
// }
// const person = new Person();
// console.log(person)

// function Person(name,age){
//     this.name=name;
//     this.age=age;
// }

// Person.prototype.showInfos=function(){
//     console.log("isim: "+this.name+" Yaş: "+this.age);
// }
// // const person=new Person("Mustafa",25);
// // console.log(person);


// function Employee(name,age,salary){
//     this.name=name;
//     this.age=age;
//     this.salary=salary;
// }
// Employee.prototype=Object.create(Person.prototype)
// const emp= new Employee("umit",25,5000);
// // console.log(emp)
// emp.showInfos()

// function Employee(name,age,salary){
//     this.name=name;
//     this.age=age;
//     this.salary=salary;
// }

// Employee.prototype.showInfos=function(){
//     console.log("isim: "+this.name+"yas: "+this.age+"maas: "+this.salary);
// }
// const emp=new Employee("mustafa",25,4000)

// console.log(emp)

// class Employee{

//     constructor(name,age,salary){
//         this.name=name;
//         this.age=age;
//         this.salary=salary;
//     }
//     showInfos(){
//         console.log("isim: "+this.name+"yas: "+this.age+"maas: "+this.salary);
//     }

// }
// const emp=new Employee("mustafa",25,5000);
// console.log(emp)

// class Matematik{

//     cube(x){
//         console.log(x*x*x)
//     }
// }
// const math=new Matematik();
// math.cube(3);

// class Matematik{
//     static cube(x){
//         console.log(x*x*x)
//     }
// }
// Matematik.cube(4);

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    showInfos(){
        console.log("isim: "+this.name+"yaş: "+this.age);
    }
}
class Employee extends Person{
    constructor(name,age,salary){
        // this.name=name;
        // this.age=age;
        super(name,age);
        this.salary=salary;
    }
}
const emp=new Employee("mustafa",25,500);
console.log(emp);