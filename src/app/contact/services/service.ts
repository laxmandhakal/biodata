import {HttpClient,HttpHeaders} from "@angular/common/http"
import {Injectable} from '@angular/core'
import {observable} from 'rxjs'
@Injectable()
export class requests{
    url:string="https://appprivate-api.herokuapp.com:8080/api/mail"
constructor(public http:HttpClient,
    
    )
    {  }
    send(data:any)
    {
       return this.http.post(this.url,data,this.getHeaders())
    }
    private getHeaders() {
        let options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }
        return options;
    }



}