import { Component, ElementRef, EventEmitter, forwardRef, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgModel } from '@angular/forms';
import { isNullOrUndefined } from 'util';


@Component({
    selector: 'scui-input',
    templateUrl: './sc-input.component.html',
    //styleUrls: ['../../../../styles/components/sc-input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ScUiInputComponent),
            multi: true,
        }
    ]
})
export class ScUiInputComponent implements OnChanges, ControlValueAccessor {
    data: string;
    initialData: string;
    hideLabel = false;

    private discardInProgress = false;

    @Input() styleClass: string;
    @Input() value: string;
    @Input() inputType = 'text';
    @Input() disabled: boolean;

    @Output('valueChange') valueChange = new EventEmitter<string>();
    @ViewChild('label') label: ElementRef;

    constructor() {
    }

    ngOnChanges() {
        if (!isNullOrUndefined(this.value)) {
            this.data = this.value;
            this.initialData = this.value;
        }

        this.hideLabel = this.label.nativeElement.innerHTML.trim().length === 0;
    }

    writeValue(value: any) {
        this.data = value;
        this.initialData = value;
    }

    propagateChange = (_: any) => {
    }

    registerOnChange(fn) {
        this.propagateChange = fn;
    }

    registerOnTouched() {
    }

    save(input: NgModel, event?: Event) {
        if (event) {
            event.stopPropagation();
        }

        if (this.discardInProgress || this.data === this.initialData) {
            return;
        }
        this.initialData = this.data;
        this.propagateChange(this.data);
        this.valueChange.emit(this.data);
        input.control.markAsPristine();
    }

    discard(input: NgModel) {
        this.data = this.initialData;
        input.control.markAsPristine();
    }

    setDiscardProgress(status: boolean) {
        this.discardInProgress = status;
    }
}
