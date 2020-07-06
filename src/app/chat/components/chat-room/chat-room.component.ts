import {
    AfterViewChecked,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewChild
} from '@angular/core';
import {UserMessage} from '../../network/dtos/UserMessage';
import {ChatClient} from '../../network/dtos/ChatClient';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-chat-room',
    templateUrl: 'chat-room.component.html',
    styleUrls: ['chat-room.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatRoomComponent implements OnInit, AfterViewChecked {
    @Input() messageStream: Observable<UserMessage[]>;
    @Output() reply: EventEmitter<ChatClient> = new EventEmitter<ChatClient>();
    @ViewChild('messages', {read: ElementRef}) private list: ElementRef;

    ngOnInit(): void {
        this.scrollToBottom();
    }

    ngAfterViewChecked(): void {
        this.scrollToBottom();
    }

    scrollToBottom(): void {
        try {
            this.list.nativeElement.scrollTop = this.list.nativeElement.scrollHeight;
        } catch (err) {
        }
    }
}
