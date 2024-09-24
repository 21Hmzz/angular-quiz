import {Component, OnInit} from '@angular/core';
import {CategoryService} from 'src/app/shared/category.service';
import {ActivatedRoute, Router} from "@angular/router";
import {QuizService} from "../../shared/services/quiz.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: any[] = [];
  filteredCategories: any[] = [];
  searchText = '';
  playerName = '';


  constructor(private categoryService: CategoryService, private quizService: QuizService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((categories: any[]) => {
      this.categories = categories;
      this.filteredCategories = categories
    });
    this.route.params.subscribe(params => {
      this.quizService.playerName = params['playerName'];
      this.playerName = params['playerName'];
    });
  }


}
