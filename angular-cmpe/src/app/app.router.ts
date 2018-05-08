import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component'; 
import { AboutComponent } from './about/about.component'; 
import { HomeComponent } from './home/home.component'; 
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component'; 
import { HomeMainComponent } from './home-main/home-main.component'; 
import { AdminComponent } from './admin/admin.component';


export const router: Routes = [ 
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent }, 
	{ path: 'about', component: AboutComponent },    
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'main', component: HomeMainComponent },
    { path: 'admin', component: AdminComponent }  
]; 
export const routes: ModuleWithProviders = RouterModule.forRoot(router);