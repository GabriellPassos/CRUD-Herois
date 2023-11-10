import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroiCadastrarEditarComponent } from './heroi-cadastrar-editar.component';

describe('HeroiCadastrarEditarComponent', () => {
  let component: HeroiCadastrarEditarComponent;
  let fixture: ComponentFixture<HeroiCadastrarEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroiCadastrarEditarComponent]
    });
    fixture = TestBed.createComponent(HeroiCadastrarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
