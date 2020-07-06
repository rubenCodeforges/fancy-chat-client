import {ChatConfigs, RunMode} from './ChatConfigs';

export class ConfigFactory {
    private constructor() {
    }

    static get(mode: RunMode = 'light'): ChatConfigs {
        if (mode === 'light') {
            return {
                host: 'http://localhost:3000',
                mode
            };
        } else {
            return {
                host: process.env.HOST,
                mode
            };
        }
    }
}
