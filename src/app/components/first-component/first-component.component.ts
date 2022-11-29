import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  name: string = 'wellington';
  age: number = 30;
  hobbies = ['estudar', 'ler', 'ouvir música'];

  car={
    name: 'ford',
    ano:2019,
  }
}
