
import { Component, EventEmitter, Input, Output} from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()//Valor por defecto
  public characterList: Character [] = [{
    name: 'Trunks',
    power:10
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter (id?: string):void {
    //TODO: Emitir el ID del personaje
    if (!id) return;
    console.log({id});
    this.onDelete.emit(id);

  }

 }
