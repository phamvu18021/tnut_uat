import { ThongTinTuyenSinhProps } from "./index";

export const defaultThongTinTuyenSinhData: ThongTinTuyenSinhProps = {
  title: "THÔNG TIN TUYỂN SINH",
  defaultActiveTab: 4,
  backgroundImage: "/bg-sec2.jpg",
  tabs: [
    {
      id: "doi-tuong",
      label: "ĐỐI TƯỢNG TUYỂN SINH",
      content: {
        title: "Đối tượng tuyển sinh<HN - HCM>",
        items: [
          "Người đã tốt nghiệp THPT hoặc tương đương",
          "Người đã có bằng tốt nghiệp trung cấp, cao đẳng",
          "Người đã có bằng đại học (học văn bằng 2)"
        ],
        image: "/img-tab3-sec2.png"
      }
    },
    {
      id: "yeu-cau",
      label: "YÊU CẦU TUYỂN SINH",
      content: {
        title: "Yêu cầu tuyển sinh <HN - HCM>",
        items: [
          "Có bằng tốt nghiệp THPT hoặc tương đương",
          "Đủ sức khỏe để học tập",
          "Không trong thời gian thi hành án hoặc truy cứu trách nhiệm hình sự"
        ],
        image: "/img-tab3-sec2.png"
      }
    },
    {
      id: "hinh-thuc",
      label: "HÌNH THỨC TUYỂN SINH",
      content: {
        title: "Hình thức tuyển sinh  <HN - HCM>",
        items: [
          "Xét tuyển dựa trên học bạ THPT",
          "Xét tuyển dựa trên kết quả thi THPT Quốc gia",
          "Xét tuyển thẳng theo quy định của Bộ GD&ĐT"
        ],
        image: "/img-tab3-sec2.png"
      }
    },
    {
      id: "noi-tiep-nhan",
      label: "NƠI TIẾP NHẬN HỒ SƠ",
      content: {
        title: "Nơi tiếp nhận hồ sơ <HN - HCM>",
        items: [
          "Phòng Đào tạo - Trường Đại học Lao động - Xã hội",
          "Các cơ sở đào tạo liên kết",
          "Nộp hồ sơ trực tuyến qua website"
        ],
        image: "/img-tab3-sec2.png"
      }
    },
    {
      id: "van-bang",
      label: "VĂN BẰNG",
      content: {
        title: "Văn bằng <HN - HCM>",
        items: [
          "Bằng tốt nghiệp Đại học do Hiệu trưởng Trường Đại học Lao động - Xã hội cấp.",
          "Văn bằng thuộc hệ thống giáo dục quốc dân, không phân biệt hình thức đào tạo."
        ],
        image: "/img-tab3-sec2.png"
      }
    }
  ],
  graduationBenefits: {
    title: "SAU KHI TỐT NGHIỆP HỌC VIÊN SẼ CÓ",
    items: [
      "Bằng Cử nhân do Hiệu trưởng Trường Đại học Lao động Xã - hội cấp",
      "Bằng tốt nghiệp có giá trị pháp lý tương đương Chính quy. Hiện nay, bằng tốt nghiệp đại học KHÔNG ghi hình thức đào tạo.",
      "Đủ điều kiện học lên các bậc học cao hơn như Thạc sỹ, Tiến sỹ cũng như đề thi xét tuyển công chức và viên chức theo quy định."
    ],
    image: "/img-tab1-sec2.png"
  }
};
