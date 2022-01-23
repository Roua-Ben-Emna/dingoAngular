import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ChefService } from "src/app/services/chef.service";

@Component({
  selector: "app-dashboard-admin",
  templateUrl: "./dashboard-admin.component.html",
  styleUrls: ["./dashboard-admin.component.css"],
})
export class DashboardAdminComponent implements OnInit {
  title: any;
  users: any;
  plats: any;
  chefs:any;
// 1 creaction un instance
  constructor(private router: Router ,private chefService:ChefService) {}

  ngOnInit() {
    // moment d'ex
    this.title = "Dashboard Admin";
    this.users = JSON.parse(localStorage.getItem("users") || "[]");
    this.plats = JSON.parse(localStorage.getItem("plats") || "[]");
    // 2 et 3 
    this.chefService.getAllChef().subscribe(
      (data:any )=>{
        this.chefs=data;
      }
    );
  }

  deleteObject(id: any, key: any) {
    let pos;
    let tab = JSON.parse(localStorage.getItem(key) || "[]");
    for (let i = 0; i < tab.length; i++) {
      if (tab[i].id == id) {
        pos = i;
      }
    }
    tab.splice(pos, 1);
    localStorage.setItem(key, JSON.stringify(tab));
  
  }

  displayUser(id: any) {
    this.router.navigate([`displayUser/${id}`]);
  }
  displayPlat(id: any) {
    this.router.navigate([`displayPlat/${id}`]);
  }
  editUser(id: any, role: any) {
    if (role == "admin" || role == "client") {
      this.router.navigate([`editUser/${id}`]);
    } else {
      this.router.navigate([`editChef/${id}`]);
    }
  }
  getColor(role) {
    switch (role) {
      case "admin":
        return "green";
        break;
      case "client":
        return "blue";
        break;
      case "chef":
        return "yellow";
        break;

      default:
        break;
    }
  }
}
