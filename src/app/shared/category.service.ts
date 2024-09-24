// src/app/shared/services/category.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: any[] = [];

  constructor(private http: HttpClient) {}

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/categories').pipe(
      tap(categories => this.categories = categories)
    );
  }

  getCategoryName(categoryId: number): Promise<string | undefined> {
    return new Promise((resolve) => {
      this.getCategories().subscribe(() => {
        const category = this.categories.find((c) => c.id === categoryId);
        resolve(category?.categoryName);
      });
    });
  }
}
