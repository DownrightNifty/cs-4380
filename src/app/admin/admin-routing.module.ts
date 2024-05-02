import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from './admin.component';
import {RecipesPageComponent} from './recipes-page/recipes-page.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent, children:[
      {path: '', component: RecipesPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
