import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private defaultTitle = 'TitleChanger'; //default title
  private newTitle = "";                 //the new title
  private timer;                         //timer
  private sub;                           //subscriber
  constructor(private titleService: Title) {
  }

  public checkBox1(e) {
    if(e.target.checked) {
      this.titleService.setTitle( this.newTitle);
    } else {
      this.titleService.setTitle( this.defaultTitle );
    }
  }

  public checkBox2(e) {
    if(e.target.checked) {
      this.setTimer();
    } else {
      this.sub.unsubscribe();
      this.titleService.setTitle( this.defaultTitle );
    }
  }

  //timer function
  private timerFunction() {
    console.log("running");
    if(this.titleService.getTitle() == this.defaultTitle) {
      this.titleService.setTitle( this.newTitle );
    } else {
      this.titleService.setTitle( this.defaultTitle );
    }
  }

  public setTimer() {
    this.timer = Observable.timer(1000,1000);
    this.sub = this.timer.subscribe(t => this.timerFunction());
  }
} 
