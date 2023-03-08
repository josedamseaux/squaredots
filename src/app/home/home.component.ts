import { Component, OnInit, Input } from '@angular/core';
import { Pixel, PixelserviceService } from '../servicio/pixelservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private pixelService: PixelserviceService,
              private _router: Router){}

titulos: any[];
titulosFiltrados: any[];

@Input()i: number;

ngOnInit(){
  this.titulos = this.pixelService.getTitulos();
  this.titulosFiltrados = this.pixelService.getTitulos();
}

verTitulo(i: number){
  this._router.navigate( ['/pixlimg', i] );
  }

  filtrar(e: any){
    console.log(e.target.value)
    let search = e.target.value
    this.titulos = this.titulosFiltrados.filter(({nombre}: Pixel)=>{
      return nombre.toLowerCase().includes(search.toLowerCase())
    })
  }

}
