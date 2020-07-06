import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ConnectedUser} from '../../network/dtos/ConnectedUser';

@Component({
    selector: 'app-chat-users',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent implements OnInit {
    @Input() usersStream: Observable<ConnectedUser[]>;

    constructor() {
    }

    ngOnInit(): void {
    }

}
