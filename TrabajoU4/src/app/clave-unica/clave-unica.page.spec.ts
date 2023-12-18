import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClaveUnicaPage } from './clave-unica.page';

describe('ClaveUnicaPage', () => {
  let component: ClaveUnicaPage;
  let fixture: ComponentFixture<ClaveUnicaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClaveUnicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
