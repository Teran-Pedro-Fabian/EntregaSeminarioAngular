import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GymClassComponent } from './gym-class/gym-class.component';

import { FormsModule } from '@angular/forms';
import { SeccionClasesComponent } from './seccion-clases/seccion-clases.component';
import { ReservasComponent } from './reservas/reservas.component';
import { InfoGymComponent } from './info-gym/info-gym.component';
import { InputNumberComponent } from './input-number/input-number.component';


@NgModule({
  declarations: [
    AppComponent,
    GymClassComponent,
    SeccionClasesComponent,
    ReservasComponent,
    InfoGymComponent,
    InputNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
