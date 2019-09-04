import { TestBed } from '@angular/core/testing';

import { AdminSaladService } from './admin-salad.service';

describe('AdminSaladService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminSaladService = TestBed.get(AdminSaladService);
    expect(service).toBeTruthy();
  });
});
