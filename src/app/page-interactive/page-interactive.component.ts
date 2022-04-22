import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-page-interactive',
  templateUrl: './page-interactive.component.html',
  styleUrls: ['./page-interactive.component.scss']
})
export class PageInteractiveComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { icon: "interactive-02.png", href1: "https://my.gov.uz/oz/vaccine-info", href2: "https://my.gov.uz/oz/service/403", title: "Запись и проверка статуса вакцинации от COVID-19", cols: 3, rows: 1 },
          { icon: "interactive-01.png", href1: "https://my.gov.uz/oz/info-by-tin", href2: "https://my.gov.uz/oz/juridicalCabinet/service/view?id=77", title: "Yur shaxslar haqida to'liq ma'lumot", cols: 3, rows: 1 },
          { icon: "interactive-01.png", href1: "https://my.gov.uz/oz/death-certificate-v1/passport", href2: "https://my.gov.uz/oz/service/303", title: "Vafot etgan yoki etmaganligi haqida to'liq ma'lumot", cols: 3, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Pensiya(posobiya) haqida to'liq ma'lumot", cols: 3, rows: 1 },
          { icon: "interactive-01.png", href1: "https://my.gov.uz/oz/mental-illness-dispensary-v3/info-applicant/create", href2: "https://my.gov.uz/oz/service/334", title: "Ruhiy kasalliklar dispansirada ro'yhatda turish turmasligi", cols: 3, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Narko dispansirada ro'yhatda turish turmasligi", cols: 3, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "INPS ma'lumoti", cols: 3, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Haydovchilik guvohnomasi haqida ma'lumot", cols: 3, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Kadastr ma'lumotlari pinfl buyicha cadastr raqamlari", cols: 3, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Jismoniy shaxslarniy ishlagan joylari haqida ma'lumot", cols: 3, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Jismoniy shaxslarni qarzdorligi", cols: 3, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Turmush qurgan qurmaganligi haqida to'liq ma'lumot", cols: 3, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Ajrashgan ajrashmaganligi haqida to'liq ma'lumot", cols: 3, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Jismoniy shaxlarni kuchmas mulklari haqida ma'lumot pinfl buyicha", cols: 3, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Yur shaxlarni kuchmas mulklari haqida ma'lumot INN buyicha", cols: 3, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Jismoniy shaxslarni yashash joyi haqida to'liq ma'lumot", cols: 3, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Avtotransport haqida to'liq ma'lumot (tex passport seria raqami buyicha)", cols: 3, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Elektr energiyadan qarzdorligi bor yo'qligi haqida ma'lumot", cols: 3, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Jismoniy shaxslarni nomida yuridik borligi haqida", cols: 3, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Jismoniy shaxslarni Passport ma'lumotlari", cols: 3, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Jismoniy shaxslarni nomida avto transportlari borligi haqida pinfl buyicha", cols: 3, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Oylik ish haqqi haqida to'liq ma'lumot", cols: 3, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Yuridik shaxsni bank va boshqa rekvizitlari haqida ", cols: 3, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Kuchmas mulk ta'qiqda bo'lganmi, hozirda ta'qiqdami, ta'qiqga qaysi tashkilot qo'ygan va hakozo ma'lumotlar", cols: 3, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Jismoniy shaxslarni uztransgazdan qarzi bor yo'qligi haqida to'liq ma'lumot", cols: 3, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Sudlangan sudlanmaganligi haqida ma'lumot", cols: 3, rows: 1 },
        ];
      }

      return [
          { icon: "interactive-02.png", href1: "https://my.gov.uz/oz/vaccine-info", href2: "https://my.gov.uz/oz/service/403", title: "COVID vaksina olganligi haqida", cols: 1, rows: 1 },
          { icon: "interactive-01.png", href1: "https://my.gov.uz/oz/info-by-tin", href2: "https://my.gov.uz/oz/juridicalCabinet/service/view?id=77", title: "Yur shaxslar haqida to'liq ma'lumot", cols: 1, rows: 1 },
          { icon: "interactive-01.png", href1: "https://my.gov.uz/oz/death-certificate-v1/passport", href2: "https://my.gov.uz/oz/service/303", title: "Vafot etgan yoki etmaganligi haqida to'liq ma'lumot", cols: 1, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Pensiya(posobiya) haqida to'liq ma'lumot", cols: 1, rows: 1 },
          { icon: "interactive-01.png", href1: "https://my.gov.uz/oz/mental-illness-dispensary-v3/info-applicant/create", href2: "https://my.gov.uz/oz/service/334", title: "Ruhiy kasalliklar dispansirada ro'yhatda turish turmasligi", cols: 1, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Narko dispansirada ro'yhatda turish turmasligi", cols: 1, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "INPS ma'lumoti", cols: 1, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Haydovchilik guvohnomasi haqida ma'lumot", cols: 1, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Kadastr ma'lumotlari pinfl buyicha cadastr raqamlari", cols: 1, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Jismoniy shaxslarniy ishlagan joylari haqida ma'lumot", cols: 1, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Jismoniy shaxslarni qarzdorligi", cols: 1, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Turmush qurgan qurmaganligi haqida to'liq ma'lumot", cols: 1, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Ajrashgan ajrashmaganligi haqida to'liq ma'lumot", cols: 1, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Jismoniy shaxlarni kuchmas mulklari haqida ma'lumot pinfl buyicha", cols: 1, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Yur shaxlarni kuchmas mulklari haqida ma'lumot INN buyicha", cols: 1, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Jismoniy shaxslarni yashash joyi haqida to'liq ma'lumot", cols: 1, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Avtotransport haqida to'liq ma'lumot (tex passport seria raqami buyicha)", cols: 1, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Elektr energiyadan qarzdorligi bor yo'qligi haqida ma'lumot", cols: 1, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Jismoniy shaxslarni nomida yuridik borligi haqida", cols: 1, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Jismoniy shaxslarni Passport ma'lumotlari", cols: 1, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Jismoniy shaxslarni nomida avto transportlari borligi haqida pinfl buyicha", cols: 1, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Oylik ish haqqi haqida to'liq ma'lumot", cols: 1, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Yuridik shaxsni bank va boshqa rekvizitlari haqida ", cols: 1, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Kuchmas mulk ta'qiqda bo'lganmi, hozirda ta'qiqdami, ta'qiqga qaysi tashkilot qo'ygan va hakozo ma'lumotlar", cols: 1, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Jismoniy shaxslarni uztransgazdan qarzi bor yo'qligi haqida to'liq ma'lumot", cols: 1, rows: 1 },
          { icon: "interactive-01.png", href1: "#", href2: "#", title: "Sudlangan sudlanmaganligi haqida ma'lumot", cols: 1, rows: 1 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
