import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CustomerDetailsComponent} from './customer.details.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AppMaterialModule} from '../../_shared';
import {ButterCMSService} from '../../_services';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CustomerDetailsComponent', () => {
  let component: CustomerDetailsComponent;
  let fixture: ComponentFixture<CustomerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerDetailsComponent],
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
    fixture = TestBed.createComponent(CustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
