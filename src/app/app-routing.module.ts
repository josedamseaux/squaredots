import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImgindivComponent } from './imgindiv/imgindiv.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pixlimg/:id', component: ImgindivComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
