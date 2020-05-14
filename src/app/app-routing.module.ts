import { UpdateCvComponent } from './cvTech/update-cv/update-cv.component';
import { LogoutGuard } from './guards/logout.guard';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './cvTech/error/error.component';
import { DetailCVComponent } from './cvTech/detail-cv/detail-cv.component';
import { AddCvComponent } from './cvTech/add-cv/add-cv.component';
import { DeleteCvComponent } from './cvTech/delete-cv/delete-cv.component';
import { DetailComponent } from './detail/detail.component';
import { ColorComponent } from './color/color.component';
import { CVComponent } from './cvTech/cv/cv.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';


const routes: Routes = [
  {path:'cv', children:[
    {path:'',component : CVComponent},
    {path:'updateCv/:id',component : UpdateCvComponent},
    {path:'delete/:id',component : DeleteCvComponent,canActivate: [LoginGuard]},
    {path:'add',component : AddCvComponent,canActivate: [LoginGuard]},
    {path:':id',component : DetailComponent},

  ]},
  {path:'',component : CVComponent},
  {path:'color/:default',component : ColorComponent},
  {path:'login',component : LoginComponent,canActivate:[LogoutGuard]},
  {path:'**',component : ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
