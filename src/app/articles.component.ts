import {Component, OnInit} from '@angular/core'
import {ArticleService} from './article.service'

@Component({
	selector: 'articles',
	template: `
		<h2>{{title}}</h2>
		<ul>
			<li *ngFor="let article of articles">
				<a href="" title="{{ article.title }}">{{ article.title }}</a>
			</li>
		</ul>
		<ng-template #noData>No Data Available</ng-template>
	`,
	providers: [ ArticleService ]
})
export class ArticlesComponent implements OnInit {
	title = "Articles";
	articles;

	constructor(private articleService: ArticleService) { }

	ngOnInit() {
		this.articleService.getArticles().subscribe(
			articles => {
				this.articles = articles['data'];
			},
			err => {
				console.log(err);
			}
		);
	}
}