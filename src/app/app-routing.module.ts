import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { DashboardChefComponent } from './components/dashboard-chef/dashboard-chef.component';
import { DisplayPlatComponent } from './components/display-plat/display-plat.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';


const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'login',component: LoginComponent},
  {path: 'signup',component: SignupComponent},
  {path: 'addAdmin',component: AddAdminComponent},
  {path: 'addChef',component: AddChefComponent},
  {path:'dashboardAdmin',component: DashboardAdminComponent},
  {path:'dashboardChef',component: DashboardChefComponent},
  {path:'addPlat',component: AddPlatComponent},
  //Dynamic path 
  // ctr flach
  {path:'displayUser/:id',component: DisplayUserComponent},
  {path:'displayPlat/:id',component: DisplayPlatComponent},
  {path:'editUser/:id',component: AddAdminComponent},
  {path:'editChef/:id',component: AddChefComponent},
  {path:'editPlat/:id',component: AddPlatComponent},
  {path:'chefs',component:ChefsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
