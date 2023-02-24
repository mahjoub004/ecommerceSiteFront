import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitListComponent } from './components/produit-list/produit-list.component';
import { HttpClientModule } from "@angular/common/http";
import { ProduitService } from './services/produit.service';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FeaturesSectionComponent } from './components/features-section/features-section.component';
import { SliderComponent } from './components/slider/slider.component';
@NgModule({
  declarations: [
    AppComponent,
    ProduitListComponent,
    FooterComponent,
    NavBarComponent,
    FeaturesSectionComponent,
    SliderComponent
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
