// src/app/pages/home/home.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-4">
      <h1 class="text-2xl font-bold mb-4">Bienvenido a mi aplicación</h1>
      <p>Contenido principal de la aplicación.</p>
    </div>
  `,
  styles: []
})
export class Home {}