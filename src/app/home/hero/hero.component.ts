import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  // currentLang : string;

  constructor(private TranslateService: TranslateService) {}
  translate(event: any) {
    this.TranslateService.use(event.target.value);
  }
  
}

//  constructor(private translate: TranslateService) {
//   this.currentLang = this.translate.currentLang || 'en';
//   this.translate.onLangChange.subscribe((event) => {
//     this.currentLang = event.lang;
//   });

// }

// constructor(private TranslateService: TranslateService) {
//   this.currentLang = translate.currentLang || 'en';
// }

// toggleLanguage() {
//   this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
//   this.translate.use(this.currentLang);
//   document.dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
// }
