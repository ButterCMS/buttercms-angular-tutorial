import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {ButterCMSService} from './_services';
import {AppMaterialModule} from './_shared';
import {TopnavComponent} from './topnav/topnav.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                ButterCMSService
            ],
            declarations: [
                AppComponent,
                TopnavComponent
            ],
            imports: [
                AppMaterialModule,
                HttpClientTestingModule,
                RouterTestingModule
            ]
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it(`should have as title 'app'`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('app');
    }));
});
