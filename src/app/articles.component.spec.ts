import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ArticlesComponent } from './articles.component';

describe('ArticlesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ArticlesComponent
      ],
    }).compileComponents();
  }));
/*
  it('should create the app', () => {
    const fixture = TestBed.createComponent(ArticlesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'sawyer-portfolio'`, () => {
    const fixture = TestBed.createComponent(ArticlesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('sawyer-portfolio');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(ArticlesComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to sawyer-portfolio!');
  });
*/
});
