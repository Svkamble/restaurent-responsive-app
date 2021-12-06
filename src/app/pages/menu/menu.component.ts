import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  foodData!:any;
  constructor(private services:OrderDetailsService) { }

  ngOnInit(): void {
    this.foodData = this.services.foodDetails;
  }

}
