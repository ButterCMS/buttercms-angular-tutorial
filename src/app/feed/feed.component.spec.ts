import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FeedComponent} from './feed.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AppMaterialModule} from '../_shared';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('FeedComponent', () => {
    let component: FeedComponent;
    let fixture: ComponentFixture<FeedComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FeedComponent],
            imports: [
                AppMaterialModule,
                RouterTestingModule,
                HttpClientTestingModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FeedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
