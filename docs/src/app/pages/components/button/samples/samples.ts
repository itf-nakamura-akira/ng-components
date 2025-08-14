import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Button } from 'sake-components';

@Component({
    selector: 'app-samples',
    imports: [Button],
    templateUrl: './samples.html',
    styleUrl: './samples.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Samples {}
