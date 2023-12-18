import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DesignerRoutingModule } from './designer-routing.module';
import { ColorsComponent } from './colors/colors.component';
import { SettingsComponent } from './settings/settings.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    ColorsComponent,
    SettingsComponent,
    AccountComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DesignerRoutingModule
  ]
})
export class DesignerModule { }
