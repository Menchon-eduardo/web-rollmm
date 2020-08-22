import { ModuleWithProviders } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { InicioComponent } from "./components/inicio/inicio.component";

const appRoutes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'inicio', component: InicioComponent }
];

export const appRoutingProviders : any[] =[];
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);