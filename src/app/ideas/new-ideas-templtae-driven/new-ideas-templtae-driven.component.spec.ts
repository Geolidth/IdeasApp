import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIdeasTempltaeDrivenComponent } from './new-ideas-templtae-driven.component';

describe('NewIdeasTempltaeDrivenComponent', () => {
  let component: NewIdeasTempltaeDrivenComponent;
  let fixture: ComponentFixture<NewIdeasTempltaeDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewIdeasTempltaeDrivenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewIdeasTempltaeDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
