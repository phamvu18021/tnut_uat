"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ClientRedirect({ to }: { to: string }) {
  const router = useRouter();

  useEffect(() => {
    if (to.startsWith("http")) {
      window.location.href = to;
      return;
    }
    router.push(to);
  }, [router, to]);

  return null;
}
