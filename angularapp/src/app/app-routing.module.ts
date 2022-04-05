import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  { 
    component:LoginComponent,
    path:'login',
    
  },
  { 
    component:SignUpComponent,
    path:'sign-up',
    // children:[
    //   { path: 'login',  component:LoginComponent}
    // ]
  },
  { 
    component:HomeComponent,
    path:'home'
  },
  // { 
  //   component:xPageComponent,
  //   path:'**'
  // }
  { path: '',   redirectTo: '/', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
