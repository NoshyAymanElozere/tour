import * as Yup from "yup";
import { requiredTranslation } from "../../../utils/helpers";

export type AllCurrencyTable_TP = {
  name_en?: string;
  name_ar?: string;
  id?: string;
  status: number;
  symbol: string;
  rate: string;
};
export type initialValue_Tp = {
  name_en?: string;
  name_ar?: string;
  id?: string;
  status: number;
  symbol: string;
  rate: string;
  base: number;
};
export type AllCurrencyAPI_TP = {
  data: {
    data: AllCurrencyTable_TP[];
    total: number;
    currentPage: number;
    lastPage: number;
  };
};
export const validationSchema = () =>
  Yup.object({
    name_ar: Yup.string().trim().required(requiredTranslation),
    name_en: Yup.string().trim().required(requiredTranslation),
    status: Yup.string().trim().required(requiredTranslation),
    symbol: Yup.string().trim().required(requiredTranslation),
    rate: Yup.string().trim().required(requiredTranslation),
  });
