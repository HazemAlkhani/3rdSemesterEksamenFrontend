import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Kaffekunstens Forening';

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
}
