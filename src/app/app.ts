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
      title: 'Coworking Booking',
      description: 'Szoba-/tárgyalófoglaló alkalmazás coworking irodák számára. Bejelentkezett felhasználók megnézhetik a termeket, óránkénti bontásban lefoglalhatnak egy szabad időpontot, és kezelhetik a saját foglalásaikat.',
      status: 'Kész, publikálva',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS', 'TanStack Query'],
      repoUrl: 'https://github.com/nmthmate/coworking-booking',
      liveUrl: 'https://coworking-booking-95b46.web.app',
      note: 'Firestore tranzakcióval védett foglalási logika, dupla foglalás elleni védelemmel.'
    },
    {
      title: 'Colibri Italdiszkont',
      description: 'Weboldal egy családi italdiszkont számára Angularban, Firebase/Firestore háttérrel: dinamikus termékkatalógus kereséssel és szűréssel, valamint egy külön admin felület, ahol a tulajdonos bejelentkezve önállóan frissítheti a termékeket, akciókat és a főoldali kiemeléseket.',
      status: 'Kész, publikálva',
      technologies: ['Angular', 'TypeScript', 'Firebase', 'Firestore', 'CI/CD'],
      repoUrl: 'https://github.com/nmthmate/colibri-web-angular',
      liveUrl: 'https://nmthmate.github.io/colibri-web-angular/',
      note: 'Admin felület lazy-loadolva, hogy a publikus oldal gyors maradjon; automatizált tesztekkel és GitHub Actions CI/CD-vel.'
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
