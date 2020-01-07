import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { WarningComponent } from './warningalert/warning.component';
import { SuccessalertComponent } from './successalert/successalert.component';
import { FormsModule } from '@angular/forms';
/*
Ng Module is also a decorator in which we can specify
bootstrap --- It tells which componet you need to be aware of at time of starting an app
declarations --- Which components to include 
*/
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    WarningComponent,
    SuccessalertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
