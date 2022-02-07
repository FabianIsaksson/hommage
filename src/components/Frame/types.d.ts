export type FrameLookbook = {
  designerName: string;
  title: string;
  brandName: string;
  mobileImage: string;
  desktopImage: string;
  fullscreenImage: string;
  copy: string;
  infoPageMobile: string;
  infoPageDesktop: string;
  designerCard: string;
  pages: string[];
  socials?: {
    name: string;
    link: string;
  }[];
};
