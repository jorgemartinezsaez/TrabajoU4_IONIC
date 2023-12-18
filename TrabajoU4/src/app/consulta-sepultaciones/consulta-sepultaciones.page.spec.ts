import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultaSepultacionesPage } from './consulta-sepultaciones.page';

describe('ConsultaSepultacionesPage', () => {
  let component: ConsultaSepultacionesPage;
  let fixture: ComponentFixture<ConsultaSepultacionesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConsultaSepultacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
