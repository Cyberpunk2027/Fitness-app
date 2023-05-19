export enum SelectedPage {
    Home = "home",
    About = "about",
    Benefits = "benefits",
    OurClasses = "ourclasses",
    Calculator = "calculator",
    ContactUs = "contactus"
}

export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
    
  }

export interface ClassType {
    name: string,
    description: string,
    image: string
}