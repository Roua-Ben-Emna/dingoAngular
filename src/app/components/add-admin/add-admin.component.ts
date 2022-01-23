import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-add-admin",
  templateUrl: "./add-admin.component.html",
  styleUrls: ["./add-admin.component.css"],
})
export class AddAdminComponent implements OnInit {
  // declaration des variables globales
  title: string; //any : any type
  image: any;
  // 1 ere etape form
  user: any = {};
  // 2 eme etape
  addAdminForm: FormGroup;
  // 3 eme etape
  id: any;
  users: any;
  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.users = JSON.parse(localStorage.getItem("users") || "[]"); // nrodhom tab d'objet
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.title = "Edit User";
      //recuperation des anciennes valeurs
      for (let i = 0; i < this.users.length; i++) {
        if (this.id == this.users[i].id) {
          this.user = this.users[i];
        }
      }
    } else {
      this.title = "Add Admin";
    }

    // this.image="assets/img/logo.png";
    // 4 eme etape
    this.addAdminForm = this.fb.group({
      firstName: [""], //creation et init les inputs en vide
      lastName: [""],
      email: [""],
      tel: [""],
      password: [""],
    });
  }

  // declaration d'une fonction
  // clickMe() {
  //   alert("test" );
  // }
  // 5 eme etape

  addOrEditAdmin() {
    if (this.id) {
      //edit
      for (let i = 0; i < this.users.length; i++) {
        if (this.id == this.users[i].id) {
          this.users[i] = this.user;
        }
      }
      localStorage.setItem("users", JSON.stringify(this.users));
      console.log("my object", this.user);
    } else {
      //add
      console.log("my object", this.user); // pour tester les donneés transférer dans le ts
      //usage de la BD de nav
      let idUser = JSON.parse(localStorage.getItem("idUser") || "1");
      this.user.id = idUser;
      this.user.role = "admin"; // ajouter le role att dons localStorage
      // add obj
      this.users.push(this.user);
      localStorage.setItem("users", JSON.stringify(this.users)); // nrodhom chaine
      localStorage.setItem("idUser", idUser + 1);
    }

    this.router.navigate(["dashboardAdmin"]);
  }
}
