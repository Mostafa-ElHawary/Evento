import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  template: ``,
})
export class LanguageSwitcherComponent implements OnInit {
  currentLang: string = 'en';

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    // Get the browser language or use a default
    const browserLang = navigator.language || navigator.language;
    this.currentLang = browserLang.split('-')[0]; // Use the primary language subtag

    // Check if the language is supported, if not fall back to 'en'
    this.currentLang = ['en', 'ar'].includes(this.currentLang)
      ? this.currentLang
      : 'en';

    // Initialize the language
    this.initializeLanguage();
  }

  initializeLanguage() {
    this.translate.setDefaultLang('en'); // Set English as fallback
    this.translate.use(this.currentLang); // Use the detected or saved language
    document.dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = this.currentLang;
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.initializeLanguage();
    // Optionally save the language preference
    localStorage.setItem('preferredLanguage', this.currentLang);
  }
}
