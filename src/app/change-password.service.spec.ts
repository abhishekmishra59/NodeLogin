import { ChangePasswordService } from './change-password/change-password.service';
import { TestBed, inject } from '@angular/core/testing';



describe('ChangePasswordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangePasswordService]
    });
  });

  it('should be created', inject([ChangePasswordService], (service: ChangePasswordService) => {
    expect(service).toBeTruthy();
  }));
});
