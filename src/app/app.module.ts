import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { RouterOutletComponent } from './navigation/router-outlet/router-outlet.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DesignerModule } from './modules/designer/designer.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    RouterOutletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    DesignerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
