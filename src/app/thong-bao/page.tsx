import ErrorBoundary from "@/components/ErrorBoundary";
import { Notifis } from "@/features/notifis";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tin tức và thông báo tuyển sinh - Đại Học Kỹ Thuật Công Nghiệp",
  description:
    "Đại Học Kỹ Thuật Công Nghiệp tuyển sinh năm 2023 - tổng hợp các tin tức tuyển sinh mới nhất của Đại Học Kỹ Thuật Công Nghiệp"
};

export default function Page() {
  return (
    <ErrorBoundary fallback={<h1>Lỗi server</h1>}>
      <Notifis />
    </ErrorBoundary>
  );
}
