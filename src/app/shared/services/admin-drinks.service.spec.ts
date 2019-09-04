import { TestBed } from '@angular/core/testing';

import { AdminDrinksService } from './admin-drinks.service';

describe('AdminDrinksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminDrinksService = TestBed.get(AdminDrinksService);
    expect(service).toBeTruthy();
  });
});
