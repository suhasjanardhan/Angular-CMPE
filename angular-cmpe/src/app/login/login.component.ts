import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: Http) { }
  private username;
	private password;
	arr=[];
	status="";
	login():void{
		
   this.getRec({"data":{"username":this.username,"password": this.password 
   }}).subscribe(data =>{
		 this.status=data.message;
		 console.log("status",data.message)
		 if(this.status == "true"){
			window.location.href='http://localhost:4200/main';
		} else if(this.status == "false") {
			alert("User not registered or wrong user name and password!");
		}
    });
		

	
	}

	getRec(body: Object):Observable<any>{
		console.log("in api to get locations")
				// ...using get request
	
				let bodyString = JSON.stringify(body); // Stringify payload
					let headers      = new Headers(); 
					// ... Set content type to JSON
					headers.append('Access-Control-Allow-Origin', 'http://localhost:3001');
					headers.append( 'Content-Type','application/json')
		 
					headers.append('Access-Control-Allow-Credentials', 'true')
				
					let options       = new RequestOptions({ headers: headers }); // Create a request option
	
				return this.http.post('http://localhost:3001/login',body,options)//.then(console.log("repsonse",res))
											 // ...and calling .json() on the response to return data
												.map((res:Response) => {
													console.log("repsonse",res.json())
													return res.json()
												})
												//...errors if any
												.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
		
		}

  ngOnInit() {
  }

}
