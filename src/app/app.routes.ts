import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {InventoryComponent} from "./inventory/inventory.component";
import {RecepiesComponent} from "./recepies/recepies.component";

const appRoutes : Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'inventory',
    component: InventoryComponent
  },
  {
    path: 'recepies',
    component: RecepiesComponent
  }
];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
