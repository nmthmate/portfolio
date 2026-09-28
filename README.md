# Németh Máté Portfólió

Angular-alapú személyes portfólióoldal a projektjeimmel, egy rövid bemutatkozással és a letölthető CV-mmel.

Élő oldal: https://nmthmate.github.io/portfolio/

## Projektek a portfólióban

- Colibri Italdiszkont (Angular, Firebase): https://github.com/nmthmate/colibri-web-angular
- Coworking Booking (React, TypeScript, Firebase): https://github.com/nmthmate/coworking-booking
- Weather App (JavaScript, PWA): https://github.com/nmthmate/weather-app
- FrontLine Studio (korábbi tanulóprojekt): https://github.com/nmthmate/frontline-studio

## Felépítés

- `src/app/portfolio-data.ts`: az oldal összes szövege és adata. Ha új projektet vagy skillt akarok felvenni, általában elég ezt szerkeszteni.
- `src/app/app.*`: az oldal váza (fejléc, bemutatkozás, Rólam, Kapcsolat).
- `src/app/project-card/`: egy projekt kártyája képekkel, leírással és linkekkel.
- `src/styles.scss`: színek, betűtípusok, gombok.
- `src/fonts/`: a betűtípusok (Bricolage Grotesque, Instrument Sans), helyben tárolva.
- `public/projects/`: képernyőképek a projektekről.
- `public/cv/`: a letölthető CV.

## Technológiák

- Angular 21
- TypeScript
- SCSS
- Vitest
- GitHub Pages

## Helyi futtatás

```bash
npm install
npm start
```

Ezután az oldal a `http://localhost:4200/` címen érhető el.

## Tesztek

```bash
npm test
```

## Build

```bash
npm run build
```

## Deploy

```bash
npm run deploy
```

Ez a script buildeli az alkalmazást, majd a `gh-pages` branchre publikálja a kész statikus fájlokat.
