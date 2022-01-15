import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/@core/models/company';
import { CompanyService } from 'src/app/@core/services/company.service';

@Component({
  selector: 'app-company-dialog',
  templateUrl: './company-dialog.component.html',
  styleUrls: ['./company-dialog.component.scss']
})
export class CompanyDialogComponent implements OnInit {
  data: Company = {
    Id: 0,
    Name: "",
    Website: ""
  };
  constructor(private route: ActivatedRoute, private router: Router, private _companyService: CompanyService ) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this._companyService.getItemById(params["id"]).subscribe((item) => {
        if (item) {
          this.data= item;
        }
      });
    })
  }

  onSave(confirm: boolean) {
    if (confirm && this.data) {
      if(this.data.Id  === 0) {
        this._companyService.postItem(this.data).subscribe(() => {
          this.router.navigateByUrl("/companies");
        })
      } else {
        this._companyService.updateItem(this.data).subscribe(() => {
          this.router.navigateByUrl("/companies");
        })
      }

    } else {
      this.router.navigateByUrl("/companies");
    }
  }
}
