import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DefaultProvider } from '../default/default';
import { DataProvider } from '../api/data';
import { arrayMap } from '../providers';

/**
  @author
  Alexander Jaramillo
  alexunjm@gmail.com
*/

export interface PageInterface {
  title: string;
  page: any;
  category?: number;
  subs?: any;
  index?: number;
  showSubs?: boolean;
}

@Injectable()
export class MenuProvider extends DefaultProvider {

  pages: Array<PageInterface>;

  constructor(private dataProvider: DataProvider) {
    super(dataProvider, 'menu');
  }

  getMenu(): Observable<ArrayBuffer> {
    let obs = this.dataProvider.get('menu');
    obs.subscribe((res: any) => {
      this.items = res.data;
    }, err => {
      console.error('ERROR', err);
    });
    return obs;
  }

  navigateTo(page) {
    console.log(page);
  }

  initNavigationMenu(): Observable<ArrayBuffer> {
    let obs = this.getMenu();
    obs.subscribe(res => {

      this.pages = arrayMap(res['data'], (menuElm, index, arr) => {

        let page: PageInterface = {
          title: menuElm['name'],
          page: menuElm['page'],
          category: menuElm['id']
        };
        if (menuElm['subs']) {
          page.subs = arrayMap(menuElm['subs'], (sub, index, arr) => {
            return {
              name: sub['name'],
              page: sub['page'],
              category: sub['id']
            };
          }, this);
          page.showSubs = false;
        }
        return page;
      }, this);
    }, err => {
      console.error('ERROR', err);
    });
    return obs;
  }

}
