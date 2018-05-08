import { HomeComponent } from './../home/home.component';
import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})



export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // openModel() {
  //   HomeComponent = 'modal fade show';
  // }
  // closeModel() {
  //    this.HomeComponent.nativeElement.className = 'modal hide';
  // }
}
