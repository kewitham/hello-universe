import { Component } from '@angular/core';
import { ConfigService } from './config/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hello-universe-dashboard';

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.configService.getConfig();
  }

}
