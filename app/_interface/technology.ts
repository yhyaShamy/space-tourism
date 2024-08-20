export interface technologyImg {
  portrait: string;
  landscape: string;
}

export interface technologyData {
  name: string;
  images: technologyImg;
  description: string;
}

export interface handleClick {
  (name: string): void;
}

export interface NavBarProps {
  technologyList: technologyData[] , handleClick:handleClick, technologyName:string
}
