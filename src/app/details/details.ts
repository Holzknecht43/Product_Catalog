import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details implements OnInit {
  itemId: number | null = null;
  item: any = null;

  items = [
    {id: 1, name: "Nike Air Force 1", price: 4200, location: "Manila", details: "New"},
    {id: 2, name: "Adidas Ultraboost 22", price: 6800, location: "Cebu City", details: "Used"},
    {id: 3, name: "Puma RS-X", price: 5100, location: "Davao City", details: "New"},
    {id: 4, name: "Reebok Classic Leather", price: 3600, location: "Quezon City", details: "Used"},
    {id: 5, name: "New Balance 574", price: 4800, location: "Baguio City", details: "New"},
    {id: 6, name: "Asics Gel-Kayano 28", price: 7200, location: "Makati", details: "New"},
    {id: 7, name: "Converse Chuck Taylor", price: 3200, location: "Iloilo City", details: "Used"},
    {id: 8, name: "Vans Old Skool", price: 2800, location: "Taguig", details: "New"},
    {id: 9, name: "Under Armour Curry 8", price: 7500, location: "Cagayan de Oro", details: "Used"},
    {id: 10, name: "Fila Disruptor II", price: 3900, location: "Bacolod", details: "New"},
    {id: 11, name: "On Cloudswift", price: 8700, location: "Pasig", details: "New"},
    {id: 12, name: "Saucony Jazz Original", price: 4500, location: "General Santos", details: "Used"},
    {id: 13, name: "Hoka One One Clifton 8", price: 9200, location: "Batangas", details: "New"},
    {id: 14, name: "Mizuno Wave Rider 25", price: 7100, location: "Marikina", details: "Used"},
    {id: 15, name: "Nike Vomero 5", price: 5000, location: "Baguio City", details: "Used"},
    {id: 16, name: "Adidas Yeezy Boost 350", price: 12000, location: "Mandaluyong", details: "New"},
    {id: 17, name: "Skechers D'Lites", price: 4100, location: "Olongapo", details: "Used"},
    {id: 18, name: "Brooks Ghost 14", price: 6900, location: "San Fernando", details: "New"},
    {id: 19, name: "Merrell Moab 2", price: 5400, location: "Antipolo", details: "Used"},
    {id: 20, name: "Timberland 6-Inch Boots", price: 10500, location: "Cavite", details: "New"},
    {id: 21, name: "Nike Dunk Low", price: 6300, location: "Valenzuela", details: "Used"},
    {id: 22, name: "Adidas Stan Smith", price: 3500, location: "Pasay", details: "New"},
    {id: 23, name: "Jordan 1 Mid", price: 8900, location: "Tagaytay", details: "Used"},
    {id: 24, name: "Converse One Star", price: 3800, location: "Dumaguete", details: "New"},
    {id: 25, name: "Vans Sk8-Hi", price: 3000, location: "Zamboanga", details: "Used"},
    {id: 26, name: "Nike LeBron 19", price: 11000, location: "Las Piñas", details: "New"},
    {id: 27, name: "Adidas NMD R1", price: 6200, location: "Muntinlupa", details: "Used"},
    {id: 28, name: "Reebok Nano X1", price: 5700, location: "Dagupan", details: "New"},
    {id: 29, name: "Under Armour HOVR Phantom 2", price: 7700, location: "Angeles City", details: "New"},
    {id: 30, name: "Crocs Classic Clog", price: 2500, location: "Puerto Princesa", details: "Used"}
  ];
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.itemId = Number(this.route.snapshot.paramMap.get('id'));
    this.item = this.items.find(p => p.id === this.itemId);
  }
}
