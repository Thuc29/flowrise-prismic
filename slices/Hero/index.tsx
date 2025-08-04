import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Bounded from "@/component/Bounded";
import Button from "../../component/Button";
/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid grid-cols-1 place-items-center text-center">

        <PrismicRichText field={slice.primary.heading} components={{
          heading1: ({ children }) => (
            <h1 className="md:text-7xl text-5xl font-bold leading-tight tracking-tight font-nunito text-slate-700
          ">{children}</h1>
          )
        }} />
        <PrismicRichText field={slice.primary.body} components={{
          paragraph: ({ children }) => (
            <p className="md:mb-8 max-w-md text-2xl text-center font-normal mb-4 leading-10 text-slate-600 font-sans">{children}</p>
          )
        }} />
        <Button field={slice.primary.button_link} className="mb-8 md:mb-10">
          {slice.primary.button_text}
        </Button>
        <PrismicNextImage field={slice.primary.image} className="drop-shadow-xl max-w-4xl " />
      </div>

    </Bounded>
  );
};

export default Hero;
