import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor() { }
  retornar(){
    return[
      {
        code: 1, description: "potatos", price: 12.33 
      },
      {
        code: 2, description: "apples", price: 54
      },
      {
        code: 3, description: "watermelon", price: 14
      }
    ];
  }
}
