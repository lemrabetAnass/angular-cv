import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-cv';
  data = {
    firstName: 'Anass',
    lastName: 'LEMRABET',
    profile: 'Full Stack Developer Java / Spring Boot / Angular / Vuejs',
    bio: `Je suis développeur Full Stack avec une expertise en Spring Boot et Angular. 
    j'ai quatre ans de d'expérience dans l'industrie du développement de logiciels, 
    travaillant sur plusieurs projets dans divers domaines tels que finance, santé. <br>
    Mes compétences techniques comprennent la maitrise de Java, Spring Boot, Angular, 
    VueJs HTML/CSS, Javascript, Les API REST, MySQL, PostgreSQL. <br>
    J'ai de l'experience dans le développement d'applications Web de bout en bout et 
    d'API RESTful à l'aide de Spring Boot et d'Angular. `,
    email: 'lemrabet.anass@gmail.com',
    address: 'Kénitra, Maroc',
    phone: '+212 634321874',
    languages: [
      {name: 'Arabe', level : 'maternelle'}, 
      {name: 'Français', level: 'courant'}, 
      {name: 'Anglais', level: 'courant'}
    ],
    softSkills: [
      'Motivé',
      'Curieux',
      'Passioné'
    ],
    experiences: [
      {
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
      },
      {
        type: "work",
        startDate: new Date(2019, 2, 1),
        endDate: new Date(2021, 8, 29),
        roleName: 'Développeur full stack Spring/Angular',
        companyName: 'Elhouti & Co',
        companyAddress: 'Kénitra, Maroc',
        projects: [
          {
            name: 'VitalSoft',
            description: 'Application SAAS pour la gestion des pharmacies.',
            missions: [
              'Participation aux différentes phases de développement.',
              'Développement des services web REST avec Spring et Front-End avec Angular.',
              'Tests unitaires, tests d’intégrations avec Junit et tests end-to-end.'
            ],
            technologies: [
              'Jhipster', 'Spring Boot', 'Angular 8', 'PostgreSQL', 'RxJs', 'PrimeNg', 'Integration test', 'e2e test'
            ]
          },
          {
            name: 'TailoSoft',
            description: 'Application Web de la société.',
            missions: [
              'Refonte du site web.',
              'Assurer la responsiveness du site web.',
              'Intégrer un chatbot Messenger.'
            ],
            technologies: [
              'Angular 8', 'CSS'
            ]
          },
          {
            name: 'SBSwissBusiness',
            description: 'Application web pour un fiduciaire en Suisse',
            missions: [
              'Développement des services web REST avec Spring et Front-End avec Angular.',
              'Migration de la base de données.',
              'Tests unitaires, tests d’intégrations avec Junit et tests e2e.'
            ],
            technologies: [
              'Microservice Architecture', 'Java', 'JHipster', 'Spring Boot', 'RestFul API', 
              'RxJs', 'PrimeNg', 'SQL', 'Inegration Tests', 'E2e Tests'
            ]
          }
        ]
      },
      /* {
        type: 'internship',
        startDate: new Date(2018, 10, 1),
        endDate: new Date(2019, 2, 29),
        roleName: 'Stage - Développeur full stack',
        companyName: 'Mounchaat',
        companyAddress: 'Kenitra, Maroc',
        projects: [
          {
            missions: [
              'Développement des applications web.'
            ],
            technologies: [
              'VueJs2', 'jQuery', 'Jest Unit Testing'
            ]
          }
        ]
      } */
    ],
    educations: [
      {
        type: "study",
        startDate: new Date(2016, 9, 1),
        endDate: new Date(2018, 10, 1),
        name: 'Master spécialisé en Génie Logiciel pour le Cloud',
        universityName: 'Université Ibn Tofail',
        universityAddress: 'Kenitra, Maroc'
      },
      {
        type: "study",
        startDate: new Date(2013, 9, 1),
        endDate: new Date(2015, 10, 1),
        name: 'Licence fondamentale en Ingénierie des Systèmes d’Information.',
        universityName: 'Université Ibn Tofail',
        universityAddress: 'Kenitra, Maroc'
      },
      {
        type: "study",
        startDate: new Date(2011, 9, 1),
        endDate: new Date(2013, 10, 1),
        name: 'DEUG en Sciences Mathématiques et Informatiques',
        universityName: 'Université Ibn Tofail',
        universityAddress: 'Kenitra, Maroc'
      }
    ]
  }

  haha(value: any) {
    console.log("value : ", value);
  }
}
