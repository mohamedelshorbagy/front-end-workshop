import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
/**
 * 
 * @Components
 * 
 */
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { MemberComponent } from './components/member/member.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { AuthGuardService } from './services/auth/guards/auth-guard.service';


/**
 * 
 * Routes
 * 
 */

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home', component: HomeComponent, canActivate: [AuthGuardService], children: [
            { path: '', redirectTo: 'get-started', pathMatch: 'full' },
            { path: 'get-started', component: GetStartedComponent },
            { path: 'member', component: MemberComponent },
        ]
    },
    { path: 'about', component: AboutComponent, canActivate: [AuthGuardService] },
    { path: 'contact-me', component: ContactComponent, canActivate: [AuthGuardService] },
    { path: 'not-found', component: NotFoundComponent },
    { path: 'login', component: CreateUserComponent },
    { path: '**', redirectTo: 'not-found' }
];




/**
 * 
 * 
 * Router Module COnfiguration
 * 
 */

export const router: ModuleWithProviders = RouterModule.forRoot(routes);












