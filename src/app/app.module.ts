import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ChatModule} from './chat/ChatModule';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        ChatModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
