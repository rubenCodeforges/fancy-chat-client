import {NgModule} from '@angular/core';
import {NetworkModule} from './network/NetworkModule';
import {UserMessageComponent} from './components/user-message/user-message.component';
import {MatListModule} from '@angular/material/list';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ChatRoomComponent} from './components/chat-room/chat-room.component';
import { ChatMainComponent } from './components/main/chat-main.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { UsersListComponent } from './components/users-list/users-list.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SocketIoModule} from 'ngx-socket-io';
import {ConfigFactory} from './network/config/ConfigFactory';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MomentModule} from 'ngx-moment';
import {MentionPipe} from './pipes/MentionPipe';

const components = [
    ChatMainComponent,
    UserMessageComponent,
    UsersListComponent,
    ChatRoomComponent
];
const modules = [
    MatListModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    SocketIoModule.forRoot({url: ConfigFactory.get().host}),

];

@NgModule({
    imports: [
        NetworkModule,
        ...modules,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MomentModule,
    ],
    exports: [
        ...components,
        MentionPipe
    ],
    declarations: [
        ...components,
        MentionPipe
    ]
})
export class ChatModule {

}
