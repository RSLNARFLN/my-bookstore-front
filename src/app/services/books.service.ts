import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../domain/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  URL = 'http://localhost:8080/books';

  constructor(private http: HttpClient) { }

  getAllBooks() {

    return this.http.get<Book[]>(this.URL);

  }
}
