import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  @Output() incNumber = new EventEmitter<number>();

  counter: number = 0;

  interval: any;

  clearTimer() {
    clearInterval(this.interval);
  }

  startIncrement() {
    this.interval = setInterval(() => {
      this.incNumber.emit(this.counter);
      this.counter++;
    }, 1000);
  }
}
