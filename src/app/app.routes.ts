import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'buttons',
    loadComponent: () => import('./buttons/buttons.page').then( m => m.ButtonsPage)
  },
  {
    path: 'cards',
    loadComponent: () => import('./cards/cards.page').then( m => m.CardsPage)
  },
  {
    path: 'lists',
    loadComponent: () => import('./lists/lists.page').then( m => m.ListsPage)
  },
  {
    path: 'settings',
    loadComponent: () => import('./settings/settings.page').then( m => m.SettingsPage)
  },
  {
    path: 'grids',
    loadComponent: () => import('./grids/grids.page').then( m => m.GridsPage)
  },
  {
    path: 'product',
    loadComponent: () => import('./product/product.page').then( m => m.ProductPage)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.page').then( m => m.DashboardPage)
  },
  {
    path: 'form',
    loadComponent: () => import('./form/form.page').then( m => m.FormPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then( m => m.TabsPage)
  },
  {
    path: 'menu',
    loadComponent: () => import('./menu/menu.page').then( m => m.MenuPage)
  },
  {
    path: 'segment',
    loadComponent: () => import('./segment/segment.page').then( m => m.SegmentPage)
  },
  {
    path: 'fab',
    loadComponent: () => import('./fab/fab.page').then( m => m.FabPage)
  },
  {
    path: 'toolbar',
    loadComponent: () => import('./toolbar/toolbar.page').then( m => m.ToolbarPage)
  },
];
