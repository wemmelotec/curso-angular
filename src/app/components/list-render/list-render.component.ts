import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Aminal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  //animals = [
  //  { name: 'Turca', type: 'Dog' },
  //  { name: 'Tom', type: 'Cat' },
  //  { name: 'Frida', type: 'Dog' },
  //  { name: 'Bob', type: 'Horse' },
  //];

  //animals: Animal[] = [
  //  { name: 'Turca', type: 'Dog', age: 4 },
  //  { name: 'Tom', type: 'Cat', age: 10 },
  //  { name: 'Frida', type: 'Dog', age: 11 },
  //  { name: 'Bob', type: 'Horse', age: 2 },
  //];

  animals: Animal[] = [
    { name: 'Turca', type: 'Dog', age: 4 },
    { name: 'Tom', type: 'Cat', age: 10 },
    { name: 'Frida', type: 'Dog', age: 11 },
    { name: 'Bob', type: 'Horse', age: 2 },
  ];

  animalDetails = '';

  constructor(private listService: ListService) {}

  ngOnInit(): void {}

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos de vida!`;
  }

  removeAnimal(animal: Animal) {
    console.log('Removando animal...');
    //this.listService.remove(this.animals,animal);
    this.animals = this.listService.remove(this.animals, animal);
  }
}
