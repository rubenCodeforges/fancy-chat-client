# Fancy chat client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.1.

## Installation

There are 2 options for installation

- Install only the client side and use the hosted server.
- Install both the server and the client locally

#### Option 1

1. clone the repo
2. in root folder run `npm i`
3. Go to `ChatConfig.ts` and replace `process.env.HOST` with the server url `https://fancy-chat.herokuapp.com/`, heroku might go to sleep, so give it 10-30seconds to wind up.
4. run `ng serve` or `npm start`

#### Option 2

1. clone both repositories [server](https://github.com/rubenCodeforges/fancy-chat-server) and client
2. run `npm i` inside both apps (server and client)
3. run `npm start` in both apps 
