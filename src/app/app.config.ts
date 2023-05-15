import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { withHashLocation } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withHashLocation())]
};
