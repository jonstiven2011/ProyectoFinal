/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EleProFinalComponent } from './ele-pro-final.component';

describe('EleProFinalComponent', () => {
  let component: EleProFinalComponent;
  let fixture: ComponentFixture<EleProFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EleProFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EleProFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
