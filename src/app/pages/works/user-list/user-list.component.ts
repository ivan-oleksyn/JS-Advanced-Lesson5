import { Component, OnInit } from '@angular/core';

export interface IUser{
  login:string,
  password:string,
  email:string
}

export class User implements IUser{
  public login: string;
  public password: string;
  public email: string
  constructor(login: string, password: string, email: string) {
    this.login = login;
    this.password = password;
    this.email = email;
    }
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public loginRegExp = /^[a-zA-Z]{4,16}$/i;
  public passRegExp = /^[-.\w]{4,16}$/i;
  public emailRegExp = /^[a-zA-Z-.\d]+@[a-zA-Z]+\.+[a-zA-Z]+/i;

  public loginValue!: string;
  public passwordValue!: string;
  public emailValue!: string;
  public testLogin!: boolean;
  public testPassword!: boolean;
  public testEmail!: boolean;
  public addActive = true;
  public addEnabled = true;
  public editActive = true;
  public user!: IUser;
  public users: User[]=[];
  public userIndex!: number;

  constructor() { }

  ngOnInit() {
  }

  addUser(): void {
    this.user = {
      login: this.loginValue,
      password: this.passwordValue,
      email:this.emailValue
    };
    this.users.push(this.user);
    this.resetForm();
    this.addEnabled = !this.addEnabled;
  };

  editUser(userId: number): void{
    this.userIndex = userId;
    this.editActive = true;
    this.loginValue = this.users[userId].login;
    this.passwordValue = this.users[userId].password;
    this.emailValue = this.users[userId].email;
    this.addActive = false;
  }

  saveEditedUser(): void{
    console.log(this.userIndex);
    this.user = new User(this.loginValue, this.passwordValue, this.emailValue);
    this.users[this.userIndex] = this.user;
    this.resetForm();
    this.addActive = true;
    this.addEnabled = true;
    this.editActive = false;
  }

  deleteUser(index:number): void{
    this.users.splice(index, 1);
  }

  checkButton(): void{
    if (this.testLogin && this.testPassword && this.testEmail) {
      this.addEnabled = !this.addEnabled;
    }
  }
  checkLogin():void {
    this.testLogin = this.loginRegExp.test(this.loginValue);
    this.checkButton();
  }

  checkPassword(): void{
    this.testPassword = this.passRegExp.test(this.passwordValue);
    this.checkButton();
  }

  checkEmail(): void{
    this.testEmail = this.emailRegExp.test(this.emailValue);
    this.checkButton();
  }

  resetForm(): void{
    this.loginValue = '';
    this.passwordValue = '';
    this.emailValue = '';
  }
}
