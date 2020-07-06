import {Injectable} from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {MessagePayload} from '../dtos/MessagePayload';
import {UserMessage} from '../dtos/UserMessage';
import {Observable} from 'rxjs';
import {ConnectedUser} from '../dtos/ConnectedUser';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class WebSocketService {
    constructor(private socket: Socket) {
        this.socket.on('connect', () => console.log('asdasdasdasdasd'));
    }

    sendMessage(payload: MessagePayload): void {
        this.socket.emit('msgToServer', payload);
    }

    registerUser(userName: string): Observable<{ status: 'ok' | 'error' }> {
        this.socket.emit('registerUser', {userName});
        return this.socket.fromEvent<{ status: 'ok' | 'error' }>('registered');
    }

    getUsers(): Observable<ConnectedUser[]> {
        return this.socket.fromEvent('connectedUsers');
    }

    getMessages(): Observable<UserMessage[]> {
        return this.socket.fromEvent<UserMessage[]>('msgToClient');
    }

    connected(callback: () => void): void {
        this.socket.on('connect', () => callback());
    }

    disconnected(callback: (reason: string) => void): void {
        this.socket.on('disconnect', () => callback('Unexpected disconnect'));
    }
}
