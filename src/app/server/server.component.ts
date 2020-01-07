import { Component } from '@angular/core';
/* Decorator is used to enhance a class , 
we can give the html tag with which this component is identified in DOm by using @Component 
we can give templateUrl
*/
@Component({
selector: "app-server",
templateUrl: "./server.component.html"

})
export class ServerComponent{
    serverID =10;
    serverStatus =' Offline';
    constructor(){
        this.serverStatus = Math.random() >0.5 ? "online" :"offline"
    }
    getColor()
    {
        return this.serverStatus == "online" ? "green" :"red"
    }

}