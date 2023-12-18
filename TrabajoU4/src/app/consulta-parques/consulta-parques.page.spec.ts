import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultaParquesPage } from './consulta-parques.page';

describe('ConsultaParquesPage', () => {
  let component: ConsultaParquesPage;
  let fixture: ComponentFixture<ConsultaParquesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConsultaParquesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
