import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, map } from 'rxjs';
import { ArrayType } from '@angular/compiler';

const PATH_URL = 'https://api.chucknorris.io/jokes'

@Injectable({providedIn: 'root'})
export class UserInfoService {
    private httpClient= inject(HttpClient)
    constructor() { }

    getUserInfo(): Observable<string>{
        return this.httpClient
            .get<UserInfoResponse>(PATH_URL + '/random')
            .pipe(
                map((res:UserInfoResponse)=> res.value)
            );
    }
    
}

export interface UserInfoResponse {
categories:ArrayType ,
created_at: Date,
icon_url: string,
id: string
updated_at: Date,
url: string, 
value: string 


}