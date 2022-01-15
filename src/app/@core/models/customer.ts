import { IBaseModel } from "./base-model";
import { Company } from "./company";

export interface Customer extends IBaseModel {
    Id: number;
    Name: string;
    Address: string;
    Email: string;
    Phone: string;
    CompanyId: number;
    Company: Company | undefined;
}