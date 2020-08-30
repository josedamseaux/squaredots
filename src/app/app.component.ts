import { Component, Input } from '@angular/core';
import { PixelserviceService } from './servicio/pixelservice.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  constructor(private pixelService: PixelserviceService,
              // tslint:disable-next-line: variable-name
              private _router: Router){}

  title = 'lorenzo';
  titulos: any[];

  @Input()m: number;

  // tslint:disable-next-line: use-lifecycle-interface
    ngOnInit(){
      this.titulos = this.pixelService.getTitulos();
    }

    verTitulo(m: number){
      console.log (m);
      this._router.navigate( ['/titulo', m] );
  }
}
