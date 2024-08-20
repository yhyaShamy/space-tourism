import { imagesObj } from "./global";

export interface Crew {
    name: string;
    images: imagesObj;
    role: string;
    bio: string;
  }

  export interface membersDataProps {
    membersData: Crew[];
  }