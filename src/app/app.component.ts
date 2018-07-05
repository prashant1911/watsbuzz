import { GlobalService } from './shared/services/global.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WatsBuzz';
  article1 = new Array;
  dsj: any[];
  header: any;
  description = new Array;

  constructor(private globalService: GlobalService) {
    this.globalService.getNews()
    .subscribe(data => {
      console.log('check', data);
      this.article1.push(data);
      for (const entry of this.article1) {
        console.log('entry', entry); // 1, "string", false
       for (const value of entry.articles){
              this.header = value.title;
              this.description.push(value.description);
              console.log('jasfkjafkjnakjfnkjalnfkjanfkjnasklfnasklnfkl', this.description);
       }
    }


console.log('sadnkasjdksnadk' ,  this.article1);
    })
  }
}
