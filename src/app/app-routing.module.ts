import { UpdateComponent1Component } from './componenet1/update-component1/update-component1.component';
import { AddComponent1Component } from './componenet1/add-component1/add-component1.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Componenet1Component } from './componenet1/componenet1.component';
import { Componenet2Component } from './componenet2/componenet2.component';
import { Componenet3Component } from './componenet3/componenet3.component';
import { ListComponent1Component } from './componenet1/list-component1/list-component1.component';
import { ListComponent2Component } from './componenet2/list-component2/list-component2.component';
import { AddComponent2Component } from './componenet2/add-component2/add-component2.component';
import { UpdateComponent2Component } from './componenet2/update-component2/update-component2.component';
const routes: Routes = [
  { path: '', redirectTo: '/first', pathMatch: 'full' },
  {
    path: 'first', component: Componenet1Component, children: [
      { path: '', component: ListComponent1Component , pathMatch:'full'},
      { path: 'add', component: AddComponent1Component },
      { path: 'update', component: UpdateComponent1Component },

    ]
  },

  {
    path: 'second', component: Componenet2Component,children: [
      { path: '', component: ListComponent2Component, pathMatch: 'full' },
      { path: 'add', component: AddComponent2Component },
      { path: 'update', component: UpdateComponent2Component },]
    },
  
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
