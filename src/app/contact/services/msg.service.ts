
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class MsgService {
    constructor(public toastr: ToastrService) {

    }

    showSuccess(msg: string) {
        this.toastr.success(msg, 'Success');
    }
    showInfo(msg: string) {
        this.toastr.info(msg, 'Info');
    }
    showWarning(msg: string) {
        this.toastr.warning(msg, 'Warning');
    }
    showError(error: any) {
        debugger;
        // use this method as error handling method
        // pass every error to this method
        // parse approperiate message from eroor
        // show them as toastr
        // this.toastr.error(msg, 'Error');
        if (error.error) {
            let errMsg = error.error.err;
            this.displayError(errMsg.msg)
        }
        else {
            let errMsg = error.err.msg;
            this.displayError(errMsg)
        }
    }

    private displayError(msg: string) {
        this.toastr.error(msg);
    }
}

