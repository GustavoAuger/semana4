// src/app/pages/application/application.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobService, Especificacion, DetalleOferta } from '../../services/job.service';
import { AnimatedBackgroundComponent } from '../../shared/components/animated-background/animated-background.component';

@Component({
  selector: 'app-application',
  standalone: true,
  imports: [CommonModule, AnimatedBackgroundComponent],
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  especificaciones: Especificacion[] = [];
  selectedOferta: any = null;  // Usa any o ajusta según necesites
  loading = true;
  error = '';
  closeDetalle() {
    this.selectedOferta = null;
  }
  constructor(private jobService: JobService) {}

  ngOnInit() {
    this.loadEspecificaciones();
  }

  // En src/app/pages/application/application.component.ts
loadEspecificaciones() {
  this.loading = true;
  this.jobService.getEspecificaciones().subscribe({
    next: (data: Especificacion[]) => {  // Tipa 'data' como Especificacion[]
      this.especificaciones = data;
      this.loading = false;
    },
    error: (err: any) => {
      this.error = 'Error al cargar ofertas: ' + err.message;
      this.loading = false;
    }
  });
}


onSelectEspecificacion(id: number) {
  console.log('ID seleccionado:', id);  // Verifica en consola
  this.jobService.getDetalleOferta(id).subscribe({
    next: (data: DetalleOferta) => {
      this.selectedOferta = data.oferta;
    },
    error: (err: any) => {
      console.log('Error:', err);  // Verifica errores
    }
  });
}


}