import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-dashboard-chef',
  templateUrl: './dashboard-chef.component.html',
  styleUrls: ['./dashboard-chef.component.css']
})
export class DashboardChefComponent implements OnInit {
plats:any;
chef:any;
myPlats:any=[];
  constructor(private router: Router,private platService:PlatService) { }

  ngOnInit() {
this.getAllPlat();
    // this.plats = JSON.parse(localStorage.getItem("plats")|| "[]");
    // this.chef = JSON.parse(localStorage.getItem("connectedUser")|| "[]");
    // for (let i = 0; i < this.plats.length; i++) {
    //   if (this.plats[i].idChef== this.chef.id) {
    //     this.myPlats.push(this.plats[i]);
    //   }
    // }
    console.log("my Plats :", this.myPlats)
  }
  deleteObject(id: any, key: any) {
    this.platService.deletePlat(id).subscribe(()=>{
    console.log("plat deleted successfully");
    this.getAllPlat();
})
    // let pos;
    // let tab = JSON.parse(localStorage.getItem(key) || "[]");
    // for (let i = 0; i < tab.length; i++) {
    //   if (tab[i].id == id) {
    //     pos = i;
    //   }
      
    // }
    // tab.splice(pos, 1);
    // localStorage.setItem(key, JSON.stringify(tab));
    // this.router.navigate(['dashboardChef']);
  }

  getAllPlat(){
    this.platService.getAllPlat().subscribe((data:any)=> {
      this.myPlats=data;
      console.log("get all successfully");
    })
  }

  editPlat(id: any) {
      this.router.navigate([`editPlat/${id}`]);
  }
  displayPlat(id: any) {
    this.router.navigate([`displayPlat/${id}`]);
   }
}
