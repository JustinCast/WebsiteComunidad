import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MembersComponent } from "./members/members.component";
import { ErrorHandleComponent } from "./error-handle/error-handle.component";
import { AdminComponent } from "./admin/admin.component";
import { LogguedInGuard } from "./auth/loggued-in.guard";
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
        path: 'admin', component: AdminComponent, canActivate: [LogguedInGuard]
    },
    {
        path: '**', component: ErrorHandleComponent
    },
]