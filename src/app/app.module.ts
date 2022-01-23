import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { PopularDishesComponent } from './components/popular-dishes/popular-dishes.component';
import { HistoryComponent } from './components/history/history.component';
import { VideoComponent } from './components/video/video.component';
import { PopularMenuComponent } from './components/popular-menu/popular-menu.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { BlogComponent } from './components/blog/blog.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { DashboardChefComponent } from './components/dashboard-chef/dashboard-chef.component';
import { DisplayPlatComponent } from './components/display-plat/display-plat.component';
import { ChefComponent } from './components/chef/chef.component';
import { ReservePipe } from './pipes/reserve.pipe';
import {HttpClientModule} from "@angular/common/http"

@NgModule({
  declarations: [
    AppComponent,
   
    HeaderComponent,
   
    BannerComponent,
   
    PopularDishesComponent,
   
    HistoryComponent,
   
    VideoComponent,
   
    PopularMenuComponent,
   
    ChefsComponent,
   
    ReservationComponent,
   
    TestimonialsComponent,
   
    BlogComponent,
   
    FooterComponent,
   
    HomeComponent,
   
    SignupComponent,
   
    LoginComponent,
   
    AddAdminComponent,
   
    AddChefComponent,
   
    DashboardAdminComponent,
   
    AddPlatComponent,
   
    DisplayUserComponent,
   
    DashboardChefComponent,
   
    DisplayPlatComponent,
   
    ChefComponent,
   
    ReservePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
