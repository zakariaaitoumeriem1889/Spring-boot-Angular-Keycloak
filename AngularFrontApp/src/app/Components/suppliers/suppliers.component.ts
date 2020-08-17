import { Component, OnInit } from '@angular/core';
import {SuppliersService} from '../../Services/suppliers.service';
import {Supplier} from '../../Models/supplier';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {
  suppliers: Supplier;
  private errorMessage: any;

  constructor(private suppliersService: SuppliersService) { }

  ngOnInit() {
    this.suppliersService.getSuppliers()
      .subscribe((data: Supplier) => {
        this.suppliers = data;
      }, error => {
        this.errorMessage = error.error.message;
      });
  }

}
