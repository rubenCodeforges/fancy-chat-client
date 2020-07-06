import {NgModule} from '@angular/core';
import {WebSocketService} from './services/WebSocketService';

const providers = [
    WebSocketService,
];

@NgModule({
    imports: [],
    providers: [...providers]
})
export class NetworkModule {

}
