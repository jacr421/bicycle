export class User{
    name:string;
    sName:string;
    email:string;
    password:string;
    age:number;
    telephone:string;
    constructor( name:string,sName:string,email:string,password:string,age:number, telephone:string){
        this.email=email;
        this.password=password;
        this.name=name;
        this.sName=sName;
        this.age=age;
        this.telephone=telephone;
    }
}