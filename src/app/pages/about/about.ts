import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AnimatedBackgroundComponent } from '../../shared/components/animated-background/animated-background.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, AnimatedBackgroundComponent],
  template: `
    <app-animated-background></app-animated-background>
    
    <div class="min-h-screen flex flex-col">
      <!-- Hero Section -->
      <section class="py-20 md:py-32">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-4xl md:text-6xl font-bold mb-6 text-white">
              Sobre <span class="text-indigo-400">Mí</span>
            </h1>
            <p class="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Desarrollador Full Stack apasionado por crear soluciones innovadoras y eficientes.
            </p>
          </div>
        </div>
      </section>

      <!-- About Me Section -->
      <section class="py-16 bg-gray-900/50 backdrop-blur-sm">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto">
            <div class="bg-gray-800/50 rounded-2xl p-8 md:p-12 shadow-xl">
              <div class="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 class="text-3xl font-bold mb-6 text-white">Mi Historia</h2>
                  <p class="text-gray-300 mb-6">
                    Soy un desarrollador con experiencia en la creación de aplicaciones web modernas. 
                    Me apasiona resolver problemas complejos y crear experiencias de usuario excepcionales.
                  </p>
                  <p class="text-gray-300 mb-8">
                    Con experiencia en múltiples tecnologías del stack de desarrollo, me enfoco en 
                    escribir código limpio, eficiente y mantenible.
                  </p>
                  <div class="flex flex-wrap gap-4">
                    <a href="#skills" class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors">
                      Mis Habilidades
                    </a>
                    <a routerLink="/contacto" class="px-6 py-3 border border-indigo-400 text-indigo-300 hover:bg-indigo-900/30 rounded-lg font-medium transition-colors">
                      Contáctame
                    </a>
                  </div>
                </div>
                <div class="bg-gray-700/50 rounded-xl p-6">
                  <div class="aspect-w-1 aspect-h-1 w-full bg-gray-600/30 rounded-lg overflow-hidden">
                    <!-- Reemplaza con tu imagen de perfil -->
                    <div class="w-full h-full flex items-center justify-center text-gray-400">
                      <svg class="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section id="skills" class="py-20">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto text-center mb-12">
            <h2 class="text-3xl font-bold text-white mb-4">Mis Habilidades</h2>
            <p class="text-gray-400 max-w-2xl mx-auto">
              Tecnologías y herramientas con las que trabajo regularmente
            </p>
          </div>
          
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <!-- Ejemplo de habilidades - personaliza según necesites -->
            <div *ngFor="let skill of skills" class="bg-gray-800/50 rounded-xl p-6 text-center hover:bg-gray-700/50 transition-colors">
              <div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-4xl">
                {{ skill.icon }}
              </div>
              <h3 class="text-lg font-semibold text-white">{{ skill.name }}</h3>
              <p class="text-sm text-gray-400 mt-2">{{ skill.level }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
      background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
      color: #fff;
      position: relative;
      overflow: hidden;
    }
  `]
})
export class About {
  skills = [
    { name: 'Angular', level: 'Avanzado', icon: '🅰️' },
    { name: 'TypeScript', level: 'Avanzado', icon: '🔷' },
    { name: 'Node.js', level: 'Intermedio', icon: '🟢' },
    { name: 'HTML/CSS', level: 'Avanzado', icon: '🎨' },
    { name: 'Git', level: 'Intermedio', icon: '🐙' },
    { name: 'Docker', level: 'Básico', icon: '🐳' },
    { name: 'SQL', level: 'Intermedio', icon: '🗃️' },
    { name: 'Python', level: 'Intermedio', icon: '🐍' }
  ];
}
