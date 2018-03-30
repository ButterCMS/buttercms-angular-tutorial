import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloYouComponent } from './hello-you.component';

describe('HelloYouComponent', () => {
  let component: HelloYouComponent;
  let fixture: ComponentFixture<HelloYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloYouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
