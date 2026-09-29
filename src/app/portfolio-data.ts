// All the text and data shown on the page lives here, so updating the content
// (a new project, a new skill, a changed link) doesn't require touching the templates.

export interface ProjectImage {
  src: string;
  // Real pixel size of the file. The browser uses it to reserve space
  // before the image loads, so the page doesn't jump around.
  width: number;
  height: number;
  alt: string;
}

export interface Project {
  // Short, unique name. Used in the heading's id and to pick the card's background color.
  id: string;
  title: string;
  summary: string;
  description: string;
  highlights: string[];
  technologies: string[];
  liveUrl: string;
  repoUrl: string;
  // Optional: without a desktop screenshot the card only shows the phone (see Weather App).
  desktopImage?: ProjectImage;
  mobileImage: ProjectImage;
  // Small print under the links, e.g. when the screenshots use sample data.
  note?: string;
}

export interface Fact {
  label: string;
  value: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

// Short summary next to the intro, for someone who only skims the page.
export const facts: Fact[] = [
  { label: 'Fókusz', value: 'Angular, React, TypeScript' },
  // \u00a0 is a non-breaking space, so "-üzemeltető" never starts a new line on its own.
  { label: 'Végzettség', value: 'Hálózatépítő és\u00a0-üzemeltető technikus' },
  { label: 'Képzés', value: 'Junior frontend fejlesztő, Masterfield (2026)' },
  { label: 'Nyelv', value: 'Angol (B2)' },
];

// The order here is the order on the page.
export const projects: Project[] = [
  {
    id: 'colibri',
    title: 'Colibri Italdiszkont',
    summary: 'Weboldal a családunk dunavarsányi italdiszkontjának.',
    description:
      'Több mint 5000 termékes katalógus kereséssel és szűrőkkel, heti akciók, és egy admin felület, ahol a tulajdonos bejelentkezés után maga frissíti a kínálatot.',
    highlights: [
      'Én terveztem az oldal szerkezetét és a wireframe-eket is.',
      'A termékek, az akciók és a főoldali slider Firestore-ból jönnek, így a tartalom kódmódosítás nélkül frissíthető.',
      'A kereső ékezetek nélkül és egy elgépeléssel is megtalálja a terméket.',
      'Az admin rész lazy-loadolva töltődik be, a GitHub Actions pedig minden pushnál lefuttatja a lintet, a teszteket és a buildet, majd kiteszi az oldalt.',
    ],
    technologies: ['Angular', 'TypeScript', 'Firebase Auth', 'Firestore', 'GitHub Actions'],
    liveUrl: 'https://nmthmate.github.io/colibri-web-angular/',
    repoUrl: 'https://github.com/nmthmate/colibri-web-angular',
    desktopImage: {
      src: 'projects/colibri-desktop.webp',
      width: 1440,
      height: 900,
      alt: 'A Colibri Italdiszkont főoldala asztali nézetben: fejléc, menü és a sörök kategóriát bemutató slider.',
    },
    mobileImage: {
      src: 'projects/colibri-mobile.webp',
      width: 600,
      height: 1298,
      alt: 'A Colibri Italdiszkont főoldala mobilon.',
    },
  },
  {
    id: 'coworking',
    title: 'Coworking Booking',
    summary: 'Teremfoglaló alkalmazás coworking irodáknak.',
    description:
      'Bejelentkezés után látod a termeket, egy napi órarácson lefoglalhatsz egy szabad időpontot, és egy helyen kezelheted a saját foglalásaidat.',
    highlights: [
      'Firestore-tranzakció és előre meghatározott dokumentum-ID gondoskodik róla, hogy egy időpontot ne lehessen kétszer lefoglalni, akkor sem, ha ketten egyszerre kattintanak.',
      'Bejelentkezés e-mail-címmel és jelszóval vagy Google-fiókkal (Firebase Authentication).',
      'Security rules: mindenki csak a saját nevében foglalhat, és csak a saját foglalását mondhatja le.',
      'A szerverről jövő adatokat TanStack Query kezeli.',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase', 'TanStack Query'],
    liveUrl: 'https://coworking-booking-95b46.web.app',
    repoUrl: 'https://github.com/nmthmate/coworking-booking',
    desktopImage: {
      src: 'projects/cowork-desktop.webp',
      width: 1440,
      height: 900,
      alt: 'A Coworking Booking felülete: saját foglalások listája és egy terem napi órarácsa a foglalt időpontokkal.',
    },
    mobileImage: {
      src: 'projects/cowork-mobile.webp',
      width: 600,
      height: 1298,
      alt: 'A Coworking Booking foglalási nézete mobilon.',
    },
    note: 'A képeken mintaadatok vannak. Az élő demót regisztráció után tudod kipróbálni.',
  },
  {
    id: 'weather',
    title: 'Weather App',
    summary: 'Időjárás-alkalmazás, ami telefonra is telepíthető.',
    description:
      'Megmutatja az aktuális időjárást ott, ahol vagy, vagy bármelyik városban, amire rákeresel, óránkénti és 7 napos előrejelzéssel.',
    highlights: [
      'Keretrendszer nélkül, sima JavaScripttel írtam, az Open-Meteo API-ra építve.',
      'PWA: telepíthető a kezdőképernyőre, és a service workernek köszönhetően a felület offline is betölt.',
      'Ha nem engeded a helymeghatározást, az utoljára keresett városra, végül Budapestre áll vissza.',
      'Világos és sötét téma, a választást megjegyzi.',
    ],
    technologies: ['JavaScript', 'HTML', 'CSS', 'PWA', 'Open-Meteo API'],
    liveUrl: 'https://nmthmate.github.io/weather-app/',
    repoUrl: 'https://github.com/nmthmate/weather-app',
    mobileImage: {
      src: 'projects/weather-mobile.webp',
      width: 560,
      height: 900,
      alt: 'A Weather App sötét témában: budapesti időjárás, óránkénti és 7 napos előrejelzés.',
    },
  },
];

// My first project. It doesn't get a full card, just a line under the others.
export const earlierProject = {
  intro: 'Korábbi tanulóprojektem, egy web design stúdió oldala HTML-lel, CSS-sel és Bootstrappel:',
  title: 'FrontLine Studio',
  repoUrl: 'https://github.com/nmthmate/frontline-studio',
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    items: [
      'TypeScript',
      'JavaScript',
      'Angular',
      'React',
      'HTML',
      'CSS',
      'SCSS',
      'Tailwind CSS',
      'Bootstrap',
    ],
  },
  {
    title: 'Backend és adat',
    items: ['Firebase (Auth, Firestore)', 'Node.js', 'REST API', 'MongoDB'],
  },
  {
    title: 'Eszközök',
    items: ['Git', 'GitHub Actions', 'Vite', 'Webpack', 'Vitest', 'Jest', 'Figma'],
  },
  {
    title: 'Egyéb',
    items: ['SEO', 'Webbiztonsági alapok', 'Számítógépes hálózatok'],
  },
];

export const contact = {
  email: 'matepataky@gmail.com',
  github: 'https://github.com/nmthmate',
  linkedin: 'https://www.linkedin.com/in/n%C3%A9meth-m%C3%A1t%C3%A9-328356397',
  // Relative path, so it works under the /portfolio/ base href on GitHub Pages too.
  cv: 'cv/Nemeth_Mate_CV.pdf',
  sourceCode: 'https://github.com/nmthmate/portfolio',
};
