
import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()//Valor por defecto
  public characterList: Character[] = [{
    name: 'Trunks',
    power:10
  }]

  /* onDeleteCharacter (index):void {
    //TODO: Emitir el ID del personaje
    console.log(index);

  } */

 }
