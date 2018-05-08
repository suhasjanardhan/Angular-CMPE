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
			//var href = 'http://localhost:4200/main'
			window.location.href= 'http://localhost:4200/main';
		}
		else {
			alert("Wrong username anad password");
		}
	}

  ngOnInit() {
  }

}
