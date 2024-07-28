import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-child-home1',
  templateUrl: './child-home1.component.html',
  styleUrls: ['./child-home1.component.css']
})
export class ChildHome1Component {

  currentLang: string;

  constructor(private translate: TranslateService) {
    this.currentLang = translate.currentLang || 'en';
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.translate.use(this.currentLang);
    document.dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
  }
}
