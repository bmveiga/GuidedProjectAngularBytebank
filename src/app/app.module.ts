import { BrowserModule } from '@angular/platform-browser';
import { novaTransferenciaComponent } from './nova-transferencia.component';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ExtratoComponent } from './extrato/extrato.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    novaTransferenciaComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
