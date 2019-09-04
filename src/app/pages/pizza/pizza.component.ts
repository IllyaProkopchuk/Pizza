import { Component, OnInit } from '@angular/core';
import { IAdminPizza } from 'src/app/shared/interfaces/admin-pizza.interface';
import { AdminPizzaService } from 'src/app/shared/services/admin-pizza.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {
  pizza: Array<IAdminPizza>;
  constructor(private adminPizzaService: AdminPizzaService) {
    this.getPizData();
  }

  ngOnInit() { }
  private getPizData(): void {
    this.pizza = this.adminPizzaService.getData();
    console.log(this.pizza);
  }
}
