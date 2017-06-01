import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/SignUp',
        pathMatch: 'full'
    }, {
        path: 'home',
        component: HomeComponent
    }, {
        path: 'SignUp',
        component: SignUpComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
