import { AnimationPlayer } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-display-plat',
  templateUrl: './display-plat.component.html',
  styleUrls: ['./display-plat.component.css']
})
export class DisplayPlatComponent implements OnInit {
plats:any;
plat:AnimationPlayer;
id:any;
  constructor(private activatedRoute : ActivatedRoute,private platService:PlatService) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.platService.getPlatById(this.id).subscribe((data)=>{
      this.plats=data;
     console.log("get by id successfully");
     console.log(this.plat);
    });
    // this.id=this.activatedRoute.snapshot.paramMap.get('id');
    // console.log("my id",this.id);
    // this.plats=JSON.parse(localStorage.getItem("plats")||"[]");
    // for (let i = 0; i < this.plats.length; i++) {
    //    if (this.plats[i].id==this.id) {
    //     this.plat=this.plats[i];
     
         
    //    }
      
    // }
    // console.log("my plat",this.plat);
  }
  }


