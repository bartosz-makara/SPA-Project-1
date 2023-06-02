export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurOffer = "ouroffer",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface OfferType {
  name: string;
  description?: string;
  image: string;
}

export type Props = {
  isTopOfPage?: boolean;
  selectedPage?: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  children?: React.ReactNode;
  page?: string;
};
