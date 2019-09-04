import { IAdminDrinks } from '../interfaces/admin-drinks.interface';

export class AdminDrinks implements IAdminDrinks {
    constructor(
        public id: number,
        public name: string,
        public price: string
    ){}
}