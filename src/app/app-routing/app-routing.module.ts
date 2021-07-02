import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { CorporateUserComponent } from '../corporate-user/corporate-user.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';



const routes: Routes = [ 

    { path:'login', component:LoginComponent},
  
  
    {
        path: 'accordianDashboard',
        component: DashboardComponent,
    },

     
    {
        path: 'corporateUser',
        component: CorporateUserComponent,
    },

    
    
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: '**', redirectTo: 'login' }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }