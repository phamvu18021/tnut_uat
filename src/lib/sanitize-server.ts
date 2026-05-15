import sanitizeHtml from "sanitize-html";

/**
 * Server-only sanitization logic.
 * This file should ONLY be imported in Server Components or API Routes.
 */
export const clean = (dirty: string) =>
  sanitizeHtml(dirty, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
    allowedAttributes: {
      a: ["href", "name", "target"],
      img: ["src", "srcset", "alt", "title", "width", "height", "loading"],
      "*": ["class", "id"]
    },
    allowedSchemes: ["http", "https", "ftp", "mailto", "tel"],
    selfClosing: [
      "img",
      "br",
      "hr",
      "area",
      "base",
      "basefont",
      "input",
      "link",
      "meta"
    ]
  });

export const cleanText = (text: string): string => {
  if (!text) return "";
  return text.replace(/\r\n/g, "<br>").replace(/\n/g, "<br>");
};

export const plainTextFromHtml = (html: string): string => {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
};
