import { UpdateComponent1Component } from './componenet1/update-component1/update-component1.component';
import { AddComponent1Component } from './componenet1/add-component1/add-component1.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Componenet1Component } from './componenet1/componenet1.component';
import { Componenet2Component } from './componenet2/componenet2.component';
import { Componenet3Component } from './componenet3/componenet3.component';
import { ListComponent1Component } from './componenet1/list-component1/list-component1.component';
const routes: Routes = [
  { path: '', redirectTo: '/first', pathMatch: 'full' },
  {
    path: 'first', component: Componenet1Component, children: [
      { path: '', component: ListComponent1Component , pathMatch:'full'},
      { path: 'add', component: AddComponent1Component },
      { path: 'update', component: UpdateComponent1Component },

    ]
  },
  { path: 'second', component:  Componenet2Component},
  { path: 'third', component: Componenet3Component},

];

export const appRouting = RouterModule.forRoot(routes);

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
