import { Component, Input } from '@angular/core';

@Component({
    selector: 'll-button',
    templateUrl: './template.html',
    styleUrls: ['./styles.scss']
})
export class ButtonComponent {
    @Input() color: string = '#f7292a';
    @Input() type: string;
    @Input() disabled: boolean = false;
}
