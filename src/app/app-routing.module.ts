import { CreateUserComponent } from './create-user/create-user.component';
import { UserComponent } from './user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

const routes: Routes = [
    { path: '', redirectTo: '/userComponent', pathMatch: 'full' },
    { path: 'appComponent', component: AppComponent },
    { path: 'userComponent', component: UserComponent },
    { path: 'createUserComponent', component: CreateUserComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
