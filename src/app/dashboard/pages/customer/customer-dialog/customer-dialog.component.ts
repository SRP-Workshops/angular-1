import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Company } from 'src/app/@core/models/company';
import { Customer } from 'src/app/@core/models/customer';
import { CompanyService } from 'src/app/@core/services/company.service';

@Component({
  selector: 'app-customer-dialog',
  templateUrl: './customer-dialog.component.html',
  styleUrls: ['./customer-dialog.component.scss']
})
export class CustomerDialogComponent implements OnInit {
  companies: Company[] = [];
  constructor(private matDialogRef: MatDialogRef<CustomerDialogComponent>,
    public _companyService: CompanyService,
    @Inject(MAT_DIALOG_DATA) public data: Customer ) { }

  ngOnInit() {
    this.data.Company = undefined;
    
    this._companyService.getAllItems().subscribe(data => {
      this.companies = data;
    })
  }
  onSave(confirm: boolean) {
    this.matDialogRef.close(confirm ? this.data : undefined);
  }

  onChange(e: any) {
    this.data.CompanyId = e.value;
    this.data.Company = this.companies.find(x => x.Id === e.value);
  }
}
