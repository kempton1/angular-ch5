import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

export interface Locale {
  lang: string;
  data: Object;
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(public translate: TranslateService) {
    translate.addLangs(['en-us','zh-cn','zh-tw']);
    translate.setDefaultLang('en-us');
    translate.use('en-us');
   }

   getCurrentLanguage(){
    const browserLanguage=this.translate.getBrowserLang();
    return browserLanguage;
   }
   useLanguage(languageCode:string){
    this.translate.use(languageCode);
   }

   addTranslation(...args: Locale[]){
    const locales = [...args];

    locales.forEach(locale => {
      // use setTranslation() with the third argument set to true
      // to append translations instead of replacing them
      this.translate.setTranslation(locale.lang, locale.data, true);
    }
    )
  }
}
