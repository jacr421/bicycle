import { User } from "../model/user.model";

export class UserService{
    users:User[]=[]
    user:User;
    userLogin(u:User){
        this.user=u;
        console.log('1'+this.user)
    }
    addNewUser(user:User){
        this.users=JSON.parse(localStorage.getItem('users'))
        this.users.push(user)
        localStorage.setItem('users',JSON.stringify(this.users))
    }
}