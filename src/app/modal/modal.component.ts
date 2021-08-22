import { OnInit } from '@angular/core';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { DriverProvider } from 'protractor/built/driverProviders';
import { Observable } from 'rxjs';

// @Component({
//     selector: 'app-modal-content',
//     template: './modal.component.html' 
// })
// export class NgbdModalContent {
//     @Input() name;

//     constructor(public activeModal: NgbActiveModal) {}
// }

@Component({
    selector: 'app-modal-component',
    templateUrl: './modal.component.html'
})
export class NgbdModalComponent implements OnInit{

    
    ngOnInit(): void {
       
    }

  
    
}
