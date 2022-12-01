import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'],
})
export class EventosComponent {
  show: boolean = false;
  count: number = 0;

  showMessage(): void{
    this.show = !this.show; //esse recurso que inverte a propriedade é chamada de toggle
  }

  countPlus(): void{
    this.count = this.count +1;
  }
}
