import { GlobalService } from '../../../shared/services/global.service';  
import { Component, OnInit } from '@angular/core';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import 'rxjs/add/operator/takeWhile';
import {Router} from '@angular/router'
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  title = 'WatsBuzz';
  article1 = new Array;
  dsj: any[];
  header: any;
  arr = new Array;
  private display: boolean; // whether to display info in the component
  // use *ngIf="display" in your html to take
  // advantage of this

  private alive: boolean; // used to unsubscribe from the IntervalObservable
  // when OnDestroy is called.


  constructor(private globalService: GlobalService) {
    this.display = false;
    this.alive = true;
    this.globalService.getNews()
      .subscribe(data => {
        console.log('check', data);
        this.article1.push(data);
        for (const entry of this.article1) {
          console.log('entry', entry); // 1, "string", false
          for (const value of entry.articles) {
            this.header = value.title;
            this.arr.push(value);
          }
        }
      })
  }
  ngOnInit() {
    IntervalObservable.create(500000)
      .takeWhile(() => this.alive) // only fires when component is alive
      .subscribe(() => {
        this.globalService.get()
          .subscribe(data => {
            while (this.arr.length !== 0) {
              this.arr.pop();
            }
            console.log('check', data);
            this.article1.push(data);
            for (const entry of this.article1) {
              console.log('entry', entry); // 1, "string", false
              for (const value of entry.articles) {
                this.header = value.title;
                this.arr.push(value);
              }
            }
          });
      });
  }

}
