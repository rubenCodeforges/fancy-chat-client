import { Component } from '@angular/core';
export interface Section {
  name: string;
  message: string;
  sendAt: Date;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chat-client';
  users: Section[] = [
    {
      name: 'Marko',
      message: 'Hi , how are you ?',
      sendAt: new Date('7/5/2020')
    },
    {
      name: 'Polo',
      message: 'Hey @marko, im good thanks',
      sendAt: new Date('7/5/2020')
    },
    {
      name: 'Liza',
      message: '@here hey guys, whats up ?',
      sendAt: new Date('7/5/2020')
    },
    {
      name: 'Marko',
      message: 'Hi , how are you ?',
      sendAt: new Date('7/5/2020')
    },
    {
      name: 'Polo',
      message: 'Hey @marko, im good thanks',
      sendAt: new Date('7/5/2020')
    },
    {
      name: 'Liza',
      message: '@here hey guys, whats up ?',
      sendAt: new Date('7/5/2020')
    },
    {
      name: 'Marko',
      message: 'Hi , how are you ?',
      sendAt: new Date('7/5/2020')
    },
    {
      name: 'Polo',
      message: 'Hey @marko, im good thanks',
      sendAt: new Date('7/5/2020')
    },
    {
      name: 'Liza',
      message: '@here hey guys, whats up ?',
      sendAt: new Date('7/5/2020')
    },
    {
      name: 'Marko',
      message: 'Hi , how are you ?',
      sendAt: new Date('7/5/2020')
    },
    {
      name: 'Polo',
      message: 'Hey @marko, im good thanks',
      sendAt: new Date('7/5/2020')
    },
    {
      name: 'Liza',
      message: '@here hey guys, whats up ?',
      sendAt: new Date('7/5/2020')
    },
    {
      name: 'Marko',
      message: 'Hi , how are you ?',
      sendAt: new Date('7/5/2020')
    },
    {
      name: 'Polo',
      message: 'Hey @marko, im good thanks',
      sendAt: new Date('7/5/2020')
    },
    {
      name: 'Liza',
      message: '@here hey guys, whats up ?',
      sendAt: new Date('7/5/2020')
    },
    {
      name: 'Marko',
      message: 'Hi , how are you ?',
      sendAt: new Date('7/5/2020')
    },
    {
      name: 'Polo',
      message: 'Hey @marko, im good thanks',
      sendAt: new Date('7/5/2020')
    },
    {
      name: 'Liza',
      message: '@here hey guys, whats up ?',
      sendAt: new Date('7/5/2020')
    },
    {
      name: 'Marko',
      message: 'Hi , how are you ?',
      sendAt: new Date('7/5/2020')
    },
    {
      name: 'Polo',
      message: 'Hey @marko, im good thanks',
      sendAt: new Date('7/5/2020')
    },
    {
      name: 'Liza',
      message: '@here hey guys, whats up ?',
      sendAt: new Date('7/5/2020')
    }
  ];
}
