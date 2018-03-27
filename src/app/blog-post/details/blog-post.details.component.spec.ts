import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BlogPostDetailsComponent} from './blog-post.details.component';
import {AppMaterialModule} from '../../_shared';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('CustomerDetailsComponent', () => {
    let component: BlogPostDetailsComponent;
    let fixture: ComponentFixture<BlogPostDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BlogPostDetailsComponent],
            imports: [
                AppMaterialModule,
                RouterTestingModule,
                HttpClientTestingModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlogPostDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
