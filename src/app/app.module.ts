import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DolarComponent } from './componentes/dolar/dolar.component';
import { DolarService } from './service/dolar.service';

@NgModule({
  declarations: [
    AppComponent,
    DolarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DolarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
