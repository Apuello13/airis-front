import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { SpinnerService } from './core/services/spinner.service';
import { TokenService } from './core/services/token.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    AuthModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
