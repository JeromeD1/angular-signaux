import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageSeulComponent } from './affichage-seul.component';

describe('AffichageSeulComponent', () => {
  let component: AffichageSeulComponent;
  let fixture: ComponentFixture<AffichageSeulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffichageSeulComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AffichageSeulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
