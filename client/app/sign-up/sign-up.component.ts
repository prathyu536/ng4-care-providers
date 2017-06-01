import 'rxjs/add/operator/map';
import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { FormsModule } from '@angular/forms';

  let obj:any = {
      firstname   : "asdfa"
    , lastname   : "asdfa"
    , gender  : "asdfa"
    , email   : "asdfa"
    , pwd     : "asdfa"
    , cpwd    : "asdfa"
    , number  : 987978978
    , address1: "asdfa"
    , address2: "asdfa"
    , city    : "asdfa"
    , state   : "asdfa"
    , country : "asdfa"
    , zipcode : 876876
    , active  : true
  };

@Component({
  selector: 'app-sign-up-root',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  private user1: any = {dob: ""};
  private resp: any = '';
  private title: String = 'App Works!';

  constructor(private http: Http) {}

 dateToTime(template, date):any {
    date = date.split( template[1] );
    template = template.split( template[1] );
    date = date[ template.indexOf('m') ]
        + "/" + date[ template.indexOf('d') ]
        + "/" + date[ template.indexOf('Y') ];

    return (new Date(date).getTime());
 }

  onUserSignUp(): void {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.user1.dob = this.dateToTime("d-m-Y", this.user1.dob);

    this.http.post('v2/registrationlist', {
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
