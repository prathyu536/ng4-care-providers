import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-sign-up-root',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  private user1: object = {};
  private resp: any = '';
  private title: String = 'App Works!';

  constructor(private http: Http) {}

  onUserSignUp(): void {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');


    this.http.post('registrationlist', {
      data: this.user1
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
