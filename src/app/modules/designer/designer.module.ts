import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DesignerRoutingModule } from './designer-routing.module';
import { ColorsComponent } from './colors/colors.component';
import { SettingsComponent } from './settings/settings.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { EditorLineComponent } from './test/editor-line/editor-line.component';
import { MainLineComponent } from './test/editor-line/main-line/main-line.component';
import { ContentComponent } from './test/editor-line/content/content.component';
import { AddSiblingsComponent } from './test/editor-line/add-siblings/add-siblings.component';
import { AddChildsComponent } from './test/editor-line/add-childs/add-childs.component';


@NgModule({
  declarations: [
    ColorsComponent,
    SettingsComponent,
    AccountComponent,
    HomeComponent,
    TestComponent,
    EditorLineComponent,
    MainLineComponent,
    ContentComponent,
    AddSiblingsComponent,
    AddChildsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DesignerRoutingModule
  ]
})
export class DesignerModule { }
