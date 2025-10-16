import { Routes, Router } from '@angular/router';
import { Home } from './pages/home/home';
import { LoginComponent } from './pages/login/login.component';
import { About } from './pages/about/about';
import { authGuard } from './guards/auth.guard';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';

export const routes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent,
    canActivate: [() => {
      const router = inject(Router);
      const authService = inject(AuthService);
      if (authService.isAuthenticated()) {
        return router.parseUrl('/');
      }
      return true;
    }]
  },
  { 
    path: '', 
    component: Home,
    canActivate: [authGuard]
  },
  { 
    path: 'acerca', 
    component: About,
    canActivate: [authGuard]
  },
  { 
    path: '**', 
    redirectTo: 'login',
    pathMatch: 'full' 
  }
];