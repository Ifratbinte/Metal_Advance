import { MetaInterface } from './common';

interface PortfolioCategoryAttributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  portfolios: {
    data: [];
  };
}
export default interface PortfolioCategoryInterface {
  id: number;
  attributes: PortfolioCategoryAttributes;
}
export interface PortfolioCategoryResp {
  data: PortfolioCategoryInterface[];
  meta: MetaInterface;
}
