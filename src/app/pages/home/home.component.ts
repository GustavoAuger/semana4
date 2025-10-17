// src/app/pages/home/home.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedBackgroundComponent } from '../../shared/components/animated-background/animated-background.component';
import { RoadmapComponent } from '../../shared/components/roadmap/roadmap.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AnimatedBackgroundComponent, RouterLink, RoadmapComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  sprintData = [
    { week: 1, title: 'Backend con SpringBoot', description: 'Consolidar los conocimientos en Java implementando un backend con SpringBoot, utilizando buenas practicas de diseño.' },
    { week: 2, title: 'Microservicios con Go', description: 'Refactorización del backend para implementar microservicios con Go.' },
    { week: 3, title: 'Frontend con Angular', description: 'Diseño y desarrollo del frontend con Angular e integración con el backend.' },
    { week: 4, title: 'Implementación Pruebas unitarias', description: 'Pruebas unitarias para validar funcionalidades.' },
    { week: 5, title: 'Funcionalidades Avanzadas', description: 'Continuidad por definir.' }
  ];
}