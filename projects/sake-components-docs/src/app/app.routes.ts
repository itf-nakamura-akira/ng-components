import { Route, Routes } from '@angular/router';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const componentLoaders: Record<string, { samples: () => Promise<any>; api: () => Promise<any> }> = {
    button: {
        samples: () => import('./pages/components/button/samples/samples'),
        api: () => import('./pages/components/button/api/api'),
    },
    input: {
        samples: () => import('./pages/components/input/samples/samples'),
        api: () => import('./pages/components/input/api/api'),
    },
};
type ComponentName = keyof typeof componentLoaders;
function createComponentRoutes(componentName: ComponentName): Route[] {
    const capitalizedName = componentName.charAt(0).toUpperCase() + componentName.slice(1);
    const loaders = componentLoaders[componentName];

    return [
        {
            path: `components/${componentName}/samples`,
            loadComponent: loaders.samples,
            title: `${capitalizedName} - Samples`,
        },
        {
            path: `components/${componentName}/api`,
            loadComponent: loaders.api,
            title: `${capitalizedName} - API`,
        },
    ];
}
const componentNames = Object.keys(componentLoaders) as ComponentName[];
const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home'),
        title: 'Home',
    },
    ...componentNames.flatMap((name) => createComponentRoutes(name)),
    {
        path: '**',
        redirectTo: 'home',
    },
];

export { routes };
