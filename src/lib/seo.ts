import { useEffect } from "react";

type MetaTag =
  | { name: string; content: string }
  | { property: string; content: string };

export type SeoOptions = {
  title?: string;
  description?: string;
  meta?: MetaTag[];
};

function setMeta(selector: string, attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    el.setAttribute("data-seo", "1");
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function useSeo({ title, description, meta = [] }: SeoOptions) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      setMeta('meta[name="description"]', "name", "description", description);
    }
    for (const tag of meta) {
      if ("name" in tag) {
        setMeta(`meta[name="${tag.name}"]`, "name", tag.name, tag.content);
      } else {
        setMeta(`meta[property="${tag.property}"]`, "property", tag.property, tag.content);
      }
    }
  }, [title, description, JSON.stringify(meta)]);
}