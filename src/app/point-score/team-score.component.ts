import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-team-score',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-score.component.html',
})
export class PointScoreComponent {
  @Input({required: true}) team!: string;
  @Input({required: true}) score!: number;
  @Input({required: true}) sets!: number;
  @Input({required: true}) stale!: boolean;
  @Output() pointScored: EventEmitter<void> = new EventEmitter();
}
