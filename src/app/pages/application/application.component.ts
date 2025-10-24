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

  constructor(private jobService: JobService) {}

  ngOnInit() {
    this.loadEspecificaciones();
  }

  loadEspecificaciones() {
    this.loading = true;
    this.jobService.getEspecificaciones().subscribe({
      next: (data: Especificacion[]) => {
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
    console.log('ID seleccionado:', id);
    this.jobService.getDetalleOferta(id).subscribe({
      next: (data: DetalleOferta) => {
        this.selectedOferta = data.oferta;
      },
      error: (err: any) => {
        console.log('Error:', err);
      }
    });
  }

  onDeleteEspecificacion(id: number) {
    if (confirm('¿Estás seguro de que quieres eliminar esta especificación? Esta acción no se puede deshacer.')) {
      this.jobService.deleteEspecificacion(id).subscribe({
        next: () => {
          // Si el detalle está abierto y es la especificación que se eliminó, cerrarlo
          if (this.selectedOferta && this.selectedOferta.ID === id) {
            this.selectedOferta = null;
          }
          // Recargar la lista
          this.loadEspecificaciones();
          console.log('Especificación eliminada correctamente');
        },
        error: (err: any) => {
          this.error = 'Error al eliminar la especificación: ' + err.message;
          console.error('Error al eliminar:', err);
        }
      });
    }
  }

  closeDetalle() {
    this.selectedOferta = null;
  }
}