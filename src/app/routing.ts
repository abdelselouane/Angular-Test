import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
    { path:  '', redirectTo:  'users', pathMatch:  'full' },
    {
        path:  'users',
        component: UsersListComponent
    },
    {
        path: 'adduser',
        component: UserFormComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }