import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component'; 
import { AboutComponent } from './about/about.component'; 
import { HomeComponent } from './home/home.component'; 
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component'; 

export const router: Routes = [ 
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent }, 
	{ path: 'about', component: AboutComponent },    
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent } 
]; 
export const routes: ModuleWithProviders = RouterModule.forRoot(router);