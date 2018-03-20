import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, TasksComponent, TaskListComponent, TaskNewComponent } from './app.component';

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, TasksComponent, TaskListComponent, TaskNewComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule {

}
