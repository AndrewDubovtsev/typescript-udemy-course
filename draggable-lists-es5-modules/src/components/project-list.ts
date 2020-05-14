import Component from './base-component';
import {DragTarget} from '../models/drag-drop';
import {Project, ProjectStatus} from '../models/project';
import {projectState} from '../state/project-state';
import {ProjectItem} from './project-item';
import {autobind} from '../decorators/autobind';

// ProjectList Class
export class ProjectList extends Component<HTMLDivElement, HTMLElement> implements DragTarget {
    assignedProjects: Project[];

    constructor(private type: 'active' | 'finished') {
        super('project-list', 'app', false, `${type}-projects`);
        this.assignedProjects = [];

        this.configure();
        this.renderContent();
    }

    @autobind
    // When you enter a draggable area
    dragOverHandler(event: DragEvent): void {
        // Only allowing dropping of plain text elements
        if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
            // By default it's not allowed to drop elements
            event.preventDefault();
            const listEl = this.element.querySelector('ul')!;
            listEl.classList.add('droppable');
        }
    }

    @autobind
    dropHandler(event: DragEvent): void {
        const prjId = event.dataTransfer!.getData('text/plain');
        projectState.moveProject(prjId, this.type === 'active' ? ProjectStatus.Active : ProjectStatus.Finished);
    }

    @autobind
    dragLeaveHandler(event: DragEvent): void {
        const listEl = this.element.querySelector('ul')!;
        listEl.classList.remove('droppable');
    }

    configure(): void {
        this.element.addEventListener('dragover', this.dragOverHandler);
        this.element.addEventListener('dragleave', this.dragLeaveHandler);
        this.element.addEventListener('drop', this.dropHandler);

        // Listeners will inform about changes in the state
        projectState.addListener((projects: Project[]) => {
            const relevantProjects = projects.filter(prj => {
                return this.type === 'active' ?
                    prj.status === ProjectStatus.Active :
                    prj.status === ProjectStatus.Finished
            });
            this.assignedProjects = relevantProjects;
            this.renderProjects();
        });
    }

    renderContent() {
        const listId = `${this.type}-projects-list`;
        this.element.querySelector('ul')!.id = listId;
        this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + ' PROJECTS';
    }

    private renderProjects() {
        const listEl = document.getElementById(`${this.type}-projects-list`)! as HTMLUListElement;
        listEl.innerHTML = '';
        // Rerender all projects
        for (const prjItem of this.assignedProjects) {
            new ProjectItem(this.element.querySelector('ul')!.id, prjItem);
        }
    }
}
