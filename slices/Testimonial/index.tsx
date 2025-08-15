import { Content, isFilled } from "@prismicio/client";
import {
  SliceComponentProps,
  JSXMapSerializer,
  PrismicRichText,
} from "@prismicio/react";


import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import Heading from "../../component/Heading";
import Bounded from "../../component/Bounded";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="md" className="text-center mb-9 font-semibold font-nunito">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-xl md:text-2xl font-sans font-normal font-body text-slate-600 mb-8">
      {children}
    </p>
  ),
};

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials: React.FC<TestimonialsProps> = async ({ slice }) => {
  // Create a Prismic client to fetch data
  const client = createClient();

  const testimonials = await Promise.all(
    slice.primary.testimonial.map((item) => {
      if (
        isFilled.contentRelationship(item.testimonial) &&
        item.testimonial.uid
      ) {
        return client.getByUID("testimonial", item.testimonial.uid);
      }
    })
  );
  console.log("Testimonials data:", testimonials);

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText components={components} field={slice.primary.heading} />
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
        {testimonials.map(
          (item, index) =>
            item && (
              <div
                key={index}
                className="border bg-white shadow-lg rounded-lg px-8 md:px-14 py-10 md:py-16 grid content-between"
              >
                <blockquote className="text-xl md:text-2xl font-normal font-nunito text-slate-600 mb-8">
                  {item.data.quote}
                </blockquote>

                <div className="flex items-center font-sans">
                  <PrismicNextImage
                    width={56}
                    height={56}
                    field={item.data.avatar}
                    className="rounded-full mr-4 aspect-square"
                    imgixParams={{ ar: "1:1", fit: "crop" }}
                  />
                  <div>
                    <p className="text-base font-medium text-slate-700">
                      {item.data.name}
                    </p>
                    <p className="text-base text-slate-600">
                      {item.data.job_title}
                    </p>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </Bounded>
  );
};

export default Testimonials;