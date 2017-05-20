import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private user: object = {};
  private resp: any = '';
  private title: String = 'App Works!';

  constructor(private http: Http) {}

  onCreateUser(): void {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');


    // this.http.post('userslist', {
    //   data: this.user
    // }, {
    //   headers: headers
    // })
    // .map(res => res.json())
    // .subscribe(
    //   data => console.log(data),
    //   err => console.log(err),
    //   () => console.log('Request Completed')
    // );

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

    this.http.delete('userslist/591faf30f804c0272c2ddec8')
    .map(res => res.json())
    .subscribe(
       data => console.log(data),
       err => console.log(err),
       () => console.log('Request Completed')
     );
  }
}
