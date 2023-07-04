import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './Component/blank/blank.component';
import { HomepageComponent } from './Component/homepage/homepage.component';
const routes: Routes = [
  {path:'',component:BlankComponent},
  {path:'home',component:HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
