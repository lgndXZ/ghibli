import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhibliMovieComponent } from './ghibli-movie.component';

describe('GhibliMovieComponent', () => {
  let component: GhibliMovieComponent;
  let fixture: ComponentFixture<GhibliMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhibliMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhibliMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
