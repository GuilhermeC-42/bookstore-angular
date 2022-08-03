import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { BookstoreAppComponent } from './components/shared/bookstore-app/bookstore-app.component';
import { FiltersComponent } from './components/shared/bookstore-app/filters/filters.component';
import { ProductListComponent } from './components/shared/bookstore-app/product-list/product-list.component';
import { ProductComponent } from './components/shared/bookstore-app/product-list/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './components/shared/bookstore-app/product-list/product-list.component.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    BookstoreAppComponent,
    FiltersComponent,
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
