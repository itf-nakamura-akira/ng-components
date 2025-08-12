import { booleanAttribute, ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Color } from '../color';
import { Size } from '../size';

/**
 * Component attribute.
 */
const attribute = 'sk-button';

/**
 * Button Component.
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
        '[class]': 'color() + " " + size()',
        '[class.disabled]': 'disabled()',
        '[attr.disabled]': 'disabled() ? "" : null',
    },
    styleUrl: './button.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Button {
    /**
     * Button color.
     */
    readonly color = input<Color>('primary');

    /**
     * Button size.
     */
    readonly size = input<Size>('medium');

    /**
     * Whether the button is disabled.
     */
    readonly disabled = input(false, { transform: booleanAttribute });
}
