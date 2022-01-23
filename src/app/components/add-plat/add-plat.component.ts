import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { PlatService } from "src/app/services/plat.service";

@Component({
  selector: "app-add-plat",
  templateUrl: "./add-plat.component.html",
  styleUrls: ["./add-plat.component.css"],
})
export class AddPlatComponent implements OnInit {
  title: any;
  addPlatForm:FormGroup;
  id: any;
  plats: any;
  findedPlat:any ={};
  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router :Router,
    private platService:PlatService
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if(this.id){
      this.title="edit";
      
      this.platService.getPlatById(this.id).subscribe((data)=>{
        this.findedPlat=data;
       console.log("get by id successfully");
       console.log(this.findedPlat);
      });
    }else{this.title="add"}
    this.addPlatForm = this.fb.group({
           name: ["", [Validators.required]],
           price: ["", [Validators.required]],
           description: ["", [Validators.required]],
         });
  }

addOrEditPlat(f:any){
  console.log(f);
  this.id = this.activatedRoute.snapshot.paramMap.get("id");
   if (this.id) {
     this.platService.editPlat(this.findedPlat).subscribe( ()=>{
       console.log("plat edited successfully");})
       this.router.navigate(['dashboardChef']);
     
   } else {
     this.platService.addPlat(f).subscribe( ()=>{
      console.log("plat added successfully");})
      this.router.navigate(['dashboardChef']);
   }

  }
}

// local storage
  //   this.id = this.activatedRoute.snapshot.paramMap.get("id");
  //   this.plats = JSON.parse(localStorage.getItem("plats") || "[]");
  //   if (this.id) {
  //     this.title = "Edit Plat";
  //     //recuperation des anciennes valeurs
  //     for (let i = 0; i < this.plats.length; i++) {
  //       if (this.id == this.plats[i].id) {
  //         this.findedPlat=this.plats[i];
  //       }
  //     }
  //     console.log("findedPlat",this.findedPlat);
  //   } else {
  //     this.title = "Add Plat";
  //   }
  //   this.addPlatForm = this.fb.group({
  //     name: ["", [Validators.required]],
  //     price: ["", [Validators.required]],
  //     description: ["", [Validators.required]],
  //   });
    
  // }
  // addOrEditPlat(f:any) {
  //   if (this.id) {
  //     //edit
  //     for (let i = 0; i < this.plats.length; i++) {
  //       if (this.id == this.plats[i].id) {
  //         this.plats[i]=this.findedPlat;
  //       }
  //     }
  //     localStorage.setItem("plats", JSON.stringify(this.plats));
  //     console.log("my object",this.findedPlat);
  //   } else {
  //     console.log("my object",f);
  //     let idPlat = JSON.parse(localStorage.getItem("idPlat") || "1");
  //     let chef = JSON.parse(localStorage.getItem("connectedUser"));
  //     let id = chef.id;
  //     f.id = idPlat;
  //     f.idChef = id;
  //     this.plats.push(f);
  //     localStorage.setItem("plats", JSON.stringify(this.plats));
  //     localStorage.setItem("idPlat", idPlat + 1);
  //   }
  //   this.router.navigate(['dashboardChef']);