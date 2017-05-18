import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private user:Object = {};
  private resp:any = "";
  private title:string = 'App Works!';

  constructor(private http: Http) {}

  onCreateUser():void {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');


  	this.http.post("userslist", {
      data: this.user
    }, {
      headers: headers
    })
  	.map(res => res.json())
    .subscribe(
      data => console.log(data),
      err => console.log(err),
      () => console.log('Authentication Complete')
    );
  }
}
