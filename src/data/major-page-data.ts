export interface MajorPageData {
  content: {
    param_1: string;
    param_2: string;
    param_3: string;
    sub_title: string;
    value_1: string;
    value_2: string;
    value_3: string;
    introductionText: string;
  };
  sidebar: {
    registrationTitle: string;
    registrationDescription: string;
    registrationButtonText: string;
    highlightedJobsHtml: string;
    descriptionHtml: string;
  };
  trainning: {
    title?: string;
    desc?: string;
    image?: string;
    form_text_1?: string;
    form_text_2?: string;
    trainingProgramText?: string;
    eligibilityList: { text: string }[];
  };
  programValues?: {
    section_title?: string;
    image_1?: string;
    title_1?: string;
    content_1?: string;
    title_2?: string;
    content_2?: string;
    image_2?: string;
    title_3?: string;
    content_3?: string;
    title_4?: string;
    content_4?: string;
  };
}

export const defaultMajorData: MajorPageData = {
  content: {
    param_1: "Tổng Số Tín Chỉ",
    param_2: "Tổng Số Môn Học",
    param_3: "Thời Gian Đào Tạo",
    sub_title: "THÔNG TIN VÀ CƠ HỘI VIỆC LÀM",
    value_1: "128",
    value_2: "59",
    value_3: "Tối thiểu từ 2 - 4 năm",
    introductionText: `
      <p>Giới thiệu về ngành học này. Đây là đoạn văn HTML có thể tùy chỉnh cho từng ngành.</p>
      <p>Mô tả chi tiết về chương trình đào tạo, mục tiêu và lợi ích của ngành học.</p>
    `
  },
  trainning: {
    title: "Chương trình đào tạo",
    desc: "Mô tả chương trình đào tạo",
    image: "/TNUT-train.jpg",
    form_text_1: "NHẬN TƯ VẤN MIỄN PHÍ",
    form_text_2: "Đăng ký xét tuyển ngay",
    trainingProgramText: "Mô tả chi tiết về chương trình đào tạo",
    eligibilityList: [
      { text: "Đã có bằng Trung học phổ thông" },
      { text: "Đã có bằng cao đẳng cùng ngành" },
      { text: "Đã có bằng đại học các ngành khác" }
    ]
  },

  sidebar: {
    registrationTitle: "Đăng ký tuyển sinh",
    registrationDescription:
      "Tư vấn chuyên nghiệp. Thủ tục nhanh gọn. Ưu tiên nộp hồ sơ sớm.",
    registrationButtonText: "Đăng Ký Ngay",
    highlightedJobsHtml: `
      <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
        <p style="margin: 0; font-size: 14px; color: #374151;">Cơ hội việc làm 1 - có thể tùy chỉnh HTML</p>
      </div>
      <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
        <p style="margin: 0; font-size: 14px; color: #374151;">Cơ hội việc làm 2 - có thể tùy chỉnh HTML</p>
      </div>
    `,
    descriptionHtml: `
      <p style="font-size: 14px; color: #374151; margin: 0;">Mô tả chi tiết về cơ hội nghề nghiệp và triển vọng phát triển trong ngành.</p>
    `
  },
  programValues: {
    section_title:
      "GIÁ TRỊ NHẬN ĐƯỢC TỪ CHƯƠNG TRÌNH ĐÀO TẠO HỆ TỪ XA",
    image_1: "/sep.webp",
    title_1: "BẰNG CỬ NHÂN ĐƯỢC BỘ GD&ĐT CÔNG NHẬN",
    content_1:
      '<p>Tốt nghiệp Hệ từ xa sinh viên được nhận bằng Đại học danh giá do trường Đại học Kỹ thuật Công nghiệp (TNUT) cấp, được Bộ GD công nhận, sử dụng để thi công chức nhà nước, tăng bậc lương, học lên các cấp học cao hơn. <span style="color: #ff6600;"><strong>Đặc biệt: Trên văn bằng không ghi hình thức đào tạo tương đương chương trình Văn bằng 2, Liên thông,...</strong></span></p>',
    title_2: "CHƯƠNG TRÌNH ĐÀO TẠO CỦA TNUT E-LEARNING",
    content_2:
      '<p><span style="color: #ff0000;">Chương trình đào tạo bao gồm các môn học cơ bản tương tự các ngành khác trên thị trường và bổ sung thêm khối kiến thức Kỹ thuật, Công nghệ. Với chuyên môn này chính là lợi thế của sinh viên Hệ từ xa TNUT E-learning phù hợp với cách doanh nghiệp lĩnh vực công nghệ nước ngoài. Các kiến thức cơ bản đều được đào tạo đầy đủ.</span></p>',
    image_2: "/phoi-bang-dh-thai-nguyen.webp",
    title_3: "CƠ HỘI THỰC HÀNH THỰC TẾ TẠI NƠI LÀM VIỆC",
    content_3:
      "<p>Một số sinh viên hệ từ xa đã có kinh nghiệm làm việc tại các doanh nghiệp về lĩnh vực Công Nghệ. Đây là lợi thế lớn vì họ có thể kết hợp giữa học và làm, vừa bổ sung kiến thức chuyên môn, vừa tích lũy kinh nghiệm thực tế. Có thể sử dụng chuyên môn hệ từ xa vào công việc tại công ty</p>",
    title_4: "TIẾT KIỆM CHI PHÍ VÀ TỐI ƯU NGUỒN LỰC",
    content_4:
      "<p>Học tập và thực hành từ xa chương trình cấp bằng tương đương Văn bằng 2, Liên thông,... giúp sinh viên tiết kiệm chi phí di chuyển, lưu trú và sử dụng cơ sở vật chất. Các công cụ kỹ thuật số thay thế phần nào nhu cầu sử dụng phòng thí nghiệm hoặc xưởng thực hành truyền thống.</p>"
  }
};

