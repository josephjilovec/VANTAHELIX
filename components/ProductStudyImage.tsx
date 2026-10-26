import type { ImgHTMLAttributes } from "react";

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet" | "width" | "height"> & {
  src: string;
  thumbnail?: boolean;
};

export function ProductStudyImage({ src, thumbnail = false, sizes = "(max-width: 900px) 100vw, 70vw", loading = "lazy", ...props }: Props) {
  const stem = src.replace(/\.webp$/, "");
  return <img {...props}
    src={thumbnail ? `${stem}-320.webp` : src}
    srcSet={thumbnail ? undefined : `${stem}-768.webp 768w, ${src} 1448w`}
    sizes={thumbnail ? undefined : sizes}
    width={thumbnail ? 320 : 1448}
    height={thumbnail ? 240 : 1086}
    loading={loading}
    decoding="async"
  />;
}
