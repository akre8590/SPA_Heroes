import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';


// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import {HeroesService} from './servicios/heroes.service';

// Componentes

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

// Google Maps
import {AgmCoreModule} from "@agm/core";

// Firebase
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';


export const firebaseConfig = {
  apiKey: "AIzaSyDFSzNsOyV6t1a2781JLYAQDJ2SNSTsXGY",
  authDomain: "firstproject-12b3e.firebaseapp.com",
  databaseURL: "https://firstproject-12b3e.firebaseio.com",
  projectId: "firstproject-12b3e",
  storageBucket: "firstproject-12b3e.appspot.com",
  messagingSenderId: "878576816948"
};


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BusquedaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    HttpModule,
    // API Google Maps
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCo5eHkeqhurDSk1LwGLQk0D2YUI8pbKhM'
    }),
    // Firebase
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
