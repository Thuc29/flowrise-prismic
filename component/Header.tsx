import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "./Bounded";
import Logo from "./Logo";


export default async function Header() {
     const client = createClient();
     const settings = await client.getSingle("settings");
     return (
          <Bounded as="header" className="py-4 md:py-6 lg:py-8">
               <div className="flex gap-4 items-center justify-between sm:flex-row flex-col">
                    <Link href="/" className="">
                         <Logo />
                    </Link>
                    <nav>
                         <ul className="flex gap-4 font-nunito text-lg font-semibold text-gray-800">
                              {settings.data.navigation.map(({ link, label }) => (
                                   <li key={label} className="">
                                        <PrismicNextLink field={link} className="p-3">
                                             {label}
                                        </PrismicNextLink>
                                   </li>
                              ))}

                         </ul>
                    </nav>
               </div>
          </Bounded>
     );
}