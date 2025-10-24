import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent {
  @Input() deleteConfirmMessage: string = '';
  @Input() deleteSuccessMessage: string = '';

  @Output() confirmDeleteEvent = new EventEmitter<void>();
  @Output() cancelDeleteEvent = new EventEmitter<void>();
  @Output() closeDeleteSuccessEvent = new EventEmitter<void>();

  confirmDelete() {
    this.confirmDeleteEvent.emit();
  }

  cancelDelete() {
    this.cancelDeleteEvent.emit();
  }

  closeDeleteSuccessMessage() {
    this.closeDeleteSuccessEvent.emit();
  }
}
