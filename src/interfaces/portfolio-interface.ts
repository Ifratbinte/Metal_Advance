import { MetaInterface } from './common';
import ImageInterface from './image-interface';
import PortfolioCategoryInterface from './portfolio-category-interface';

export default interface PortfolioInterface {
  id: number;
  attributes: {
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: {
      data: ImageInterface;
    };
    portfolio_category: {
      data: PortfolioCategoryInterface;
    };
  };
}

export interface PortfolioResInterface {
  data: PortfolioInterface[];
  meta: MetaInterface;
}
