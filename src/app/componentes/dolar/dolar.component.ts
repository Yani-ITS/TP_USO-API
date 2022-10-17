import { Component, OnInit } from '@angular/core';
import { DolarService } from 'src/app/service/dolar.service';

@Component({
  selector: 'app-dolar',
  templateUrl: './dolar.component.html',
  styleUrls: ['./dolar.component.css']
})
export class DolarComponent implements OnInit {

  dolares: any

  constructor(public dolarService: DolarService) { }

  ngOnInit(): void {
    this.dolarService.getDolares().subscribe(data =>{
      this.dolares = data;
      console.log(this.dolares);
    });
  }

}
