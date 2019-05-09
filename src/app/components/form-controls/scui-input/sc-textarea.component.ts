import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ScInputComponent } from './sc-input.component';

@Component({
    selector: 'sc-textarea',
    styleUrls: ['../../../../styles/components/sc-input.component.scss'],
    templateUrl: './sc-textarea.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ScTextareaComponent),
            multi: true,
        }
    ]
})
export class ScTextareaComponent extends ScInputComponent {
    showCounter = false;

    @Input() charCount: number;
    @Input() rowCount = 3;

    constructor() {
        super();
    }
}
