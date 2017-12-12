import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../servicios/heroes.service';
import { Http } from '@angular/http';

import 'rxjs/Rx';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'

})
export class HeroeComponent implements OnInit{

  lat;
  lng;
  city: string;
  temp: number;
  temp_max: number;
  temp_min: number;
  pressure: number;
  humidity: number;
  icono: string;
  descripcion: string;


    zoom = 7;
    heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute,
                private _heroesService: HeroesService,
                private http: Http
              ) {

    this.activatedRoute.params.subscribe( params => {
      this.heroe = this._heroesService.getHeroe( params['id']);




      this.lat = this._heroesService.getLatitud(params['id']);
      this.lng = this._heroesService.getLongitud(params['id']);

      console.log(this.heroe);
      console.log(this.lat);
      console.log(this.lng);
    });
  }

    ngOnInit(){

      let url = 'http://api.openweathermap.org/data/2.5/weather?'
        + 'lat=' +  this.lat
        + '&lon=' + this.lng
        + '&units=metric'
        + '&lang=en'
        + '&appid=da76d3743fbb09a9fd137c505e616fc8';

      this.http
        .get(url)
        .map(res => res.json())
        .subscribe(weatherData => {
          console.log(weatherData);
          this.city = weatherData.name;
          this.temp = weatherData.main.temp;
          this.temp_max = weatherData.main.temp_max;
          this.temp_min = weatherData.main.temp_min;
          this.pressure = weatherData.main.pressure;
          this.humidity = weatherData.main.humidity;
          this.icono = weatherData.weather[0].icon;
          this.descripcion = weatherData.weather[0].description;
        });

    }
}
