import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClothesComponent } from './clothes/clothes.component';
import { ArticlesComponent } from './articles/articles.component';

const routes: Routes = [
  {
    path: 'ropa',
    component: ClothesComponent,
  },
  {
    path: 'articles',
    component: ArticlesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
