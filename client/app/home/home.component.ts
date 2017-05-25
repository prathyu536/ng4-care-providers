import 'rxjs/add/operator/map';
import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { Http, Headers } from '@angular/http';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [HomeService]
})

export class HomeComponent {
    private resp: any = '';
    private user: object = {};
    private title: String = 'This is a home page.';

    constructor(private http: Http,
        private homeService: HomeService) { }

    onCreateUser(): void {
        this.homeService
            .createUser(this.user).subscribe(
            data => console.log(data),
            err => console.log(err),
            () => console.log('Request Completed')
        );
    }
}
