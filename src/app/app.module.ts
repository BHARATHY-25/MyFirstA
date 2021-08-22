import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NgbdModalComponent } from './modal/modal.component';
import { NotificationComponent } from './notification/notification.component';

import { LeftComponent } from './classes/left/left.component';
import { RBotComponent } from './classes/r-bot/r-bot.component';
import { RTopComponent } from './classes/r-top/r-top.component';
import { ClassesComponent } from './classes/test/classes.component';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NgbdModalComponent,
    NotificationComponent,
    ClassesComponent,
    RTopComponent,
    RBotComponent,
    LeftComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
