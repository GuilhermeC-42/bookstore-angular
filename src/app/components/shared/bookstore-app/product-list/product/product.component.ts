import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../model/Book';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  livro!: Book;


  constructor() { }

  ngOnInit(): void {
  }

}
