import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { datadogLogs } from '@datadog/browser-logs';

datadogLogs.init({
  clientToken: 'puba9863d0ede832288b246b97096257695',
  site: 'datadoghq.eu',
  service: 'Manuel',
  forwardErrorsToLogs: true,
  sessionSampleRate: 100,

});

datadogLogs.logger.info('Aplicacion Angular iniciada');

bootstrapApplication(App, appConfig)
  .catch((err) => {
    console.error('err');
    datadogLogs.logger.error('Error al iniciar la aplicacion', err);
  });
