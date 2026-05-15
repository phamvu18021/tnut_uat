const isServer = typeof window === "undefined";
let sanitizeHtml: any = null;

if (isServer) {
  // Use require to avoid bundling on the client
  sanitizeHtml = require("sanitize-html");
}

export const clean = (dirty: string) => {
  if (isServer && sanitizeHtml) {
    return sanitizeHtml(dirty, {
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
  }
  return dirty; // On client, we trust the server-sanitized string
};

export const cleanText = (text: string): string => {
  if (!text) return "";
  return text.replace(/\r\n/g, "<br>").replace(/\n/g, "<br>");
};

/** Plain text for alt / aria labels (strip HTML entities roughly via DOM-free regex). */
export const plainTextFromHtml = (html: string): string => {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
};
