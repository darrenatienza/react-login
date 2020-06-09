import { makeEntity} from 'react-entities';
import * as counter from './counter';
import * as login from './login';
import * as list from './list'
export const useCounter = makeEntity(counter);
export const useUser = makeEntity(login);
export const useList = makeEntity(list);