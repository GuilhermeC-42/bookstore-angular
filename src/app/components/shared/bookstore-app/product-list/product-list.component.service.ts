import  { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Book } from "./model/Book";

@Injectable()
export class BookService {
    private url = environment.api_url;

    httpOptions = {
        Headers: new HttpHeaders({'content-type':'application/json'})
    }

    constructor(private http: HttpClient){}

    getBook() {
        return this.http.get(this.url)
    }
}