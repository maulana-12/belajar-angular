import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isCollapsed = true
  constructor(private readonly sessionService: SessionService) { }
  isLoggedIn(): boolean {
    return (this.sessionService.get('token') !== null);
  }

  ngOnInit(): void {
  }

}
