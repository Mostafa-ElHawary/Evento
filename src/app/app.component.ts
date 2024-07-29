import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  currentLang: string;
  isNavOpen = false;

  navItems = [
    { route: 'home', label: 'home' },
    { route: 'events', label: 'events' },
    { route: 'about', label: 'about' },
    { route: 'services', label: 'services' },
    { route: 'contact', label: 'contact' },
    { route: 'terms', label: 'terms' }
  ];

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.currentLang || 'en';
    this.translate.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
    });
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.translate.use(this.currentLang);
  }

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  getLogoPath(): string {
    return this.currentLang === 'ar' ? './assets/evento-logo-ar.svg' : './assets/evento-logo-en.svg';
  }
}
