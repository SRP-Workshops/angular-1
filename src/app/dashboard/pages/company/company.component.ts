import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Company } from 'src/app/@core/models/company';
import { CompanyService } from 'src/app/@core/services/company.service';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { CompanyDialogComponent } from './company-dialog/company-dialog.component';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  companies: Company[] = [];
  displayColumns = [ 'name', "website", 'actions'];
  @ViewChild(MatTable) table!: MatTable<Company>;
  constructor(private _companyService: CompanyService, private dialog: MatDialog) { }

  ngOnInit() {
    this.loadCompanies();

  }
  loadCompanies() {
    this._companyService.getAllItems().subscribe((data) => {
      this.companies = data;
    })
  }

  onDelete(item: Company) {
    this.dialog.open(ConfirmDialogComponent).afterClosed().subscribe((flag) => {
      if (flag) {
        this._companyService.deleteItem(item).subscribe(() => {
          const index = this.companies.findIndex(x => x.Id === item.Id);
          this.companies.splice(index, 1);
          this.table.renderRows();
        })
      }
    })
  }

}
