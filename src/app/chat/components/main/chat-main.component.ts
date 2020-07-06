import {ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {WebSocketService} from '../../network/services/WebSocketService';
import {Observable, Subscription} from 'rxjs';
import {ConnectedUser} from '../../network/dtos/ConnectedUser';
import {concatMap, tap} from 'rxjs/operators';
import {UserMessage} from '../../network/dtos/UserMessage';
import {ChatClient} from '../../network/dtos/ChatClient';

@Component({
    selector: 'app-chat',
    templateUrl: './chat-main.component.html',
    styleUrls: ['./chat-main.component.scss']
})
export class ChatMainComponent implements OnInit, OnDestroy {
    @ViewChild('messageInput') input: ElementRef;

    public form: FormGroup;
    public isRegistered = false;
    public usersStream: Observable<ConnectedUser[]>;
    public messageStream: Observable<UserMessage[]>;
    public currentUser: string;
    public isConnected = false;

    private subscriptionBag: Subscription[] = [];
    private readonly USER_STORAGE_KEY = 'fancy-chat-user';

    constructor(private fb: FormBuilder,
                private cdRef: ChangeDetectorRef,
                private websocketService: WebSocketService) {
    }

    ngOnInit(): void {
        this.form = this.fb.group({
            message: ['']
        });
        this.connectUser();
        this.handleDisconnect();
        this.connected();
        this.isConnected = true;
    }

    ngOnDestroy(): void {
        if (this.subscriptionBag) {
            this.subscriptionBag.forEach((sub) => sub.unsubscribe());
        }
    }

    onSubmit(): void {
        const control = this.form.get('message');
        if (control.value) {
            this.websocketService.sendMessage({
                userName: this.currentUser,
                text: control.value
            });
            control.reset();
        }
    }

    onReply(chatClient: ChatClient): void {
        const control = this.form.get('message');
        control.setValue(`@${chatClient.userName} `);
        this.input.nativeElement.focus();
    }

    enterChat(userName: string): void {
        const sub = this.websocketService.registerUser(userName)
            .subscribe((res) => {
                if (res.status === 'ok') {
                    this.isRegistered = !!res;
                    this.currentUser = userName;
                    localStorage.setItem(this.USER_STORAGE_KEY, userName);
                }

            });
        this.subscriptionBag.push(sub);
    }

    private connected(): void {
        this.websocketService.connected(() => this.isConnected = true);
    }

    private handleDisconnect(): void {
        this.websocketService.disconnected((reason) => {
            this.isConnected = false;
        });
    }

    private connectUser(): void {
        this.currentUser = localStorage.getItem(this.USER_STORAGE_KEY);
        this.isRegistered = !!this.currentUser;
        this.usersStream = this.websocketService.getUsers();
        this.messageStream = this.websocketService.getMessages();

        if (this.currentUser) {
            this.enterChat(this.currentUser);
        }
    }
}
