import { Component, OnInit } from '@angular/core';
import { IAdminDrinks } from 'src/app/shared/interfaces/admin-drinks.interface';
import { AdminDrinksService } from 'src/app/shared/services/admin-drinks.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {
  drinks: Array<IAdminDrinks>;
  constructor(private adminDrinksService: AdminDrinksService) {
    this.getDrinksData();
  }

  ngOnInit() { }
  private getDrinksData(): void {
    this.drinks = this.adminDrinksService.getData();
    console.log(this.drinks);
  }
}
