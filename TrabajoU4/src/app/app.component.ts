import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Splash', url: 'splash', icon: 'refresh' },
    { title: 'Clave Unica', url: 'clave-unica', icon: 'eye' },
    { title: 'Login', url: 'login', icon: 'log-in' },
    { title: 'Principal', url: 'home', icon: 'search' },
    { title: 'Consultas', url: 'consultas', icon: 'search' },
    { title: 'Consulta Parques', url: 'consulta-parques', icon: 'locate' },
    { title: 'Consulta Sepultaciones', url: 'consulta-sepultaciones', icon: 'navigate' },
    { title: 'Preguntas Frecuentes', url: 'faq', icon: 'help' },
    { title: 'Salir', url: 'salir', icon: 'exit' },
    ];
  constructor() {}
  
}