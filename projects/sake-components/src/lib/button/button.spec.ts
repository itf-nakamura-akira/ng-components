import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button } from './button';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Button', () => {
    let component: Button;
    let fixture: ComponentFixture<Button>;
    let buttonElement: HTMLButtonElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Button],
            providers: [provideZonelessChangeDetection()],
        }).compileComponents();

        fixture = TestBed.createComponent(Button);
        component = fixture.componentInstance;
        buttonElement = fixture.nativeElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('size', () => {
        it('should have "medium" as default size', () => {
            expect(component.size()).toBe('medium');
            expect(buttonElement.classList).toContain('medium');
        });

        it('should set size class to "small"', () => {
            fixture.componentRef.setInput('size', 'small');
            fixture.detectChanges();
            expect(buttonElement.classList).toContain('small');
        });

        it('should set size class to "large"', () => {
            fixture.componentRef.setInput('size', 'large');
            fixture.detectChanges();
            expect(buttonElement.classList).toContain('large');
        });
    });

    describe('color', () => {
        it('should have "primary" as default color', () => {
            expect(component.color()).toBe('primary');
            expect(buttonElement.classList).toContain('primary');
        });

        it('should set color class to "secondary"', () => {
            fixture.componentRef.setInput('color', 'secondary');
            fixture.detectChanges();
            expect(buttonElement.classList).toContain('secondary');
        });
    });

    describe('disabled', () => {
        it('should not be disabled by default', () => {
            expect(component.disabled()).toBe(false);
            expect(buttonElement.classList).not.toContain('disabled');
            expect(buttonElement.hasAttribute('disabled')).toBe(false);
        });

        it('should be disabled when disabled is true', () => {
            fixture.componentRef.setInput('disabled', true);
            fixture.detectChanges();

            expect(component.disabled()).toBe(true);
            expect(buttonElement.classList).toContain('disabled');
            expect(buttonElement.hasAttribute('disabled')).toBe(true);
        });

        it('should be disabled when disabled is an empty string', () => {
            fixture.componentRef.setInput('disabled', '');
            fixture.detectChanges();

            expect(component.disabled()).toBe(true);
            expect(buttonElement.classList).toContain('disabled');
            expect(buttonElement.hasAttribute('disabled')).toBe(true);
        });
    });
});
