import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, Observable, of } from "rxjs";
import { Article } from "src/app/Models/Article";
import { NewsService } from "src/app/Services/News.service";

@Component({
    selector: 'News-C',
    templateUrl: './News.component.html',
    styleUrls: ['./News.component.scss']
})

export class NewsComponent implements OnInit {

    Articles$: Observable<Article[]>;
    SourceName: string;
    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.Articles$ = this.route.data.pipe(map((data) => {
            this.SourceName = data['articles'].SourceName;
            return data['articles'].articles;
        }));
    }

}