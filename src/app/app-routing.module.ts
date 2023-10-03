import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { BlogComponent } from './components/blog/blog.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Nosotros', component: NosotrosComponent},
  {path: 'Blog', component: BlogComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'Home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
