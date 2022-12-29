import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Book } from 'src/app/domain/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent {

  books: Observable<Book[]>;

  constructor(private service: BooksService) {
    this.books = service.getAllBooks();
  }
}
