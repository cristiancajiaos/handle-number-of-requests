import { RequestService } from './../../services/request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  requests: number;

  constructor(
    private request: RequestService
  ) { }

  ngOnInit(): void {
    this.request.getRequestNumber().subscribe(requests => {
      console.log('getRequestNumber()');
      this.requests = requests;
    });
  }
}
