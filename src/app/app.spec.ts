import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { projects } from './portfolio-data';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  // Creates the component and waits until the template is rendered.
  async function render(): Promise<HTMLElement> {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    return fixture.nativeElement as HTMLElement;
  }

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the intro heading', async () => {
    const compiled = await render();
    expect(compiled.querySelector('h1')?.textContent).toContain('Máté vagyok');
  });

  it('should render every project with a live and a source link', async () => {
    const compiled = await render();
    const cards = compiled.querySelectorAll('.project');
    expect(cards.length).toBe(projects.length);

    cards.forEach((card, index) => {
      const hrefs = Array.from(card.querySelectorAll('a')).map((link) => link.getAttribute('href'));
      expect(hrefs).toContain(projects[index].liveUrl);
      expect(hrefs).toContain(projects[index].repoUrl);
    });
  });

  // Catches a renamed section id that would silently break the menu.
  it('should link every menu item to an existing section', async () => {
    const compiled = await render();
    const menuLinks = Array.from(
      compiled.querySelectorAll<HTMLAnchorElement>('.site-nav a[href^="#"]'),
    );
    expect(menuLinks.length).toBeGreaterThan(0);

    for (const link of menuLinks) {
      const id = link.getAttribute('href')!.slice(1);
      expect(compiled.querySelector(`#${id}`)).not.toBeNull();
    }
  });

  it('should offer the CV as a download', async () => {
    const compiled = await render();
    const cvLinks = compiled.querySelectorAll('a[download]');
    expect(cvLinks.length).toBeGreaterThan(0);
    cvLinks.forEach((link) => expect(link.getAttribute('href')).toBe('cv/Nemeth_Mate_CV.pdf'));
  });
});
