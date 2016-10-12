import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { RecipesComponent } from './recipes/recipes.component';
import {ItemsService} from "./services/items.service";
import {RecipesService} from "./services/recipes.service";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InventoryComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    routing
  ],
  providers: [ItemsService, RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
