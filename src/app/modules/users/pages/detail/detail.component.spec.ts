import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreModule } from '../../../../core/core.module';
import { UserDetailPageComponent } from './detail.component';

describe('UserDetailPageComponent', () => {
  let component: UserDetailPageComponent;
  let fixture: ComponentFixture<UserDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailPageComponent],
      imports: [CoreModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
