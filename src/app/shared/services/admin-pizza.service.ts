import { Injectable } from '@angular/core';
import { IAdminPizza } from '../interfaces/admin-pizza.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminPizzaService {
  adminPizza: Array<IAdminPizza> = [
    {
      id: 1,
      name: 'Капрічоза',
      price: '120 грн',
      weight: '500 грам'
    },
    {
      id: 1,
      name: 'Капрічоза',
      price: '120 грн',
      weight: '500 грам'
    }
  ];
  constructor() { }

  getData(): Array<IAdminPizza> {
    return this.adminPizza;
  }
  setData(obj: IAdminPizza): void {
    this.adminPizza.push(obj);
  }
  deleteData(index: number) {
    this.adminPizza.splice(index, 1);
  }
  updateData(obj: IAdminPizza, index) {
    this.adminPizza.splice(index, 1,obj);
  }
}
