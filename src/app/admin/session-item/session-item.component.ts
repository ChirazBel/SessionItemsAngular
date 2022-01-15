import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FakeSessionItemService } from '../fake-session-item.service';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {
  @Input() session: any;
  constructor(private sessionItemService: FakeSessionItemService) { }
  ngOnInit(): void {
  }
  OnDelete(){
    console.log(this.session);
    this.sessionItemService.delete(this.session);
  }

}
