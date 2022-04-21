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
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 },
          { title: 'Card 5', cols: 1, rows: 1 },
          { title: 'Card 6', cols: 1, rows: 1 },
          { title: 'Card 7', cols: 1, rows: 1 },
          { title: 'Card 8', cols: 1, rows: 1 },
          { title: 'Card 9', cols: 1, rows: 1 },
          { title: 'Card 10', cols: 1, rows: 1 },
          { title: 'Card 11', cols: 1, rows: 1 },
          { title: 'Card 12', cols: 1, rows: 1 },
          { title: 'Card 13', cols: 1, rows: 1 },
          { title: 'Card 14', cols: 1, rows: 1 },
          { title: 'Card 15', cols: 1, rows: 1 },
          { title: 'Card 16', cols: 1, rows: 1 },
          { title: 'Card 17', cols: 1, rows: 1 },
          { title: 'Card 18', cols: 1, rows: 1 },
          { title: 'Card 19', cols: 1, rows: 1 },
          { title: 'Card 20', cols: 1, rows: 1 },
          { title: 'Card 21', cols: 1, rows: 1 },
          { title: 'Card 22', cols: 1, rows: 1 },
          { title: 'Card 23', cols: 1, rows: 1 },
          { title: 'Card 24', cols: 1, rows: 1 },
          { title: 'Card 25', cols: 1, rows: 1 },
          { title: 'Card 26', cols: 1, rows: 1 }
        ];
      }

      return [
          { href1: "https://my.gov.uz/oz/vaccine-info", title: "COVID vaksina olganligi haqida", cols: 1, rows: 1 },
          { href1: "#", title: "Yur shaxslar haqida to'liq ma'lumot", cols: 1, rows: 1 },
          { href1: "#", title: "Vafot etgan yoki etmaganligi haqida to'liq ma'lumot", cols: 1, rows: 1 },
          { href1: "#", title: "Pensiya(posobiya) haqida to'liq ma'lumot", cols: 1, rows: 1 },
          { href1: "#", title: "Ruhiy kasalliklar dispansirada ro'yhatda turish turmasligi", cols: 1, rows: 1 },
          { href1: "#", title: "Narko dispansirada ro'yhatda turish turmasligi", cols: 1, rows: 1 },
          { href1: "#", title: "INPS ma'lumoti", cols: 1, rows: 1 },
          { href1: "#", title: "Haydovchilik guvohnomasi haqida ma'lumot", cols: 1, rows: 1 },
          { href1: "#", title: "Kadastr ma'lumotlari pinfl buyicha cadastr raqamlari", cols: 1, rows: 1 },
          { href1: "#", title: "Jismoniy shaxslarniy ishlagan joylari haqida ma'lumot", cols: 1, rows: 1 },
          { href1: "#", title: "Jismoniy shaxslarni qarzdorligi", cols: 1, rows: 1 },
          { href1: "#", title: "Turmush qurgan qurmaganligi haqida to'liq ma'lumot", cols: 1, rows: 1 },
          { href1: "#", title: "Ajrashgan ajrashmaganligi haqida to'liq ma'lumot", cols: 1, rows: 1 },
          { href1: "#", title: "Jismoniy shaxlarni kuchmas mulklari haqida ma'lumot pinfl buyicha", cols: 1, rows: 1 },
          { href1: "#", title: "Yur shaxlarni kuchmas mulklari haqida ma'lumot INN buyicha", cols: 1, rows: 1 },
          { href1: "#", title: "Jismoniy shaxslarni yashash joyi haqida to'liq ma'lumot", cols: 1, rows: 1 },
          { href1: "#", title: "Avtotransport haqida to'liq ma'lumot (tex passport seria raqami buyicha)", cols: 1, rows: 1 },
          { href1: "#", title: "Elektr energiyadan qarzdorligi bor yo'qligi haqida ma'lumot", cols: 1, rows: 1 },
          { href1: "#", title: "Jismoniy shaxslarni nomida yuridik borligi haqida", cols: 1, rows: 1 },
          { href1: "#", title: "Jismoniy shaxslarni Passport ma'lumotlari", cols: 1, rows: 1 },
          { href1: "#", title: "Jismoniy shaxslarni nomida avto transportlari borligi haqida pinfl buyicha", cols: 1, rows: 1 },
          { href1: "#", title: "Oylik ish haqqi haqida to'liq ma'lumot", cols: 1, rows: 1 },
          { href1: "#", title: "Yuridik shaxsni bank va boshqa rekvizitlari haqida ", cols: 1, rows: 1 },
          { href1: "#", title: "Kuchmas mulk ta'qiqda bo'lganmi, hozirda ta'qiqdami, ta'qiqga qaysi tashkilot qo'ygan va hakozo ma'lumotlar", cols: 1, rows: 1 },
          { href1: "#", title: "Jismoniy shaxslarni uztransgazdan qarzi bor yo'qligi haqida to'liq ma'lumot", cols: 1, rows: 1 },
          { href1: "#", title: "Sudlangan sudlanmaganligi haqida ma'lumot", cols: 1, rows: 1 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
