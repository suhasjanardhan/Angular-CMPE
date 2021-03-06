import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';
//import { HttpClientModule } from '@angular/common/http';
// import { ModalModule } from 'ngx-modialog';
// import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { DetailsComponent } from './details/details.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AnalyticsComponent } from './analytics/analytics.component';
import { AdminComponent } from './admin/admin.component';
import { UserlistComponent } from './userlist/userlist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    SignupComponent,
    HomeMainComponent,
    DetailsComponent,
    AnalyticsComponent,
    AdminComponent,
    UserlistComponent
  ],
  imports: [
    // ModalModule.forRoot(),
    // BootstrapModalModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    ChartsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
