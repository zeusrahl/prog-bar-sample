import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  color = '';
  mode = '';
  value = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onLoading() {
    this.color = 'primary';
    this.mode = 'determinate';
    this.showProgress();
  }

  onWarning() {
    this.color = 'accent';
    this.mode = 'indeterminate';

  }

  onError() {
    this.color = 'warn';
    this.mode = 'query';
  }

  showProgress() {
    this.value = 0;
    setInterval(() => this.progressBar(), 2000)
  }

  progressBar() {
    if (this.value == 0) {
      this.value = this.value + 1
    } else {
      this.value = this.value + 1;
      if (this.value = this.value + 30) {
        this.value == this.value + 1;
        if (this.value >= 100) {
          this.value = 100;
        }
      }
    }
  }
}
