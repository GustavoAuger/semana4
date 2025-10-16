// src/app/pages/home/home.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedBackgroundComponent } from '../../shared/components/animated-background/animated-background.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AnimatedBackgroundComponent, RouterLink],
  template: `
    <div class="relative min-h-screen flex flex-col">
      <app-animated-background class="fixed inset-0 -z-10"></app-animated-background>
      
      <!-- Hero Section -->
      <main class="flex-grow flex items-center pt-20 relative z-10">
        <div class="container mx-auto px-6 py-16 md:py-24">
          <div class="max-w-3xl mx-auto text-center">
            <h1 class="text-4xl md:text-6xl font-bold mb-6 text-white">
              Transforma tus ideas en <span class="text-indigo-400">código real</span>
            </h1>
            <p class="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Una plataforma diseñada para desarrolladores que buscan llevar sus habilidades al siguiente nivel con herramientas modernas y eficientes.
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
              <a routerLink="/dashboard" class="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors">
                Comenzar ahora
              </a>
              <a href="#features" class="px-8 py-3 border border-indigo-400 text-indigo-300 hover:bg-indigo-900/30 rounded-lg font-medium transition-colors">
                Saber más
              </a>
            </div>
          </div>
        </div>
      </main>

      <!-- Features Section -->
      <section id="features" class="py-16 bg-gray-900/50 backdrop-blur-sm relative z-10">
        <div class="container mx-auto px-6">
          <h2 class="text-3xl font-bold text-center mb-12 text-white">Características principales</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-indigo-500/50 transition-all">
              <div class="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2 text-white">Desarrollo Rápido</h3>
              <p class="text-gray-300">Herramientas optimizadas para acelerar tu flujo de trabajo de desarrollo.</p>
            </div>
            
            <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-indigo-500/50 transition-all">
              <div class="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2 text-white">Seguridad Robusta</h3>
              <p class="text-gray-300">Protección de datos avanzada y autenticación segura.</p>
            </div>
            
            <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-indigo-500/50 transition-all">
              <div class="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2 text-white">Panel de Control</h3>
              <p class="text-gray-300">Interfaz intuitiva para gestionar todos tus proyectos en un solo lugar.</p>
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
      position: relative;
      overflow-x: hidden;
    }
  `]
})
export class Home {}
