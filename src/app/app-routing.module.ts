import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  {
    path:'',
    component: PagesModule
  },
  {
    path: 'pages',
    loadChildren: ()=>import('./pages/pages.module').then((m)=>m.PagesModule)
  },
  {
    path: 'auth',
    loadChildren:()=>import('./auth/auth.module').then((m)=>m.AuthModule)

  },
  {
    path:'**',
    component:PagesModule
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
