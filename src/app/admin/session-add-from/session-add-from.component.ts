import { Component, OnInit } from '@angular/core';
import { FakeSessionItemService } from '../fake-session-item.service';

@Component({
  selector: 'app-session-add-from',
  templateUrl: './session-add-from.component.html',
  styleUrls: ['./session-add-from.component.css']
})
export class SessionAddFromComponent implements OnInit {

  constructor(private sessionItemService: FakeSessionItemService) { }

  ngOnInit(): void {
  }
  addSession(sessionItem) {
    console.log(sessionItem);
    this.sessionItemService.add(sessionItem);
     }
}
