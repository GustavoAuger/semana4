
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Especificacion {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  oferta_id: number;
  numero_vacantes: number;
  personal_a_cargo: number;
  tipo_contrato: string;
  modalidad_trabajo: string;
  categoria: string;
  subcategoria: string;
  sector: string;
  nivel_profesional: string;
  departamento: string;
  experiencia_minima: string;
  jornada_laboral: string;
  formacion_minima: string;
  oferta: Oferta;  // Objeto anidado
}

export interface Oferta {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  area: string;
  descripcion: string;
  estado: string;
  idioma: string;
  localizacion: string;
  pais: string;
  requisitos_minimos: string;
  salario_desde: number;
  salario_hasta: number;
  salario_modalidad: string;
  salario_moneda: string;
  salario_mostrar: number;
  solicitud_id: number;
  titulo: string;
}
export interface DetalleOferta {
  especificacion: Especificacion; 
  
}
export interface DetalleOferta extends Especificacion {}  
@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiUrl = 'http://localhost/api/v1';

  constructor(private http: HttpClient) {}

  getEspecificaciones(): Observable<Especificacion[]> {
    return this.http.get<Especificacion[]>(`${this.apiUrl}/especificaciones`);
  }

  getDetalleOferta(id: number): Observable<DetalleOferta> {
    return this.http.get<DetalleOferta>(`${this.apiUrl}/especificaciones/${id}`);
  }
}