export const nganhNgonNguTiengAnhData: MajorPageData = {
  content: {
    introductionText: `
      <p>Ngành ngôn ngữ Anh. (tiếng Anh là English Studies) là một ngành học chuyên nghiên cứu, sử dụng tiếng Anh để sinh viên có thể làm chủ và giao tiếp tiếng Anh thành thạo. Ngôn ngữ Anh mang đến nhiều cơ hội cho các bạn trẻ mong muốn làm việc tại môi trường kinh tế hội nhập với các doanh nghiệp nước ngoài.</p>
      <p>Chương trình đào tạo ngành Ngôn ngữ Anh cung cấp cho sinh viên các kiến thức bổ trợ thêm về nền kinh tế, tài chính ngân hàng, xuất nhập khẩu, quan hệ quốc tế; những kiến thức chung và chuyên sâu về ngôn ngữ, văn hóa và văn học, đất nước – con người không chỉ của quốc gia sản sinh ra tiếng Anh mà của cả các quốc gia nói tiếng Anh.</p>
    `,

    param_1: "Tổng Số Tín Chỉ.",
    param_2: "Tổng Số Môn Học.",
    param_3: "Thời Gian Đào Tạo.",
    sub_title: "THÔNG TIN VÀ CƠ HỘI VIỆC LÀM.",
    value_1: "128.",
    value_2: "59.",
    value_3: "Tối thiểu từ 2 - 4 năm."
  },
  trainning: {
    title: "Chương trình đào tạo Ngôn ngữ Anh",
    desc: "Mô tả chương trình đào tạo ngành Ngôn ngữ Anh",
    image: "/TNUT-train.jpg",
    form_text_1: "NHẬN TƯ VẤN MIỄN PHÍ",
    form_text_2: "Đăng ký xét tuyển ngay",
    trainingProgramText:
      "Mô tả chi tiết về chương trình đào tạo ngành Ngôn ngữ Anh",
    eligibilityList: [
      { text: "Đã có bằng Trung học phổ thông" },
      { text: "Đã có bằng cao đẳng ngành Ngôn ngữ Anh" },
      { text: "Đã có bằng cao đẳng khác ngành Ngôn ngữ Anh" },
      { text: "Đã có bằng trung cấp ngành Ngôn ngữ Anh" },
      { text: "Đã có bằng trung cấp khác ngành Ngôn ngữ Anh" }
    ]
  },
  sidebar: {
    registrationTitle: "Đăng ký tuyển sinh.",
    registrationDescription:
      "Tư vấn chuyên nghiệp. Thủ tục nhanh gọn. Ưu tiên nộp hồ sơ sớm.",
    registrationButtonText: "Đăng Ký Ngay",
    highlightedJobsHtml: `
      <p>Sau khi hoàn thành chương trình học ngành Ngôn ngữ Anh hệ đào tạo từ xa, học viên có thể đảm nhận các công việc:</p>
      <ul>
        <li>Biên,. phiên dịch viên tự do hoặc làm cho các công ty, doanh nghiệp trong và ngoài nước với lĩnh vực khoa học, kỹ thuật và công nghệ.</li>
        <li>Chuyên viên làm việc trong các lĩnh vực công nghiệp, tài chính, ngoại giao,…</li>
        <li>Làm nhân viên lễ tân tại các nhà hàng và khách sạn quốc tế, hướng dẫn viên du lịch quốc tế (khi có chứng chỉ nghề)</li>
        <li>Làm việc tại các bộ phận đối ngoại của các cơ quan nhà nước, các tổ chức xã hội, các công ty…</li>
        <li>Làm thư ký hoặc trợ lý giám đốc cho các doanh nghiệp trong và ngoài nước</li>
        <li>Giáo viên/Giảng viên dạy tiếng Anh, đặc biệt liên quan đến lĩnh vực khoa học kỹ thuật và công nghệ…</li>
      </ul>
    `,
    descriptionHtml: `
      <p><strong>Các lưu ý:</strong></p>
      <ol>
        <li>Đối tượng. đã có bằng TC, CĐ, ĐH trở lên được xét công nhận và chuyển đổi tín chỉ. Thời gian hoàn thành CTĐT tùy thuộc vào khối lượng học tập thực tế và giới hạn học tập trong từng học kỳ. Đối tượng từ THPT phải hoàn thành toàn bộ chương trình học phần và đáp ứng các yêu cầu học tập từ xa trực tuyến.</li>
        <li>Thời gian đào tạo được tính từ ngày có quyết định công nhận và sẽ được tư vấn đăng ký KHHT toàn khóa phù hợp theo quy định.</li>
        <li>Mức thu học phí hàng năm theo thông báo của Trường. Học viên nộp học phí theo thông báo thu học phí hàng kỳ từ trường Đại học Kỹ thuật Công Nghiệp Thái Nguyên.</li>
        <li>Không phải đóng bất kỳ khoản phí nào ngoài các khoản thu học phí và xét miễn môn theo quy định của Trường</li>
        <li>Không được phép cho người khác sử dụng tài khoản học tập của mình.</li>
        <li>Nghiêm cấm việc gian lận trong học tập, nhà trường sẽ xử lý kỷ luật theo quy định khi phát hiện ra.</li>
        <li>Học viên in, ký và nộp lại cho Cố vấn học tập để đăng ký.</li>
      </ol>
    `
  },
  programValues: {
    section_title:
      "GIÁ TRỊ NHẬN ĐƯỢC TỪ CHƯƠNG TRÌNH ĐÀO TẠO NGÀNH NGÔN NGỮ ANH HỆ TỪ XA",
    image_1: "http://10.10.92.6:8049/wp-content/uploads/2025/10/167-3.jpg",
    title_1: "BẰNG CỬ NHÂN NGÔN NGỮ ANH ĐƯỢC BỘ GD&ĐT CÔNG NHẬN",
    content_1:
      '<p>Tốt nghiệp Hệ từ xa ngành Ngôn Ngữ Anh sinh viên được nhận bằng Đại học danh giá do trường Đại học Kỹ thuật Công nghiệp (TNUT) cấp, được Bộ GD công nhận, sử dụng để thi công chức nhà nước, tăng bậc lương, học lên các cấp học cao hơn. <span style="color: #ff6600;"><strong>Đặc biệt: Trên văn bằng không ghi hình thức đào tạo tương đương chương trình Ngôn ngữ Anh Văn bằng 2, Liên thông ngành Ngôn Ngữ Anh,...</strong></span></p>',
    title_2: "CHƯƠNG TRÌNH ĐÀO TẠO NGÔN NGỮ ANH CỦA TNUT E-LEARNING",
    content_2:
      '<p><span style="color: #ff0000;">Chương trình đào tạo bao gồm các môn học cơ bản tương tự các ngành Ngôn ngữ Anh khác trên thị trường và bổ sung thêm khối kiến thức Kỹ thuật, Công nghệ. Với chuyên môn này chính là lợi thế của sinh viên ngành Ngôn ngữ anh Hệ từ xa TNUT E-learning phù hợp với cách doanh nghiệp lĩnh vực công nghệ nước ngoài. Các kiến thức Ngôn ngữ Anh cơ bản đều được đào tạo đầy đủ.</span></p>',
    image_2: "http://10.10.92.6:8049/wp-content/uploads/2025/10/165-3.jpg",
    title_3: "CƠ HỘI THỰC HÀNH THỰC TẾ TẠI NƠI LÀM VIỆC",
    content_3:
      "<p>Một số sinh viên hệ từ xa đã có kinh nghiệm làm việc tại các doanh nghiệp về lĩnh vực Công Nghệ. Đây là lợi thế lớn vì họ có thể kết hợp giữa học và làm, vừa bổ sung kiến thức chuyên môn, vừa tích lũy kinh nghiệm thực tế. Có thể sử dụng chuyên môn Ngôn ngữ Anh hệ từ xa vào công việc tại công ty</p>",
    title_4: "TIẾT KIỆM CHI PHÍ VÀ TỐI ƯU NGUỒN LỰC",
    content_4:
      "<p>Học tập và thực hành từ xa chương trình cấp bằng tương đương Ngôn ngữ Anh Văn bằng 2, Liên thông ngành Ngôn Ngữ Anh,... giúp sinh viên tiết kiệm chi phí di chuyển, lưu trú và sử dụng cơ sở vật chất. Các công cụ kỹ thuật số thay thế phần nào nhu cầu sử dụng phòng 42 thí nghiệm hoặc xưởng thực hành truyền thống.</p>"
  }
};
