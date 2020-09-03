import { environment } from './../environments/environment';
import { LayoutModule } from './modules/layout/layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader, MissingTranslationHandler } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FirebaseModule } from './modules/firebase/firebase.module';
import { UserIdleModule } from 'angular-user-idle';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    FirebaseModule,
    LayoutModule,
    SharedModule,
    UserIdleModule.forRoot({ idle: 3600 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
