import { FC } from "react";
import clsx from "clsx";
import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Heading from "../../component/Heading";
import Bounded from "../../component/Bounded";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="lg" className="font-nunito">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="max-w-md text-lg font-sans text-slate-600 ">
      {children}
    </p>
  ),
};

export type TextWithImageProps =
  SliceComponentProps<Content.TextWithImageSlice>;

/**
 * Component for "TextWithImage" Slices.
 */
const TextWithImage: FC<TextWithImageProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid grid-8 md:grid-cols-2 place-items-center">
        <PrismicNextImage field={slice.primary.image} alt="" className={clsx("rounded-lg", slice.variation === "imageRight" && "md:order-2")} />

        <div className="grid md:gap-4 md:w-[377px] md:h-[240px] sm:py-12 justify-items-start">
          <PrismicRichText components={components} field={slice.primary.heading} />
          <PrismicRichText components={components} field={slice.primary.body} />
        </div>
      </div>
    </Bounded>
  );
};

export default TextWithImage;
