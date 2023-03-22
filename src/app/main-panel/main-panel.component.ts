import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent implements OnInit {

  constructor(
    public service: ApiServiceService
  ) { }

  ngOnInit(): void {
  }

  prueba(){
    console.log("askmdaks");
    this.service.searchMusic("shakira").subscribe({
      next: (response: HttpResponse<any>) => {
        console.log(response.body)
      }
    })
  }
}
