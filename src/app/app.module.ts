import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { RecepiesComponent } from './recepies/recepies.component';
import {ItemsService} from "./services/items.service";
import {RecepiesService} from "./services/recepies.service";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InventoryComponent,
    RecepiesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    routing
  ],
  providers: [ItemsService, RecepiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
