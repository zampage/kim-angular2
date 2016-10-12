import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {InventoryComponent} from "./inventory/inventory.component";
import {RecipesComponent} from "./recipes/recipes.component";

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
    path: 'recipes',
    component: RecipesComponent
  }
];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
