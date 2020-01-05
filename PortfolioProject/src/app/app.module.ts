// This is meant only as a reference, you can copy the icons you want in a similar manner

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGem } from '@fortawesome/free-regular-svg-icons';
import { faCircle, faAt, faCertificate, faTrophy, faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faCodepen, faInstagram, faYoutube, faLinkedin, faMedium, faHtml5, faCss3Alt, faJsSquare, faReact, faAngular } from '@fortawesome/free-brands-svg-icons';

import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { ResumeComponent } from './components/resume/resume.component';

library.add(faGithub, faCodepen, faMedium, faInstagram, faYoutube, faLinkedin, faHtml5, faCss3Alt, faJsSquare, faReact, faAngular, faGem, faCircle, faAt, faTrophy, faCertificate, faBars);

const appRoutes: Routes = [
  { path: 'resume', component: ResumeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ResumeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }