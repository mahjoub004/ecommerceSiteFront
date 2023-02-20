import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitListComponent } from './components/produit-list/produit-list.component';
import { HttpClientModule } from "@angular/common/http";
import { ProduitService } from './services/produit.service';
@NgModule({
  declarations: [
    AppComponent,
    ProduitListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ProduitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
