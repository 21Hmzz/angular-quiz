// src/app/quiz/quiz.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../shared/services/quiz.service';
import { CategoryService} from "../shared/category.service";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  isQuizFinished = this.quizService.isQuizFinished;
  playerName = '';
  categoryId = 0;
  categorySelected: string = '';

  constructor(
    private quizService: QuizService,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories();
    this.route.params.subscribe(params => {
      this.quizService.playerName = params['playerName'];
      this.playerName = params['playerName'];
      this.categoryId = Number(params['categoryId']);
      this.getCategorySelected();
    });
  }

  goToResultPage() {
    this.router.navigate(['/result']);
  }

  getCategorySelected() {
    this.categoryService.getCategoryName(this.categoryId).then((categoryName: any) => {
      this.categorySelected = categoryName || '';
    });
  }
}
