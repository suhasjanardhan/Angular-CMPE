import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private http: Http) { 

   // this.users()

  }
status=[];

users(){
  this.getRec({"data":{"username":"admin","password": "admin"
}}).subscribe(data =>{

  //window.location.href='http://localhost:4200/userlist';
this.status=data;
console.log("status",this.status)

});

}



  ngOnInit() {
this.users();
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
  
        return this.http.post('http://localhost:3001/admin',body,options)//.then(console.log("repsonse",res))
                       // ...and calling .json() on the response to return data
                        .map((res:Response) => {
                          console.log("repsonse",res.json())
                          return res.json()
                        })
                        //...errors if any
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    
    }
}
