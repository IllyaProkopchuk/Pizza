import { Component, OnInit } from '@angular/core';
import { AdminPizzaService } from 'src/app/shared/services/admin-pizza.service';
import { IAdminPizza } from 'src/app/shared/interfaces/admin-pizza.interface';
import { AdminPizza } from 'src/app/shared/classes/admin-pizza.model';

@Component({
  selector: 'app-admin-pizza',
  templateUrl: './admin-pizza.component.html',
  styleUrls: ['./admin-pizza.component.scss']
})
export class AdminPizzaComponent implements OnInit {
  adminPizza: Array<IAdminPizza>;
  price: string;
  name: string;
  weight: string;
  editStatus: boolean;
  editId: number;


  constructor(private adminPizzaService: AdminPizzaService) {
    this.getPizData();
  }

  ngOnInit() {
  }

  public getPizData(): void {
    this.adminPizza = this.adminPizzaService.getData();
    console.log(this.adminPizza);
  }
  public addAdminPizza(): void {
    const newAdminPizza = new AdminPizza(1, this.name, this.price, this.weight);
    if (this.adminPizza.length > 0) {
      newAdminPizza.id = this.adminPizza.slice(-1)[0].id + 1;
    }
    this.adminPizzaService.setData(newAdminPizza);
    this.name = '';
    this.price = '';
    this.weight = '';
  }

  public deleteAdminPizza(obj: IAdminPizza): void {
    const index = this.adminPizza.findIndex(val => val.id === obj.id);
    this.adminPizzaService.deleteData(index);
  }
  public editAdminPizza(obj: IAdminPizza): void {
    this.name = obj.name;
    this.price = obj.price;
    this.weight = obj.weight;
    this.editStatus = true;
  }
  public saveEditAdminPizza(obj: IAdminPizza): void{
    const editAdminPizza = new AdminPizza(this.editId, this.name, this.price, this.weight);
    const index = this.adminPizza.findIndex(val => val.id === this.editId);
    this.adminPizzaService.updateData(editAdminPizza, index);
    this.name = '';
    this.price = '';
    this.weight = '';
    this.editStatus = false;
  }
}
