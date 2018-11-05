import {Component} from '@angular/core'
import {ProjectService} from './project.service'

@Component({
	selector: 'projects',
	template: `
		<h2>{{title}}</h2>
		<ul>
			<li *ngFor="let project of projects">
				<a href="{{ project.href }}" title="{{ project.title }}">{{ project.title }}</a>
			</li>
		</ul>
	`,
	providers: [ ProjectService ]
})
export class ProjectsComponent {
	title = "Projects";
	projects;

	constructor(projectService: ProjectService) {
		this.projects = projectService.getProjects();
	}
}