import { Component, signal } from '@angular/core';
import { contact, earlierProject, facts, projects, skillGroups } from './portfolio-data';
import { ProjectCard } from './project-card/project-card';

@Component({
  selector: 'app-root',
  imports: [ProjectCard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly facts = facts;
  protected readonly projects = projects;
  protected readonly earlierProject = earlierProject;
  protected readonly skillGroups = skillGroups;
  protected readonly contact = contact;
  protected readonly currentYear = new Date().getFullYear();

  // true for a few seconds after copying, the button shows "Kimásolva" meanwhile
  protected readonly emailCopied = signal(false);
  private copyResetTimer?: ReturnType<typeof setTimeout>;

  protected async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.contact.email);
    } catch {
      // Clipboard API can be blocked (old browser, no permission) - open the mail app instead.
      window.location.href = `mailto:${this.contact.email}`;
      return;
    }

    this.emailCopied.set(true);
    // restart the timer if the button is clicked again before it resets
    clearTimeout(this.copyResetTimer);
    this.copyResetTimer = setTimeout(() => this.emailCopied.set(false), 2500);
  }
}
