import { Component } from '@angular/core';
import { Animal } from 'src/app/Aminal';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  //animals = [
  //  { name: 'Turca', type: 'Dog' },
  //  { name: 'Tom', type: 'Cat' },
  //  { name: 'Frida', type: 'Dog' },
  //  { name: 'Bob', type: 'Horse' },
  //];
  animals: Animal[] = [
    { name: 'Turca', type: 'Dog', age: 4 },
    { name: 'Tom', type: 'Cat', age: 10 },
    { name: 'Frida', type: 'Dog', age: 11 },
    { name: 'Bob', type: 'Horse', age: 2 },
  ];

  animalDetails = '';

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos de vida!`;
  }
}
