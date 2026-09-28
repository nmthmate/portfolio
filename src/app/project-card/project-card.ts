import { Component, input } from '@angular/core';
import { Project } from '../portfolio-data';

// One project on the page: screenshots on the left, text and links on the right.
@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  readonly project = input.required<Project>();
}
