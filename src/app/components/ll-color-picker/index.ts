import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
    selector: 'll-color-picker',
    templateUrl: './template.html',
    styleUrls: ['./styles.scss']
})
export class ColorPickerComponent {
    @Input() colors: string [] = [];
    @Output() selected = new EventEmitter<string>();
    selectedColor = "lightgray";
    isSelectorVisible = false;

    @HostListener('blur') onBlur() {
        this.showSelector(false);
    }

    showSelector(value: boolean) {
        this.isSelectorVisible = value;
    }

    selectColor(color: string) {
        this.showSelector(false);
        this.selectedColor = color;
        this.selected.next(color);
    }
}
