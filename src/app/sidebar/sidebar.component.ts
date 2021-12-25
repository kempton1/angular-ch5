import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {locale as english} from 'src/assets/i18n/en-us';
import {locale as simpifiedChinese} from 'src/assets/i18n/zh-cn';
import {locale as traditionalChinese} from 'src/assets/i18n/zh-tw';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  currentLanguage = 'en-us';

  constructor(private translationService: TranslationService) { 
    this.translationService.addTranslation(english,simpifiedChinese,traditionalChinese);
  }

  ngOnInit(): void {
    this.currentLanguage = this.translationService.getCurrentLanguage();
  }

  onLanguageChange(language:string){
    this.translationService.useLanguage(language);
  }

}
