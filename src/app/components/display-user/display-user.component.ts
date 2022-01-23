import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {
  id :any;
  users:any;
  user:any;
  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    console.log("my id",this.id);
    this.users=JSON.parse(localStorage.getItem("users")||"[]");
    for (let i = 0; i < this.users.length; i++) {
       if (this.users[i].id==this.id) {
         this.user=this.users[i];
         
       }
      
    }
    console.log("my user",this.user);
  }

}
