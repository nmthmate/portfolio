import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';

// No router: it's a single page and the menu only scrolls to sections (#projektek etc.).
// With the router (and hash routing) every menu click threw a "Cannot match any routes" error.
export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners()],
};
