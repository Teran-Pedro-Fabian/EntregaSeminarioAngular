import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeccionClasesComponent } from './seccion-clases/seccion-clases.component';
import { InfoGymComponent } from './info-gym/info-gym.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'clases',
    pathMatch: 'full'
  },
  {
    path: 'clases',
    component: SeccionClasesComponent
  },
  {
    path: 'info',
    component: InfoGymComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
