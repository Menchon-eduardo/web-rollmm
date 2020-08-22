import { ModuleWithProviders } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { InicioComponent } from "./components/inicio";

const appRoutes: Router = [
    { path: '', component: InicioComponent }
];

export const appRoutingProviders : any[] =[];
export const routing: ModuleWhithProviders = RouterModule.forRoot(appRoutes);