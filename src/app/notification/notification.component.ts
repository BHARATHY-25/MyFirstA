import { Input, Component } from '@angular/core';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})

export class NotificationComponent {

    @Input() public display:any;

    obj={
    "page":2,"per_page":6,"total":12,"total_pages":2,
    "data":[
    {"id":7,"email":"michael.lawson@reqres.in","first_name":"Michael","last_name":"Lawson","avatar":"https://reqres.in/img/faces/7-image.jpg"},
    {"id":8,"email":"lindsay.ferguson@reqres.in","first_name":"Lindsay","last_name":"Ferguson","avatar":"https://reqres.in/img/faces/8-image.jpg"},
    {"id":9,"email":"tobias.funke@reqres.in","first_name":"Tobias","last_name":"Funke","avatar":"https://reqres.in/img/faces/9-image.jpg"},
    {"id":10,"email":"byron.fields@reqres.in","first_name":"Byron","last_name":"Fields","avatar":"https://reqres.in/img/faces/10-image.jpg"},
    {"id":11,"email":"george.edwards@reqres.in","first_name":"George","last_name":"Edwards","avatar":"https://reqres.in/img/faces/11-image.jpg"},
    {"id":12,"email":"rachel.howell@reqres.in","first_name":"Rachel","last_name":"Howell","avatar":"https://reqres.in/img/faces/12-image.jpg"}
    ],
    "support":{"url":"https://reqres.in/#support-heading","text":"To keep ReqRes free, contributions towards server costs are appreciated!"}
    }



    // @Input()
    // public alerts: Array<IAlert> = [];
    // private backup: Array<IAlert>;

    // constructor() {
    //     this.alerts.push({
    //         id: 1,
    //         type: 'success',
    //         message: 'This is an success alert',
    //     }, {
    //         id: 2,
    //         type: 'info',
    //         message: 'This is an info alert',
    //     }, {
    //         id: 3,
    //         type: 'warning',
    //         message: 'This is a warning alert',
    //         icon: 'nc-bell-55'
    //     }, {
    //         id: 4,
    //         type: 'danger',
    //         message: 'This is a danger alert',
    //         icon: 'nc-bell-55'
    //     });
    //     this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
    // }

    // public closeAlert(alert: IAlert) {
    //     const index: number = this.alerts.indexOf(alert);
    //     this.alerts.splice(index, 1);
    // }
}

// export interface IAlert {
//     id: number;
//     type: string;
//     message: string;
//     icon?: string;
// }
