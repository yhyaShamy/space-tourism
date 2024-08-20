import { imagesObj } from "./global";

export interface destinationProps {
    destinationsData: destinationObj[];
  }

  export interface destinationObj {
    name: string;
    images: imagesObj;
    description: string;
    distance: string;
    travel: string;
  }
  
  export interface handleDestination {
    (name: string):void
  }

  export interface NavBarProps {
    destinationData: destinationObj[],
    handleDestination:handleDestination,
    currentDestination:string
  }