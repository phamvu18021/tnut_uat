"use client";

import { useEffect, useState } from "react";
import { SamePostsContent } from "./SamePostsContent";

export const SamePosts = ({
  catId,
  id
}: {
  catId?: string;
  id?: string;
}) => {
  const [samePosts, setSamePosts] = useState<any[]>([]);

  useEffect(() => {
    if (!catId) return;

    const getSamePosts = async () => {
      try {
        const response = await fetch(
          `/api/posts/?categories=${catId}&exclude=${id}&per_page=3`
        );
        if (!response.ok) return;

        const data = await response.json();
        const relatedPosts = data.posts || [];
        setSamePosts(relatedPosts);
      } catch (error) {
        console.error("Fetch Same Posts Error:", error);
      }
    };

    getSamePosts();
  }, [catId, id]);

  if (!catId || !samePosts.length) return null;

  return <SamePostsContent samePosts={samePosts} />;
};
