import { Routes } from '@angular/router';
import { MainPageComponent } from '../Components/main-page/main-page.component';
import { SignInComponent } from '../Components/sign-in/sign-in.component';
import { SignUpComponent } from '../Components/sign-up/sign-up.component';
import { ResetPaswwordComponent } from '../Components/reset-paswword/reset-paswword.component';
import { AgentsPageComponent } from '../Components/agents-page/agents-page.component';
import { TestapiComponent } from '../Components/testapi/testapi.component';
import { PatientsComponent } from '../Components/patients/patients.component';
import { ProfileComponent } from '../Components/profile/profile.component';
import { SettingsComponent } from '../Components/settings/settings.component';
import { AdminComponent } from '../Components/admin/admin.component';
import { SearchComponent } from '../Components/search/search.component';
import { NavbarComponent } from '../Components/navbar/navbar.component';
import { AgentdetailsComponent } from '../Components/agentdetails/agentdetails.component';
import { UsersTachesComponent } from '../Components/users-taches/users-taches.component';
import { AllTachesComponent } from './all-taches/all-taches.component';

export const routes: Routes = [
    {path:"acceuil",component:MainPageComponent,},
    {path:"signin",component:SignInComponent},
    {path:"signup",component:SignUpComponent},
    {path:"forgetpassword",component:ResetPaswwordComponent},
    {path:"agents",component:AgentsPageComponent},
    {path:"agents/:searchterm",component:AgentsPageComponent},
    {path:"agent",component:AgentdetailsComponent},
    //{path:"users",component:PatientsComponent},
    //{path:"users/:searchterm",component:PatientsComponent},
    {path:"profile",component:ProfileComponent},
    {path:"taches",component:UsersTachesComponent},

    {
        path:"admin",
        component:AdminComponent,
        children: [

            { path: "users", component: PatientsComponent }, 
            {path:"users/:searchterm",component:PatientsComponent},
            { path: "agents", component: AgentsPageComponent }, 
            {path:"agents/:searchterm",component:AgentsPageComponent},
            {path:"taches",component:AllTachesComponent},

            // Add more admin routes as needed
          ]
    },

    {path:"",redirectTo:"/acceuil",pathMatch:'full'},

]; 
