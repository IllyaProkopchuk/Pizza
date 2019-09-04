import { IAdminSalad } from '../interfaces/admin-salad.interface';

export class AdminSalad implements IAdminSalad {
    constructor(
        public id: number,
        public name: string,
        public price: string,
        public weight: string
    ){}
}