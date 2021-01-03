import {clearToken} from './validateToken';
import requests from '../apis/requests';

export const logout = async (token)=>{
    await requests.logout('/logout',token);
    await clearToken();
}