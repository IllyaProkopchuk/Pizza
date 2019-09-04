import { Component, OnInit } from '@angular/core';
import { AdminSaladService } from 'src/app/shared/services/admin-salad.service';
import { IAdminSalad } from 'src/app/shared/interfaces/admin-salad.interface';
import { AdminSalad } from 'src/app/shared/classes/admin-salad.model';


@Component({
  selector: 'app-admin-salad',
  templateUrl: './admin-salad.component.html',
  styleUrls: ['./admin-salad.component.scss']
})
export class AdminSaladComponent implements OnInit {
  adminSalad: Array<IAdminSalad>;
  price: string;
  name: string;
  weight: string;
  editStatus: boolean;
  editId: number;


  constructor(private adminSaladService: AdminSaladService) {
    this.getSalData();
  }

  ngOnInit() {
  }
  public getSalData(): void {
    this.adminSalad = this.adminSaladService.getData();
    console.log(this.adminSalad);
  }
  public addAdminSalad(): void {
    const newAdminSalad = new AdminSalad(1, this.name, this.price, this.weight);
    if (this.adminSalad.length > 0) {
      newAdminSalad.id = this.adminSalad.slice(-1)[0].id + 1;
    }
    this.adminSaladService.setData(newAdminSalad);
    this.name = '';
    this.price = '';
    this.weight = '';
  }

  public deleteAdminSalad(obj: IAdminSalad): void {
    const index = this.adminSalad.findIndex(val => val.id === obj.id);
    this.adminSaladService.deleteData(index);
  }
  public editAdminSalad(obj: IAdminSalad): void {
    this.name = obj.name;
    this.price = obj.price;
    this.weight = obj.weight;
    this.editStatus = true;
  }
  public saveEditAdminSalad(obj: IAdminSalad): void {
    const editAdminPizza = new AdminSalad(this.editId, this.name, this.price, this.weight);
    const index = this.adminSalad.findIndex(val => val.id === this.editId);
    this.adminSaladService.updateData(editAdminPizza, index);
    this.name = '';
    this.price = '';
    this.weight = '';
    this.editStatus = false;
  }
}
