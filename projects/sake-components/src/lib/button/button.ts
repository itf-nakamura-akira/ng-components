import { booleanAttribute, ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Color } from '../color';
import { Size } from '../size';

/**
 * Component attribute.
 */
const attribute = 'sk-button';

/**
 * Defines the possible appearance styles for a Button component.
 * - `filled`: The component has a solid background color.
 * - `outlined`: The component has a transparent background and a visible border.
 * - `text`: The component has a transparent background and no visible border.
 */
export type ButtonAppearance = 'filled' | 'outlined' | 'text';

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
        '[class]': 'color() + " " + size() + " " + appearance()',
        '[class.disabled]': 'disabled()',
        '[class.rounded]': 'rounded()',
        '[attr.disabled]': 'disabled() ? "" : null',
    },
    styleUrl: './button.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Button {
    /**
     * Button appearance.
     */
    readonly appearance = input<ButtonAppearance>('filled');

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

    /**
     * Whether the button is rounded.
     */
    readonly rounded = input(false, { transform: booleanAttribute });
}
