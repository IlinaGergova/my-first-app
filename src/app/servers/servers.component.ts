import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = "";
  // serverName = "test name"; // for the example with the two input fileds

  constructor() {
    setTimeout(() => { this.allowNewServer = true }, 2000)
  }

  ngOnInit(): void {
  }

  createServer() {
    this.serverCreationStatus = "Server was created! The name is " + this.serverName;
  }

  updateServerName(event: any) {
    console.log(event);
    this.serverName = event.target.value;
  }
}
