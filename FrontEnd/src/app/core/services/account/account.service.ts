import { BaseService } from "../base.service";
import { HttpClient } from "@angular/common/http";
import { ConfigService } from "../configuration/config.service";
import { AccountSignup } from "../../models/account-signup";

import{ catchError } from 'rxjs/operators';

export class AccountService extends BaseService {
    constructor(private http: HttpClient, private configService: ConfigService){
        super();
    }

    signup(accountSignup: AccountSignup){
        return this.http.post(this.configService.authApiURI + '/accounts', accountSignup).pipe(catchError(this.handleError));
    }
}