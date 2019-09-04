import { IAdminPizza } from '../interfaces/admin-pizza.interface';

export class AdminPizza implements IAdminPizza {
    constructor(
        public id: number,
        public name: string,
        public price: string,
        public weight: string
    ){}
}