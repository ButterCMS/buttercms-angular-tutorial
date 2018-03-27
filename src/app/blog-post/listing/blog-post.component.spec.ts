import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BlogPostComponent} from './blog-post.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AppMaterialModule} from '../../_shared';
import {ButterCMSService} from '../../_services';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('BlogPostComponent', () => {
    let component: BlogPostComponent;
    let fixture: ComponentFixture<BlogPostComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BlogPostComponent],
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
        fixture = TestBed.createComponent(BlogPostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
