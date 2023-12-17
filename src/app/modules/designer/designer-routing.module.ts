import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComponentsComponent } from './components/components.component';
import { ColorsComponent } from './colors/colors.component';
import { AccountComponent } from './account/account.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {path: "home", component:HomeComponent},
  {path: "components", component:ComponentsComponent},
  {path: "colors", component:ColorsComponent},
  {path: "account", component:AccountComponent},
  {path: "settings", component:SettingsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignerRoutingModule { }
