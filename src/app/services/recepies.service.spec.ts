/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecepiesService } from './recepies.service';

describe('Service: Recepies', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecepiesService]
    });
  });

  it('should ...', inject([RecepiesService], (service: RecepiesService) => {
    expect(service).toBeTruthy();
  }));
});
