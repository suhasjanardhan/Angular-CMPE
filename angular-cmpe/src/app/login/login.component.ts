import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  private username;
	private password;

	login():void{
		if(this.username == "test" && this.password == "test"){
			alert("succesfully logged in");
		}
		else {
			alert("Wrong username anad password");
		}
	}

  ngOnInit() {
  }

}
