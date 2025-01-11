import { AboutComponent } from './Component/about/about.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { PortfoiloComponent } from './Component/portfoilo/portfoilo.component';
import { ContactComponent } from './Component/contact/contact.component';
import { NotfoundComponent } from './Component/notfound/notfound.component';

export const routes: Routes = [
    {path:"",redirectTo:'about',pathMatch:'full'},
    {path:'about', component:AboutComponent,title:'about'},
    {path:'portfolio', component:PortfoiloComponent,title:'portfolio'},
    {path:'contact' , component:ContactComponent,title:'contact'},
    {path:'**',component:NotfoundComponent,title:'NotFound'}
];
