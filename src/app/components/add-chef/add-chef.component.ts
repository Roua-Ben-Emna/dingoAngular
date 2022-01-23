import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-add-chef",
  templateUrl: "./add-chef.component.html",
  styleUrls: ["./add-chef.component.css"],
})
export class AddChefComponent implements OnInit {
  title: string;
  user: any = {};
  users: any;
  addChefForm: FormGroup;
  id: any;
  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.users = JSON.parse(localStorage.getItem("users") || "[]"); // nrodhom tab d'objet
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.title = "Edit Chef";
      //recuperation des anciennes valeurs
      for (let i = 0; i < this.users.length; i++) {
        if (this.id == this.users[i].id) {
          this.user = this.users[i];
        }
      }
    } else {
      this.title = "Add Chef";
    }

    this.addChefForm = this.fb.group({
      firstName: [""],
      lastName: [""],
      email: [""],
      tel: [""],
      password: [""],
      speciality: [""],
      experience: [""],
      dateBirth: [""],
    });
  }
  addOrEditChef() {
    if (this.id) {
      for (let i = 0; i < this.users.length; i++) {
        if (this.id == this.users[i].id) {
          this.users[i] = this.user;
        }
      }
      localStorage.setItem("users", JSON.stringify(this.users));
      console.log("my object", this.user);
    } else {
      console.log("my object", this.user);
      let idUser = JSON.parse(localStorage.getItem("idUser") || "1");
      this.user.id = idUser;
      this.user.role = "chef"; // ajouter le role att dons localStorage
      this.users.push(this.user);
      localStorage.setItem("users", JSON.stringify(this.users));
      localStorage.setItem("idUser", idUser + 1);
    }
    this.router.navigate(['dashboardAdmin']);
  }
}
