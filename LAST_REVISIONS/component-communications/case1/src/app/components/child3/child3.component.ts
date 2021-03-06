import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyClass } from './../../shared';

@Component({
    selector: 'app-child3',
    templateUrl: './child3.component.html',
    styleUrls: ['./child3.component.scss'],
    providers: [MyClass]
})
export class Child3Component implements OnInit {

    public myValue = 0;

    @Output() eventToParent: EventEmitter<number> = new EventEmitter<number>();

    msgToParent() {
        let value: number;
        value = MyClass.getRandomNumber();
        this.eventToParent.emit(value);
    }

    constructor() { }

    ngOnInit() {
        setInterval((): void => {
          this.msgToParent()
        }, 400);
    }

}
