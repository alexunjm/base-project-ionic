import { Injectable } from '@angular/core';
import { DefaultProvider } from '../default/default';
import { DataProvider } from '../api/data';

/**
  @author
  Alexander Jaramillo
  alexunjm@gmail.com
*/
@Injectable()
export class MenuProvider extends DefaultProvider {

  constructor(private dataProvider: DataProvider) {
    super(dataProvider, 'menu');
  }

  refresh() {
    let obs = this.dataProvider.get('menu');
    obs.subscribe((res: any) => {
      this.items = res.data;
    }, err => {
      console.error('ERROR', err);
    });
    return obs;
  }

}
