/**
 * Client-safe sanitization dummy.
 * This file contains no heavy libraries and is safe for the browser bundle.
 */
export const clean = (dirty: string) => {
  // Client trusts server-sanitized strings
  return dirty;
};

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
