import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroiListarComponent } from './heroi-listar.component';

describe('HeroiListarComponent', () => {
  let component: HeroiListarComponent;
  let fixture: ComponentFixture<HeroiListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroiListarComponent]
    });
    fixture = TestBed.createComponent(HeroiListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
