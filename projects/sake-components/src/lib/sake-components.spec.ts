import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SakeComponents } from './sake-components';
import { provideZonelessChangeDetection } from '@angular/core';

describe('SakeComponents', () => {
    let component: SakeComponents;
    let fixture: ComponentFixture<SakeComponents>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SakeComponents],
            providers: [provideZonelessChangeDetection()],
        }).compileComponents();

        fixture = TestBed.createComponent(SakeComponents);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
