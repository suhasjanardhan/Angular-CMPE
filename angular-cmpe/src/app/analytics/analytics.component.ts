import { Component, OnInit,ViewChild } from '@angular/core';


@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})



export class AnalyticsComponent implements OnInit {
@ViewChild('lineCanvas') lineCanvas;
  constructor() { }


//   this.lineChart = new Chart(this.lineCanvas.nativeElement, {
//     type: 'bar',
//     data: [10,100,90],
  
// });


  ngOnInit() {
  }
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,

  };
  public barChartLabels:string[] = ['Register', 'Login', 'Home', 'Search', 'Admin', 'Dashboard'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public barcolors:any[] = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)'
];
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Analytics',
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
  ],
  borderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
  ]}
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }
//   public barChartData:any[] = [
//     {data: [65, 59, 80, 81, 56, 55, 40], label: 'Analytics',
// }
//   ];
  // public lineChartData:Array<any> = [
  //   {data0: [65, 59, 80, 81, 56, 55, 40], Label: 'Analytics'},
  //   {data1: [28, 48, 40, 19, 86, 27, 90], label1: 'Analytics'}]


  public lineChartData:Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  public lineChartLabels:Array<any> = ['Register', 'Login', 'Home', 'Search', 'Admin', 'Dashboard', 'cancel'];
  public lineChartType:string = 'line';
  public pieChartType:string = 'pie';
 
  // Pie
  public pieChartLabels:string[] = ['Login', 'Home', 'Register'];
  public pieChartData:number[] = [300, 500, 100];


  public randomizeType():void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
  }

}


