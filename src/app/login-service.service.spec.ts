import { LoginServiceService } from './login/login-service.service';
import { TestBed, inject } from '@angular/core/testing';



describe('LoginServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginServiceService]
    });
  });

  it('should be created', inject([LoginServiceService], (service: LoginServiceService) => {
    expect(service).toBeTruthy();
  }));
});
