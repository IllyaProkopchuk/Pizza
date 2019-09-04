import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { DiscountComponent } from './pages/discount/discount.component';
import { PizzaComponent } from './pages/pizza/pizza.component';
import { SaladComponent } from './pages/salad/salad.component';
import { DrinksComponent } from './pages/drinks/drinks.component';
import { AboutComponent } from './pages/about/about.component';

import { AdminComponent } from './admin/admin.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminDiscountComponent } from './admin/admin-discount/admin-discount.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';

import { AdminPizzaComponent } from './admin/admin-products/admin-pizza/admin-pizza.component';
import { AdminSaladComponent } from './admin/admin-products/admin-salad/admin-salad.component';
import { AdminDrinkComponent } from './admin/admin-products/admin-drink/admin-drink.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'discount', component: DiscountComponent},
  {path: 'pizza', component: PizzaComponent},
  {path: 'salad', component: SaladComponent},
  {path: 'drinks', component: DrinksComponent},
  {path: 'about', component: AboutComponent},
  {path: 'admin', component: AdminComponent, children: [
    {path: '', redirectTo: 'category', pathMatch: 'full'},
    {path: 'category', component: AdminCategoryComponent},
    {path: 'orders', component: AdminOrdersComponent},
    {path: 'discount', component: AdminDiscountComponent},
    {path: 'products', component: AdminProductsComponent, children:[
      {path: '', redirectTo: 'adminPizza', pathMatch: 'full'},
      {path: 'adminPizza', component: AdminPizzaComponent},
      {path: 'adminSalad', component: AdminSaladComponent},
      {path: 'adminDrinks', component: AdminDrinkComponent}
    ]}
  ]},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
