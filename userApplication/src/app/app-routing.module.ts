import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomepageviewComponent } from './homepage/homepageview/homepageview.component';
import { SportsPageComponent } from './sports-page/sports-page.component';

const routes: Routes = [
{
  path:"homepage",
  component:HomepageviewComponent
},
{
  path:"sports",
  component:SportsPageComponent
},
{
  path:"contact",
  component:ContactUsComponent
},
{
  path:"**",
  redirectTo:"homepage"
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
