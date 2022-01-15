import { IBaseModel } from "./base-model";

export interface Company extends IBaseModel {
    Id: number;
    Name: string;
    Website: string;
}