import { TestBed, async, inject } from '@angular/core/testing';

import { MyGuardsGuard } from './my-guards.guard';

describe('MyGuardsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyGuardsGuard]
    });
  });

  it('should ...', inject([MyGuardsGuard], (guard: MyGuardsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
