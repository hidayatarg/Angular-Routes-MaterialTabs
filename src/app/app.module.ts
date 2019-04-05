import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';




import { AppComponent } from './app.component';
import { Componenet1Component } from './componenet1/componenet1.component';
import { Componenet2Component } from './componenet2/componenet2.component';
import { Componenet3Component } from './componenet3/componenet3.component';
import { AppRoutingModule } from './app-routing.module';
import { ListComponent1Component } from './componenet1/list-component1/list-component1.component';
import { AddComponent1Component } from './componenet1/add-component1/add-component1.component';
import { UpdateComponent1Component } from './componenet1/update-component1/update-component1.component';
import { AddComponent2Component } from './componenet2/add-component2/add-component2.component';
import { ListComponent2Component } from './componenet2/list-component2/list-component2.component';
import { UpdateComponent2Component } from './componenet2/update-component2/update-component2.component';

@NgModule({
  declarations: [
    AppComponent,
    Componenet1Component,
    Componenet2Component,
    Componenet3Component,
    ListComponent1Component,
    AddComponent1Component,
    UpdateComponent1Component,
    AddComponent2Component,
    ListComponent2Component,
    UpdateComponent2Component
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatTabsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
