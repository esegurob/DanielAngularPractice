import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  servrId = 30;
  serverStatus = 'offline';

  getServerStatus(){

  return this.serverStatus;
  }
}
