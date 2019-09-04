import { Component, OnInit } from '@angular/core';
import { IAdminSalad } from 'src/app/shared/interfaces/admin-salad.interface';
import { AdminSaladService } from 'src/app/shared/services/admin-salad.service';

@Component({
  selector: 'app-salad',
  templateUrl: './salad.component.html',
  styleUrls: ['./salad.component.scss']
})
export class SaladComponent implements OnInit {
  salad: Array<IAdminSalad>;

  constructor(private adminSaladService: AdminSaladService) { 
    this.getSalData();
  }

  ngOnInit() {
  }

  private getSalData(): void {
    this.salad = this.adminSaladService.getData();
    console.log(this.salad);
  }
}
