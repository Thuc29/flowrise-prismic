import { FC } from "react";
import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Heading from "../../component/Heading";
import Bounded from "../../component/Bounded";
import Button from "../../component/Button";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="lg" className="font-nunito font-semibold text-center mb-4 ">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-center font-sans text-slate-600 mb-8">
      {children}
    </p>
  ),
};
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction: FC<CallToActionProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="max-w-4xl m-auto shadow-2xl md:px-12 px-4 py-12 grid place-items-center 
      rounded-lg bg-gradient-to-tr from-cyan-200 via-white to-emerald-200">
        <PrismicRichText components={components} field={slice.primary.heading} />
        <PrismicRichText components={components} field={slice.primary.body} />
        <Button field={slice.primary.button_link}>
          {slice.primary.button_text}
        </Button>
      </div>
    </Bounded>
  );
};

export default CallToAction;
