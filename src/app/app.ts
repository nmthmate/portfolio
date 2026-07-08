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
  technologies: string[];
  repoUrl: string;
  liveUrl?: string;
  note?: string;
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
    'Letisztult, reszponzív és jól használható frontend felületeket építek, miközben folyamatosan mélyítem a tudásomat Angularban, Reactben és TypeScriptben.';
  readonly aboutText =
    'Junior frontend fejlesztőként számomra a tiszta architektúra, az átgondolt komponensstruktúra és a megbízható felhasználói élmény a legfontosabb. Olyan projekteken dolgozom, ahol a modern frontend alapokat gyakorlati megoldásokkal kapcsolhatom össze, és minden munkával tudatosan fejlődhetek tovább.';
  readonly skillGroups: SkillGroup[] = [
    {
      title: 'Frontend és UI',
      items: [
        'HTML',
        'CSS',
        'JavaScript',
        'Angular',
        'React',
        'Felhasználói felületek tervezési szempontjai',
        'SEO'
      ]
    },
    {
      title: 'Fejlesztési eszközök és integráció',
      items: [
        'Node.js',
        'Jest',
        'Webpack',
        'Firebase',
        'REST',
        'NoSQL alapok',
        'JavaScript - NoSQL integráció',
        'Verziókövetés, csapatmunka módszerek, GitHub'
      ]
    },
    {
      title: 'IT és hálózati háttér',
      items: [
        'Általános IT ismeret',
        'Internetes biztonság',
        'Hálózati alapismeretek',
        'Rendszerüzemeltetési alapok'
      ]
    }
  ];
  readonly projects: Project[] = [
    {
      title: 'Colibri Italdiszkont',
      description: 'E-commerce szemléletű weboldal egy családi italdiszkont számára, dinamikus termékkatalógussal, szűréssel, kiemelt akciókkal és Google Maps integrációval.',
      status: 'Fejlesztés alatt',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'JSON', 'Google Maps API'],
      repoUrl: 'https://github.com/nmthmate/colibri-web',
      note: 'Az élő demó jelenleg nincs publikálva, a forráskód már elérhető.'
    },
    {
      title: 'FrontLine Studio',
      description: 'Korai tanulóprojektem egy web design stúdió számára. Bootstrapre és egyedi CSS-re épül, és jól mutatja, honnan indult a frontend iránti érdeklődésem.',
      status: 'Archivált',
      technologies: ['HTML5', 'CSS3', 'Bootstrap 5'],
      repoUrl: 'https://github.com/nmthmate/frontline-studio',
      note: 'Korai referencia, amely a fejlődési utamat dokumentálja.'
    }
  ];
  readonly focusPoints = ['Angular', 'TypeScript', 'Reszponzív UI'];
  readonly contactEmail = 'matepataky@gmail.com';
  readonly socialLinks = {
    github: 'https://github.com/nmthmate',
    linkedin: 'https://www.linkedin.com/in/n%C3%A9meth-m%C3%A1t%C3%A9-328356397'
  };
  readonly currentYear = new Date().getFullYear();
}
