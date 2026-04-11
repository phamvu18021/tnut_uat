import { BannerProps } from "./index";

export const defaultBannerData: BannerProps = {
  backgroundImages: {
    desktop: "/bg-sec1.jpg",
    mobile: "/bg-sec1.jpg"
  },
  titles: {
    main: "CHƯƠNG TRÌNH ĐẠI HỌC TỪ XA",
    sub: "VĂN BẰNG THỨ 2"
  },
  infoSection: {
    timeFlexible: "Linh động thời gian",
    studyOnline: "HỌC ONLINE",
    recognizedDegree: "Nhận bằng chuẩn Bộ GD&ĐT"
  },
  benefits: [
    "DÀNH CHO NGƯỜI ĐI LÀM, BẬN RỘN",
    "HỌC VĂN BẰNG THỨ 2, CHUYỂN NGÀNH"
  ],
  featureCards: [
    {
      iconImage: "/s1-fea1-icon.png",
      textTop: "Bằng cử nhân được",
      textBottom: "Bộ GD&ĐT công nhận"
    },
    {
      iconImage: "/s1-fea2-icon.png",
      textTop: "Học",
      textBottom: "Online 100%"
    },
    {
      iconImage: "/s1-fea3-icon.png",
      textTop: "Phù hợp cho",
      textBottom: "Người đi làm"
    }
  ],
  featureCardsBackground: "/s1-feature-bg.jpg",
  personImage: {
    mobile: "/banner1-right.png",
    tablet: "/banner1-right.png",
    desktop: "/banner1-right.png"
  },
  buttonText: "Học Thử Ngay",
  buttonPopupId: "POPUP1"
};
