import { Component, OnInit } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { DetailsComponent } from './../details/details.component';
// import { BsModalService, ModalDirective } from 'ngx-bootstrap/modal';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Component({
  selector: 'app-home-main',
  //directives: [DetailsComponent],
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css']
})

@Injectable()
export class HomeMainComponent implements OnInit {

  constructor(private http: Http) { }
  arr = [];
  status;
  search;
  private commentsUrl = 'http://localhost:3001/fake'; 
  ngOnInit() {
  }

getapi(){
  //  this.getComments().subscribe();
  console.log("search",this.search)
   this.getRec({"data":{"term":this.search,"location": 'san jose, ca' 
   }}).subscribe(data =>{
     
     
     console.log("data",data.jsonBody.businesses)
     this.arr = data.jsonBody.businesses
    });



}

  getComments():Observable<any>{
console.log("in comments")
    // ...using get request
    return this.http.get('http://localhost:3001/fake')//.then(console.log("repsonse",res))
                   // ...and calling .json() on the response to return data
                    .map((res:Response) => {
                      var temp = res.json()
                      console.log("",temp._body)
                    }) 
            
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

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

      return this.http.post('http://localhost:3001/api',body,options)//.then(console.log("repsonse",res))
                     // ...and calling .json() on the response to return data
                      .map((res:Response) => {
                        console.log("repsonse",res.json())
                        return res.json()
                      })
                      //...errors if any
                      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  
  }




  // onClick() {
  //   const dialogRef = this.modal.alert()
  //       .size('lg')
  //       .showClose(true)
  //       .title('A simple Alert style modal window')
  //       .body(`
  //           <h4>Alert is a classic (title/body/footer) 1 button modal window that 
  //           does not block.</h4>
  //           <b>Configuration:</b>
  //           <ul>
  //               <li>Non blocking (click anywhere outside to dismiss)</li>
  //               <li>Size large</li>
  //               <li>Dismissed with default keyboard key (ESC)</li>
  //               <li>Close wth button click</li>
  //               <li>HTML content</li>
  //           </ul>`)
  //       .open();

  //   dialogRef.result
  //       .then( result => alert(`The result is: ${result}`) );
  // }















}
