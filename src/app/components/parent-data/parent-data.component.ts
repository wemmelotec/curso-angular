import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent {

  @Input() name: string = '';
  //com a exclamação no dado eu garanto(asserção) que vou iniciar o dado, mas nesse momento ainda não está
  @Input() userData!: {email: string, role: string};
}
