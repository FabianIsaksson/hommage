export type FrameLookbook = {
  designerName: string;
  title: string;
  brandName: string;
  mobileImage: string;
  desktopImage: string;
  fullscreenImage: string;
  copy: string;
  infoPage: string;
  pages: string[];
  socials?: {
    name: string;
    link: string;
  }[];
};
