import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseUrlInterceptor } from './core/interceptors/base-url.interceptor';
//import { PokemonListComponent } from './modules/pokemon/pages/pokemon-list/pokemon-list.component';
//import { PokemonComponent } from './pokemon/pokemon.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TooltipModule} from 'ngx-bootstrap/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    //PokemonListComponent,
    //PokemonComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot()
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true},
    {provide: 'BASE_URL_API', useValue: environment.apiUrl} 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
