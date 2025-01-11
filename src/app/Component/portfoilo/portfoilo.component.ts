import { Component } from '@angular/core';
import { bootstrapAppScopedEarlyEventContract } from '@angular/core/primitives/event-dispatch';

@Component({
  selector: 'app-portfoilo',
  imports: [],
  templateUrl: './portfoilo.component.html',
  styleUrl: './portfoilo.component.css',
})
export class PortfoiloComponent {
  portfolioItems = [
    { src: 'poert1.png' },
    { src: 'poert2.png' }, 
    { src: 'poert3.png' },
    { src: 'poert1.png' },
    { src: 'poert2.png' },
    { src: 'poert3.png' },
  ];

}
