import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/*import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
*/
interface Article {
	title: string;
	slug: string;
	post: string;
	author_name: string;
	created_at: string;
	published_at: string;
}

@Injectable()
export class ArticleService {
	/*articles$: Observable<Article[]>;*/

	constructor(private http: HttpClient) { }

	getArticles() {
		return this.http.get('https://rollerhome.com/api/v1/posts')
		/*
		return this.http.get("https://rollerhome.com/api/v1/posts")['data'].map(result=>result.data);
		this.articles$ = this.http.get("https://rollerhome.com/api/v1/posts").subscribe(result => {
			console.log(result)
		},
		err => {
			if (err.error instanceof Error) {
				console.log("Client-side error occured.");
			} else {
				console.log("Server-side error occured.");
			}
		});
		*/
	}
/*	getArticles() : object {
		return [
			{"title": "Article 1", "href": "http://www.jeff-sawyer.com/"},
			{"title": "Article 2", "href": "http://www.jeff-sawyer.com/"},
		];
	}*/
}