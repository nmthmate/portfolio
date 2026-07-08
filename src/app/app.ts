import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillGroup {
  title: string;
  items: string[];
}

interface Project {
  title: string;
  description: string;
  status: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly name = 'Németh Máté';
  readonly role = 'Junior Frontend fejlesztő';
  readonly intro =
    'Környezetbarát, modern és jól használható webes felületeket építek, miközben folyamatosan fejlődök a frontend fejlesztés területén.';
  readonly aboutText =
    'Junior frontend fejlesztőként a tiszta architektúra, a jól strukturált kód és a gördülékeny felhasználói élmény a fő prioritásom. Az Angular, React, TypeScript és a modern webes alapok terén dolgozom, és folyamatosan bővítem tudásomat a minőségi, megbízható megoldások felé.';
  readonly skillGroups: SkillGroup[] = [
    {
      title: 'Frontend alapok',
      items: ['HTML', 'CSS', 'SCSS / Sass', 'JavaScript', 'TypeScript', 'SEO']
    },
    {
      title: 'Frontend keretrendszerek és UI',
      items: ['Angular', 'React', 'Bootstrap']
    },
    {
      title: 'Backend',
      items: ['Node.js', 'REST API']
    },
    {
      title: 'Adatbázis és felhőszolgáltatások',
      items: ['MongoDB', 'Firebase']
    },
    {
      title: 'Build eszközök és tesztelés',
      items: ['Webpack', 'Jest']
    }
  ];
  readonly projects: Project[] = [
    {
      title: 'Colibri Italdiszkont',
      description: 'Teljesen funkcionális e-commerce weboldal egy családi italdiszkontnak. Dinamikus termékkezelés, szűrési lehetőségek, akciók és Google Maps integrációval.',
      status: 'Véglegesített'
    },
    {
      title: 'FrontLine Studio',
      description: 'Régi projektből származó web design stúdió weboldala. Bootstrap és custom CSS alapokon, amely bemutatja tanulási folyamatomat a web design kezdeteiben.',
      status: 'Archivált'
    }
  ];
  readonly focusPoints = ['Angular', 'TypeScript', 'Felhasználóközpontú UX'];
  readonly contactEmail = 'matepataky@gmail.com';
  readonly socialLinks = {
    github: 'https://github.com/nmthmate',
    linkedin: 'https://www.linkedin.com/in/n%C3%A9meth-m%C3%A1t%C3%A9-328356397'
  };
  readonly currentYear = new Date().getFullYear();
}
