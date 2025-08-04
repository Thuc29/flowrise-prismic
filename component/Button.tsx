import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import clsx from "clsx";

export default function Button({
     className,
     prefetch,
     ...restProps
}: PrismicNextLinkProps) {
     return (
          <PrismicNextLink
               className={clsx(
                    "block w-fit bg-cyan-700 hover:bg-cyan-800 transition-colors duration-200 ease-in-out py-3 px-12 rounded-full font-nunito text-white font-bold text-base tracking-wider mb-8",
                    className
               )}
               prefetch={typeof prefetch === "boolean" || prefetch == null ? prefetch : undefined}
               {...restProps}
          />
     );
}