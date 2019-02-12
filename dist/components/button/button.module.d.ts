import { EventEmitter, OnInit } from '@angular/core';
export declare class ButtonComponent implements OnInit {
    text: string;
    disabled: boolean;
    onClick: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
}
export declare class ButtonModule {
}
