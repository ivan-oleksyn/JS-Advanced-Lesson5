/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CenzorComponent } from './cenzor.component';

describe('CenzorComponent', () => {
  let component: CenzorComponent;
  let fixture: ComponentFixture<CenzorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenzorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenzorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
