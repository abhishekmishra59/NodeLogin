import { SignupService } from './signup/signup.service';
import { TestBed, inject } from '@angular/core/testing';


describe('SignupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignupService]
    });
  });

  it('should be created', inject([SignupService], (service: SignupService) => {
    expect(service).toBeTruthy();
  }));
});
