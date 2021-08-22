import { Component, OnInit } from '@angular/core';
import { JSDocAllType } from 'typescript';

@Component({
  selector: 'app-r-bot',
  templateUrl: './r-bot.component.html',
  styleUrls: ['./r-bot.component.css']
})
export class RBotComponent implements OnInit {
  Physic:string="This schedule is used to go through the classes conducted in online mode";

  constructor() { }

  ngOnInit(): void {
  }

}
