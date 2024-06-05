import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { OnlineorderComponent } from './onlineorder/onlineorder.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"menu",component:MenuComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"onlineorder",component:OnlineorderComponent},
  {path:"contactus",component:ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
