import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginPageComponent } from './admin/adminLogin/admin-login-page/admin-login-page.component';
import { RegisterPageComponent } from './admin/adminLogin/admin-register-page/register-page/register-page.component';
import { EditNewsComponent } from './admin/edit-news/edit-news.component';
import { ViewNewsComponent } from './admin/view-news/view-news.component';

const routes: Routes = [
  {
    path:"login",
    component: AdminLoginPageComponent
  },
  {
    path:"register",
    component: RegisterPageComponent
  },
  {
    path:"view-news",
    component: ViewNewsComponent
  },
  {
    path:"edit-news",
    component: EditNewsComponent
  },
  {
    path:"**",
    redirectTo:"login"
  }

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
