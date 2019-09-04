import { Component, OnInit } from '@angular/core';
import { IAdminDrinks } from 'src/app/shared/interfaces/admin-drinks.interface';
import { AdminDrinksService } from 'src/app/shared/services/admin-drinks.service';
import { AdminDrinks } from 'src/app/shared/classes/admin-drinks.model';

@Component({
  selector: 'app-admin-drink',
  templateUrl: './admin-drink.component.html',
  styleUrls: ['./admin-drink.component.scss']
})
export class AdminDrinkComponent implements OnInit {
  adminDrinks: Array<IAdminDrinks>;
  price: string;
  name: string;
  editStatus: boolean;
  editId: number;
  constructor(private adminDrinksService: AdminDrinksService) {
    this.getSaladData();
  }

  ngOnInit() {
  }
  public getSaladData(): void {
    this.adminDrinks = this.adminDrinksService.getData();
    console.log(this.adminDrinks);
  }
  public addAdminDrinks(): void {
    const newAdminDrinks = new AdminDrinks(1, this.name, this.price);
    if (this.adminDrinks.length > 0) {
      newAdminDrinks.id = this.adminDrinks.slice(-1)[0].id + 1;
    }
    this.adminDrinksService.setData(newAdminDrinks);
    this.name = '';
    this.price = '';
  }
  public deleteAdminDrinks(obj: IAdminDrinks): void {
    const index = this.adminDrinks.findIndex(val => val.id === obj.id);
    this.adminDrinksService.deleteData(index);
  }
  public editAdminDrinks(obj: IAdminDrinks): void {
    this.name = obj.name;
    this.price = obj.price;
    this.editStatus = true;
  }
  public saveEditAdminDrinks(obj: IAdminDrinks): void{
    const editAdminDrinks = new AdminDrinks(this.editId, this.name, this.price);
    const index = this.adminDrinks.findIndex(val => val.id === this.editId);
    this.adminDrinksService.updateData(editAdminDrinks, index);
    this.name = '';
    this.price = '';
    this.editStatus = false;
  }

}
