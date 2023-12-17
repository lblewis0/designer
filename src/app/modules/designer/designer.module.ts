import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignerRoutingModule } from './designer-routing.module';
import { ColorsComponent } from './colors/colors.component';
import { SettingsComponent } from './settings/settings.component';
import { AccountComponent } from './account/account.component';


@NgModule({
  declarations: [
    ColorsComponent,
    SettingsComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    DesignerRoutingModule
  ]
})
export class DesignerModule { }
