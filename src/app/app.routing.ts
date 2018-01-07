import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MembersComponent } from "./members/members.component";
import { ErrorHandleComponent } from "./error-handle/error-handle.component";
export const ROUTES: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'members', component: MembersComponent
    },
    {
        path: '**', component: ErrorHandleComponent
    }
]