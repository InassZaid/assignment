import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataListDetailsComponent } from './data-list-details.component';

describe('DataListDetailsComponent', () => {
  let component: DataListDetailsComponent;
  let fixture: ComponentFixture<DataListDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataListDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
