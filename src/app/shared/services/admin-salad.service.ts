import { Injectable } from '@angular/core';
import { IAdminSalad } from '../interfaces/admin-salad.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminSaladService {

  adminSalad: Array<IAdminSalad> = [
    {
      id: 1,
      name: 'Цезар',
      price: '125 грн',
      weight: '250 грам'
    }
  ];

  constructor() { }

  getData(): Array<IAdminSalad> {
    return this.adminSalad;
  }
  setData(obj: IAdminSalad): void {
    this.adminSalad.push(obj);
  }
  deleteData(index: number) {
    this.adminSalad.splice(index, 1);
  }
  updateData(obj: IAdminSalad, index) {
    this.adminSalad.splice(index, 1,obj);
  }
}
