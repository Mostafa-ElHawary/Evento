import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  navItems = [
    { route: 'home', label: 'Home' },
    { route: 'events', label: 'Events' },
    { route: 'about', label: 'About' },
    { route: 'services', label: 'Services' },
    { route: 'contact', label: 'Contact with us' },
    { route: 'terms', label: 'Terms' },
  ];

  currentLang: string;

  constructor(private translate: TranslateService) {
    this.currentLang = translate.currentLang || 'en';
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.translate.use(this.currentLang);
    document.dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
  }

  getLogoPath(): string {
    return this.currentLang === 'ar'
      ? './assets/evento-logo-ar.svg'
      : './assets/evento-logo-en.svg';
  }

  isNavOpen: boolean = false;
  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }
}
