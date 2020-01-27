import { Component, OnInit } from '@angular/core';
import { SubscribersService } from './subscribers.service';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.scss']
})
export class SubscribersComponent implements OnInit {

  

  constructor(private subscribersService: SubscribersService) { }

  ngOnInit() {
  }

}
