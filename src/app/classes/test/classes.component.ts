import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  date: any=new Date();
  weekday: number=this.date.getDay();
  getday:number;

  constructor() { }

  ngOnInit(): void {
  }

  sentday(getday:number){
    this.getday=getday;
  }

}
