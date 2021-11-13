import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

// @customElement('create-todo')
export class CreateTodo extends LitElement {
    @property({attribute: false})
    description: string = 'Enter your todo details';

    @property({attribute: false})
    dueDate: Date | undefined;

    @property({attribute: false})
    isCompleted: boolean = false;

    get todoData(): {description: string, dueDate?: Date, isCompleted: boolean} {
        return {
            description: this.description,
            dueDate: this.dueDate,
            isCompleted: this.isCompleted
        }
    }

    private _updateDescription(e: InputEvent) {
        const inputTarget = e.target as HTMLInputElement;
        this.description = inputTarget.value;
        console.log(this.todoData);
    }

    render() {
        return html`
            <input type="text" .value=${this.todoData.description} @input=${this._updateDescription}>
            <p>${this.description}</p>
        `;
    }
}