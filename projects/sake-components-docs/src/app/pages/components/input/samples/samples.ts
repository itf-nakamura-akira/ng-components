import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-samples',
    imports: [],
    templateUrl: './samples.html',
    styleUrl: './samples.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Samples {}
