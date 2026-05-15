"use client";

import { useEffect } from "react";

export const PostTocLogic = ({ post }: { post: any }) => {
  useEffect(() => {
    const replaceHrefWithId = () => {
      const ezTocContainer = document.getElementById("ez-toc-container");

      if (ezTocContainer) {
        const tocLinks = ezTocContainer.querySelectorAll('a[href*="#"]');

        tocLinks.forEach((link) => {
          link.addEventListener("click", (event) => {
            event.preventDefault();

            const href = link.getAttribute("href");
            const match = href?.match(/#(.+)$/);

            if (match && match[1]) {
              const id = match[1];
              const targetElement = document.getElementById(id);

              if (targetElement) {
                const offset = 150;
                const targetElementTop =
                  targetElement.getBoundingClientRect().top;
                window.scrollTo({
                  top: window.scrollY + targetElementTop - offset,
                  behavior: "smooth"
                });
              }
            }
          });
        });
      }
    };

    replaceHrefWithId();
  }, [post]);

  return null;
};
