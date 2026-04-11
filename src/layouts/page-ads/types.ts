import { BannerProps } from "./sections/banner";
import { ThongTinTuyenSinhProps } from "./sections/thong-tin-tuyen-sinh";
import { CountdownSectionProps } from "./sections/countdown";
import { RegistrationFormSectionProps } from "./sections/registration-form";
import { PhuongThucDaoTaoProps } from "./sections/phuong-thuc-dao-tao";
import { MauVanBangMoiProps } from "./sections/mau-van-bang-moi";

export type SectionType = "banner" | "thong-tin-tuyen-sinh" | "countdown" | "registration-form" | "phuong-thuc-dao-tao" | "mau-van-bang-moi";

export type SectionData =
  | {
      type: "banner";
      data: BannerProps;
    }
  | {
      type: "thong-tin-tuyen-sinh";
      data: ThongTinTuyenSinhProps;
    }
  | {
      type: "countdown";
      data: CountdownSectionProps;
    }
  | {
      type: "registration-form";
      data: RegistrationFormSectionProps;
    }
  | {
      type: "phuong-thuc-dao-tao";
      data: PhuongThucDaoTaoProps;
    }
  | {
      type: "mau-van-bang-moi";
      data: MauVanBangMoiProps;
    };

export interface PageAdsLayoutProps {
  sections: SectionData[];
  title?: string;
  image?: string;
  path?: string;
}

