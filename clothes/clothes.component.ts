import { ProviderAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ClothesService } from '../services/clothes.service';
@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css'],
  providers: [ClothesService]
})
export class ClothesComponent implements OnInit {
  public clothes_list!: Array<string>;
  public save_the_clothe!: string;
  constructor(private _clotheService: ClothesService) { }

  ngOnInit(): void {
    this.clothes_list = this._clotheService.getClothe();
  }
  saveClothe() {
    this._clotheService.addClothe(this.save_the_clothe);
    this.save_the_clothe = null;
  }
  deleteClothe(index: number) {
    this._clotheService.deleteClothe(index);
  }

}
