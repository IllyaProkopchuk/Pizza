import { Injectable } from '@angular/core';
import { IAdminDrinks } from '../interfaces/admin-drinks.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminDrinksService {
  adminDrinks: Array<IAdminDrinks> = [
    {
      id: 1,
      name: 'Водa BonAqua - 1л',
      price: '29 грн',
    }
  ];
  constructor() { }

  getData(): Array<IAdminDrinks> {
    return this.adminDrinks;
  }
  setData(obj: IAdminDrinks): void {
    this.adminDrinks.push(obj);
  }
  deleteData(index: number) {
    this.adminDrinks.splice(index, 1);
  }
  updateData(obj: IAdminDrinks, index) {
    this.adminDrinks.splice(index, 1,obj);
  }
}
