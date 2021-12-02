import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  lengthdesks = []

  ngOnInit() {
    this.multiplyDesk()
  }

  multiplyDesk(){
    for(let i=0; i <= 3; i++){
      this.lengthdesks.push(i)
    }
  }

}
