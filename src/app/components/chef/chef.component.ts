import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {

  //declaraction de la variable @input 
  @Input() childChef : any;
  @Output() newChefs = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  delete(id: any) {
    let pos;
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    for (let i = 0; i < users.length; i++) {
      if (users[i].id == id) {
        pos = i;
      }
    }
    users.splice(pos, 1);
    localStorage.setItem("users", JSON.stringify(users));
    this.newChefs.emit(users);
  
  }

}
