import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsalirComponent } from './modalsalir.component';

describe('ModalsalirComponent', () => {
  let component: ModalsalirComponent;
  let fixture: ComponentFixture<ModalsalirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalsalirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsalirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
