import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TopnavComponent} from './topnav.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AppMaterialModule} from '../_shared';
import {ButterCMSService} from '../_services';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TopnavComponent', () => {
    let component: TopnavComponent;
    let fixture: ComponentFixture<TopnavComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TopnavComponent],
            providers: [
                ButterCMSService
            ],
            imports: [
                AppMaterialModule,
                RouterTestingModule,
                HttpClientTestingModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TopnavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
