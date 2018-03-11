import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material';

@Injectable()
export class AppPaginatorIntl extends MatPaginatorIntl {

    // type-casting to any to work around false positive
    // TS2448: Block-scoped variable 'getRangeLabel' used before its declaration.
    private _getRangeLabel: (page: number, pageSize: number, length: number) => string = (<any>this).getRangeLabel;

    getRangeLabel = (page: number, pageSize: number, length: number) => {
        if (length === null || length === undefined || Number.isNaN(length)) {
            return '--';
        } else {
            return this._getRangeLabel(page, pageSize, length) + ' items';
        }
    }
}
