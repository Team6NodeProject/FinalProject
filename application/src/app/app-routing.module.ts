import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginPageComponent } from './admin/adminLogin/admin-login-page/admin-login-page.component';
import { RegisterPageComponent } from './admin/adminLogin/admin-register-page/register-page/register-page.component';

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
    path:"**",
    redirectTo:"login"
  }

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
