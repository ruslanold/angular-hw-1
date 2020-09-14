import { from, Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http"
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class PostService {
    constructor(private http: HttpClient) {}

    setPost(data): Observable<Object> {
        return this.http.post<Object>("https://jsonplaceholder.typicode.com/posts", {value: data})
    }

    removePost(id: number): Observable<Object> {
        return this.http.delete<Object>(`https://jsonplaceholder.typicode.com/posts/${id}`)
    }
}