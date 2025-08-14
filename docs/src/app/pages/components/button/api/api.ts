import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-api',
    imports: [],
    templateUrl: './api.html',
    styleUrl: './api.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Api {}
