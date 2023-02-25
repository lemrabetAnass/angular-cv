import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLineComponent } from './time-line.component';

describe('TimeLineComponent', () => {
  let component: TimeLineComponent;
  let fixture: ComponentFixture<TimeLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeLineComponent);
    component = fixture.componentInstance;
    component.data =  {
      type: "work",
      startDate: new Date(2021, 9, 1),
      endDate: new Date(2023, 0, 29),
      roleName: 'Ingénieur d’étude et développement',
      companyName: 'Cegedim Maroc',
      companyAddress: 'Rabat',
      projects: [
        {
          name: 'SmartRh',
          description: 'Une application complète qui permet la gestion des ressources humaines.',
          missions: [
            'Participation à la migration de JQuery à Vuejs.',
            'Participation à la maintenance de l’application.',
            'Tests unitaires.'
          ],
          technologies: [
            'VueJs2', 'jQuery', 'Jest Unit Testing'
          ]
        }
      ]
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
