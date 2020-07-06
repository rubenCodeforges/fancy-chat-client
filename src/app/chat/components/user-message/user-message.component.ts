import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {UserMessage} from '../../network/dtos/UserMessage';
import {ChatClient} from '../../network/dtos/ChatClient';

@Component({
    selector: 'app-chat-message',
    templateUrl: 'user-message.component.html',
    styleUrls: ['user-message.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserMessageComponent {
    @Input() userMessage: UserMessage;
    @Output() reply: EventEmitter<ChatClient> = new EventEmitter<ChatClient>();
}
