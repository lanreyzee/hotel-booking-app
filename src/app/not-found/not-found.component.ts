import { Component } from "@angular/core";

@Component({
    template: `
        <h1 class="errorMessage">404: Page not Found</h1>
    `,
    styles:[`
        .errorMessage{
            margin-top:50vh;
            font-size:30px;
            text-align:center;
        }`]
})

export class Error404Component{
    constructor(){

    }
}