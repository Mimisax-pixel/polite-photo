export enum SelectedPage  {
    Home = "Home",
    Portfolio = "portfolio",
    AboutMe = "about me",
    Contact = "contact",
  }

  export interface ClassPortfolio {
    name: string;
    description?: string;
    image: string;
  }