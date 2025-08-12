import { Component, provideZonelessChangeDetection, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Appearance } from '../appearance';
import { Color } from '../color';
import { Size } from '../size';
import { Button } from './button';

@Component({
    template: `
        <button sk-button [appearance]="appearance()" [color]="color()" [size]="size()" [disabled]="disabled()">
            Test Button
        </button>
    `,
    standalone: true,
    imports: [Button],
})
class TestHostComponent {
    appearance = signal<Appearance>('filled');
    color = signal<Color>('primary');
    size = signal<Size>('medium');
    disabled = signal<boolean | string>(false);
}

describe('Button', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let component: TestHostComponent;
    let buttonEl: HTMLButtonElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestHostComponent],
            providers: [provideZonelessChangeDetection()],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        component = fixture.componentInstance;
        await fixture.whenStable();
        buttonEl = fixture.debugElement.query(By.css('button')).nativeElement;
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
        expect(buttonEl).toBeTruthy();
    });

    it('should have the base `sk-button` class', () => {
        expect(buttonEl.classList.contains('sk-button')).toBe(true);
    });

    it('should have default classes for appearance, color, and size', () => {
        expect(buttonEl.classList.contains('filled')).toBe(true);
        expect(buttonEl.classList.contains('primary')).toBe(true);
        expect(buttonEl.classList.contains('medium')).toBe(true);
    });

    it('should not have the disabled class by default', () => {
        expect(buttonEl.classList.contains('disabled')).toBe(false);
    });

    it('should update appearance class when input changes', async () => {
        component.appearance.set('outlined');
        await fixture.whenStable();
        expect(buttonEl.classList.contains('outlined')).toBe(true);
        expect(buttonEl.classList.contains('filled')).toBe(false);

        component.appearance.set('text');
        await fixture.whenStable();
        expect(buttonEl.classList.contains('text')).toBe(true);
        expect(buttonEl.classList.contains('outlined')).toBe(false);
    });

    it('should update color class when input changes', async () => {
        component.color.set('secondary');
        await fixture.whenStable();
        expect(buttonEl.classList.contains('secondary')).toBe(true);
        expect(buttonEl.classList.contains('primary')).toBe(false);

        component.color.set('warn');
        await fixture.whenStable();
        expect(buttonEl.classList.contains('warn')).toBe(true);
        expect(buttonEl.classList.contains('secondary')).toBe(false);
    });

    it('should update size class when input changes', async () => {
        component.size.set('small');
        await fixture.whenStable();
        expect(buttonEl.classList.contains('small')).toBe(true);
        expect(buttonEl.classList.contains('medium')).toBe(false);

        component.size.set('large');
        await fixture.whenStable();
        expect(buttonEl.classList.contains('large')).toBe(true);
        expect(buttonEl.classList.contains('small')).toBe(false);
    });

    describe('disabled input', () => {
        it('should add the disabled class and attribute when `disabled` is true', async () => {
            component.disabled.set(true);
            await fixture.whenStable();
            expect(buttonEl.classList.contains('disabled')).toBe(true);
            expect(buttonEl.hasAttribute('disabled')).toBe(true);
        });

        it('should remove the disabled class and attribute when `disabled` is false', async () => {
            component.disabled.set(true);
            await fixture.whenStable();
            expect(buttonEl.classList.contains('disabled')).toBe(true);
            expect(buttonEl.hasAttribute('disabled')).toBe(true);

            component.disabled.set(false);
            await fixture.whenStable();
            expect(buttonEl.classList.contains('disabled')).toBe(false);
            expect(buttonEl.hasAttribute('disabled')).toBe(false);
        });

        it('should be disabled when `disabled` input is an empty string', async () => {
            component.disabled.set('');
            await fixture.whenStable();
            expect(buttonEl.classList.contains('disabled')).toBe(true);
            expect(buttonEl.hasAttribute('disabled')).toBe(true);
        });

        it('should NOT be disabled when `disabled` input is the string "false"', async () => {
            component.disabled.set('false');
            await fixture.whenStable();
            expect(buttonEl.classList.contains('disabled')).toBe(false);
            expect(buttonEl.hasAttribute('disabled')).toBe(false);
        });
    });
});
