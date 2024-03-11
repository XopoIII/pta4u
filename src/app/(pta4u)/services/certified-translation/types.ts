interface Title {
  id: number;
  paragraph: string;
}

interface TransferArrItem {
  id: number;
  span: string;
}

interface TitleArrItem {
  id: number;
  paragraph: string;
  paragraph2: string;
  paragraphArr?: {
    id: number;
    title: string;
  }[];
}

interface NotariusArrItem {
  id: number;
  title: string;
  titleArr: TitleArrItem[];
}

interface CompanyArrItem {
  id: number;
  li: string;
  span: string;
}

export interface ObjText {
  name: string;
  title: Title[];
  transfer: string;
  transferArr: TransferArrItem[];
  notarius: string;
  notariusArr: NotariusArrItem[];
  company: string;
  companyArr: CompanyArrItem[];
}
