import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClothesService {
  constructor() {}
  public clothe_colection = ['Pijama', 'Tshirt', 'Underpants'];

  addClothe(name_clothe: string): Array<string>{
    this.clothe_colection.push(name_clothe)
    return this.getClothe();
  }
  deleteClothe(index: number){
    this.clothe_colection.splice(index, 1);
    return this.getClothe();
  }
  getClothe(){
    return this.clothe_colection;
  }
}
