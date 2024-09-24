import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCategories'
})
export class FilterCategoriesPipe implements PipeTransform {

  //pour filter instant les categ sans refresh
  transform(categories: any[], searchText: string): any[] {
    if (!categories) return [];
    if (!searchText) return categories;
    searchText = searchText.toLowerCase();
    return categories.filter(category => {
      return category.categoryName.toLowerCase().includes(searchText);
    });
  }
}
