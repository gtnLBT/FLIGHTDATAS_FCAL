import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserGuard } from './_guard/user.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component'
import { UserOperationsComponent } from './user-operations/user-operations.component';
import { ComparatorComponent } from './comparator/comparator.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'users', component: UserListComponent, canActivate:[UserGuard]},
  {path: 'create-user', component: CreateUserComponent},
  {path: 'update-user/:user_id', component: UpdateUserComponent},
  {path: 'user-details/:user_id', component: UserDetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forbidden', component: ForbiddenComponent},
  {path: 'user-operations', component: UserOperationsComponent},
  {path: 'comparator', component: ComparatorComponent},
  {path: '', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
