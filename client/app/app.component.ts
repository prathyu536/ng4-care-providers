import 'rxjs/add/operator/map';
import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private user: object = {};
  private resp: any = '';
  private title: String = 'App Works!';

  constructor(
    private http: Http,
    public translate: TranslateService) {
       // this language will be used as a fallback 
       // when a translation isn't found in the current language
       translate.setDefaultLang('en');

       // the lang to use, if the lang isn't available, 
       // it will use the current loader to get them
       translate.use('en');
    }

  onCreateUser(): void {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');


    this.http.post('userslist', {
      data: this.user
    }, {
      headers: headers
    })
    .map(res => res.json())
    .subscribe(
      data => console.log(data),
      err => console.log(err),
      () => console.log('Request Completed')
    );

    // this.http.put('userslist/591faf30f804c0272c2ddec8', {
    //   data: this.user
    // }, {
    //   headers: headers
    // })
    // .map(res => res.json())
    // .subscribe(
    //    data => console.log(data),
    //    err => console.log(err),
    //    () => console.log('Request Completed')
    //  );

    // this.http.delete('userslist/591faf30f804c0272c2ddec8')
    // .map(res => res.json())
    // .subscribe(
    //    data => console.log(data),
    //    err => console.log(err),
    //    () => console.log('Request Completed')
    //  );
  }
}
