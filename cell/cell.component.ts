import {Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'cell-block',
  templateUrl: 'cell.component.html',
  styles: [` 
            .circle td {
    background: lightblue;
}

.cross td{
    background: lightcoral;
}
    `]
})


export class CellComponent {
  circleArr = [];
  crossArr = [];

  @Output() onChanged = new EventEmitter<number>();

  @Input() itemNumber: number;
  @Input() currentPlayer: boolean;

  constructor(
    private el: ElementRef,
  ){
  }

  mark() {
    if (this.el.nativeElement.classList.contains('circle') || this.el.nativeElement.classList.contains('cross')) {
      return;
    }
    (this.currentPlayer) ?
      this.el.nativeElement.classList.add('circle')
     : this.el.nativeElement.classList.add('cross');
    this.onChanged.emit(this.itemNumber);
  }
}
