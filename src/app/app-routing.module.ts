import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImgindivComponent } from './imgindiv/imgindiv.component';
import { HomeComponent } from './home/home.component';
import { ButterflyComponent } from './butterfly/butterfly.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pixlimg/:id', component: ImgindivComponent },
  // { path: 'btrfl/:id', component: ButterflyComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
