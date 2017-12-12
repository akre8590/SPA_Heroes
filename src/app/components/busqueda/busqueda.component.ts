import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../servicios/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  heroes: any [] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute,
              private _heroeService: HeroesService,
              private router: Router
              ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      // console.log( params['termino'] );
      this.termino = params['termino'];
      this.heroes = this._heroeService.buscarHeroes(params['termino']);
      console.log( this.heroes );
    });
  }

  verHeroe( idx: number ) {
    this.router.navigate( ['/heroe', idx] );
  }
}
