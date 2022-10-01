import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = "offline";
    serverName: string = "server1";

    getServerName() {
        return this.serverName;
    }
}