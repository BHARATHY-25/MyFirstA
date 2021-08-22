import { Component, OnInit, Output , EventEmitter } from '@angular/core';


@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
  
  @Output() private weekday:any=new EventEmitter();

  date:any=new Date();
  day: any=this.date.getDay();
  
  monday:any;
  tuesday:any;
  wednesday:any;
  thrusday:any;
  friday:any;
  saturday:any;

  constructor() { }

  ngOnInit(): void {
   
  }
  
  moncl(){
  this.monday="button";
  this.tuesday=" ";
  this.wednesday=" ";
  this.thrusday=" ";
  this.friday=" ";
  this.saturday=" ";
  const dayno=1;
  this.weekday.emit(dayno);
  }

  tuecl(){
    this.monday="";
    this.tuesday="button";
    this.wednesday=" ";
    this.thrusday=" ";
    this.friday=" ";
    this.saturday=" ";
    const dayno=2;
  this.weekday.emit(dayno);
  }
  wedcl(){
    this.monday="";
    this.tuesday=" ";
    this.wednesday="button";
    this.thrusday=" ";
    this.friday=" ";
    this.saturday=" ";
    const dayno=3;
  this.weekday.emit(dayno);
  }
  thrcl(){
    this.monday="";
    this.tuesday=" ";
    this.wednesday=" ";
    this.thrusday="button";
    this.friday=" ";
    this.saturday=" ";
    const dayno=4;
  this.weekday.emit(dayno);
  }
  fricl(){
    this.monday=" ";
    this.tuesday=" ";
    this.wednesday=" ";
    this.thrusday=" ";
    this.friday="button";
    this.saturday=" ";
    const dayno=5;
  this.weekday.emit(dayno);
  }
  
}
function dayno(dayno: any) {
  throw new Error('Function not implemented.');
}

