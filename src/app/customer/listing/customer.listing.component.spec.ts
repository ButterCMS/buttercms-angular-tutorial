import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CustomerComponent} from './customer.listing.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AppMaterialModule} from '../../shared';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CustomerComponent', () => {
    let component: CustomerComponent;
    let fixture: ComponentFixture<CustomerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CustomerComponent],
            imports: [
                AppMaterialModule,
                RouterTestingModule,
                HttpClientTestingModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CustomerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
