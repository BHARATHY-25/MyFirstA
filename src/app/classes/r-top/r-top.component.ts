import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-r-top',
  templateUrl: './r-top.component.html',
  styleUrls: ['./r-top.component.css']
})
export class RTopComponent implements OnInit {

  // weekday: number=this._date.getDay();
  // public class: any;
  // @Input()public weekday: any; 
   date: any=new Date();
   
   @Input()public weekday:number; 


  // date: any=new Date();
  // weekday: number=this.date.getDay();

  p1: any="https://www.google.co.in";
  p2: any="https://www.youtube.com";
  p3: any="https://www.facebook.com";
  p4: any="https://www.instagram.com";
  p5: any="https://www.whatsapp.com";

  value1: any;
  value2: any;
  value3: any;
  value4: any;
  value5: any;

  constructor( ) {
    }
  ngOnInit(): void{
    this.weekday=this.date.getDay();
  }

  monday(){
    this.value1=this.p5;
    this.value2=this.p4;
    this.value3=this.p3;
    this.value4=this.p2;
    this.value5=this.p1;
  }

  tuesday(){
    this.value1=this.p2;
    this.value2=this.p4;
    this.value3=this.p5;
    this.value4=this.p1;
    this.value5=this.p3;
  }

  wednesday(){
    this.value1=this.p3;
    this.value2=this.p1;
    this.value3=this.p5;
    this.value4=this.p2;
    this.value5=this.p4;
  }

  thrusday(){
    this.value1=this.p2;
    this.value2=this.p5;
    this.value3=this.p4;
    this.value4=this.p1;
    this.value5=this.p3;
  }

  friday(){
    this.value1=this.p1;
    this.value2=this.p2;
    this.value3=this.p3;
    this.value4=this.p4;
    this.value5=this.p5;
  }

}

