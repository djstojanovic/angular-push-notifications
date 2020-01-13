import { Component, OnInit } from '@angular/core';
import {Content} from '../config/content';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  icon: string = "/assets/icons/logo.png"

  constructor() {
  }

  ngOnInit(): void {
  }
}
