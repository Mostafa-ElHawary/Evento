import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  constructor(private TranslateService: TranslateService) {}
  translate(event: any) {
    this.TranslateService.use(event.target.value);
  }
  
}
