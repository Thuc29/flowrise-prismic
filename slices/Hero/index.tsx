import { FC } from "react";
import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Bounded from "@/component/Bounded";
import Button from "../../component/Button";
import Heading from "../../component/Heading";


const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading as="h1" size="xl" className="md:mb-8 mb-4 mt-12 first:mt-0 last:mb-0" >{children}</Heading>
  ),
  paragraph: ({ children }) => (
    <p className="md:mb-8 max-w-md text-2xl text-center font-normal mb-4 leading-10 text-slate-600 font-sans">{children}</p>
  )
}


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

        <PrismicRichText field={slice.primary.heading} components={components} />
        <PrismicRichText field={slice.primary.body} components={components} />
        <Button field={slice.primary.button_link} className="mb-8 md:mb-10">
          {slice.primary.button_text}
        </Button>
        <PrismicNextImage field={slice.primary.image} alt="" className="drop-shadow-xl max-w-4xl " />
      </div>

    </Bounded>
  );
};

export default Hero;
