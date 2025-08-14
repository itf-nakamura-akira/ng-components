import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import Samples from './samples';

describe('Samples', () => {
    let component: Samples;
    let fixture: ComponentFixture<Samples>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Samples],
            providers: [provideZonelessChangeDetection()],
        }).compileComponents();

        fixture = TestBed.createComponent(Samples);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
