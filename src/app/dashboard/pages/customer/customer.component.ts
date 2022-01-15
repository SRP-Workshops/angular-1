import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Customer } from 'src/app/@core/models/customer';
import { CustomerService } from 'src/app/@core/services/customer.service';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { CustomerDialogComponent } from './customer-dialog/customer-dialog.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [];
  displayColumns = [ 'name', "address", 'email', 'phone', 'company', 'actions'];

  @ViewChild(MatTable) table!: MatTable<Customer>;

  constructor(private _customerService: CustomerService, private dialog: MatDialog) { }

  ngOnInit() {
    this.loadCompanies();
  }
  loadCompanies() {
    this._customerService.getAllItems().subscribe((data) => {
      this.customers = data;
    })
  }


  addItem() {
    this.dialog.open(CustomerDialogComponent, {data: {}}).afterClosed().subscribe((data: Customer) => {
      this._customerService.postItem(data).subscribe(postData => {
        this.customers.push(postData);
        this.table.renderRows();
      });
    });
  }

  onDelete(item: Customer) {
    this.dialog.open(ConfirmDialogComponent).afterClosed().subscribe((flag) => {
      if (flag) {
        this._customerService.deleteItem(item).subscribe(() => {
          const index = this.customers.findIndex(x => x.Id === item.Id);
          this.customers.splice(index, 1);
          this.table.renderRows();
        })
      }
    })
  }

  onUpdate(item: Customer) {
    this.dialog.open(CustomerDialogComponent, {data: Object.assign({}, item)}).afterClosed().subscribe((data: Customer) => {
      this._customerService.updateItem(data).subscribe(() => {
        const index = this.customers.findIndex(x => x.Id === item.Id);
        this.customers[index] = data;
        this.table.renderRows();
      })
    });

  }
}
