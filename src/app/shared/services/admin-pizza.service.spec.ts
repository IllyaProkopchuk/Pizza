import { TestBed } from '@angular/core/testing';

import { AdminPizzaService } from './admin-pizza.service';

describe('AdminPizzaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminPizzaService = TestBed.get(AdminPizzaService);
    expect(service).toBeTruthy();
  });
});
