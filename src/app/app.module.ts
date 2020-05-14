import { LogoutGuard } from './guards/logout.guard';
import { LoginGuard } from './guards/login.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import{FormsModule} from '@angular/forms';
import { FilsComponent } from './fils/fils.component';
import { ListeCVComponent } from './cvTech/liste-cv/liste-cv.component';
import { ItemCVComponent } from './cvTech/item-cv/item-cv.component';
import { DetailCVComponent } from './cvTech/detail-cv/detail-cv.component';
import { CVComponent } from './cvTech/cv/cv.component';
import { StyleComponent } from './directive/style/style.component';
import { ClassComponent } from './directive/class/class.component';
import { HighlightDirective } from './directive/highlight.directive';
import { RainbowDirective } from './directive/rainbow.directive';
import { DefaultPipe } from './cvTech/defaultimage.pipe';
import { EmbaucheComponent } from './cvTech/embauche/embauche.component';
import { HeaderComponent } from './header/header.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';
import { DetailComponent } from './detail/detail.component';
import { AddCvComponent } from './cvTech/add-cv/add-cv.component';
import { DeleteCvComponent } from './cvTech/delete-cv/delete-cv.component';
import { ErrorComponent } from './cvTech/error/error.component';
import { LoginComponent } from './login/login.component';
import { ObservableComponent } from './observable/observable.component';
import { HttpComponent } from './http/http.component'
import { HttpClientModule } from '@angular/common/http';
import { LoginInterceptorProvider } from './interceptors/login.interceptor';
import { SearchComponent } from './cvTech/search/search.component';
import { UpdateCvComponent } from './cvTech/update-cv/update-cv.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    FilsComponent,
    ListeCVComponent,
    ItemCVComponent,
    DetailCVComponent,
    CVComponent,
    StyleComponent,
    ClassComponent,
    HighlightDirective,
    RainbowDirective,
    DefaultPipe,
    EmbaucheComponent,
    HeaderComponent,
    RouterSimulatorComponent,
    DetailComponent,
    AddCvComponent,
    DeleteCvComponent,
    ErrorComponent,
    LoginComponent,
    ObservableComponent,
    HttpComponent,
    SearchComponent,
    UpdateCvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LoginInterceptorProvider,
    LoginGuard,
    LogoutGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
