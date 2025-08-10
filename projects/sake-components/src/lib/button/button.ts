import { ChangeDetectionStrategy, Component } from '@angular/core';

const attribute = 'sk-button';

/**
 * Button Component
 */
@Component({
    selector: `
        button[${attribute}],
        input[type=button][${attribute}],
        input[type=file][${attribute}]
    `,
    imports: [],
    templateUrl: './button.html',
    host: {
        class: `${attribute}`,
    },
    styleUrl: './button.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Button {}
