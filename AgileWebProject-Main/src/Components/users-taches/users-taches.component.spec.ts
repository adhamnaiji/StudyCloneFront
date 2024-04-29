import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTachesComponent } from './users-taches.component';

describe('UsersTachesComponent', () => {
  let component: UsersTachesComponent;
  let fixture: ComponentFixture<UsersTachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersTachesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersTachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
