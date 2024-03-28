import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeaListComponent } from './tea-list/tea-list.component';
import { TeaDetailComponent } from './tea-detail/tea-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { guardGuard } from '../guards/guard.guard';


const routes: Routes = [
  {
    path: 'tea-list',
    component: TeaListComponent,
    canActivate:[guardGuard]
    
  },
  {
    path:'tea-detail/:id',
    component:TeaDetailComponent,
    canActivate:[guardGuard]

  },
  {
    path:'**',
    component:TeaListComponent
  }
]
@NgModule({
  declarations: [
    TeaListComponent,
    TeaDetailComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    TeaListComponent,
    TeaDetailComponent
  ]
})
export class PagesModule { }
