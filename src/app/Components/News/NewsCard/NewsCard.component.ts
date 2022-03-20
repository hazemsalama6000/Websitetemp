import { Component, Input, OnInit } from "@angular/core";
import { Article } from "src/app/Models/Article";

@Component({
    selector: 'NewsCard-C',
    templateUrl: './NewsCard.component.html',
    styleUrls: ['./NewsCard.component.scss']
})

export class NewsCardComponent {
   
    DefaultImage = "../../../../assets/images/download.jpg";
   
    Article:Article;
   
    @Input() set _Article(_value:Article){
        this.Article=_value;  
       this.checkImg(_value);
    };

    checkImg(_value:Article){
        this.Article.urlToImage=this.Article.urlToImage!="null"?this.Article.urlToImage:this.DefaultImage;
    }

}