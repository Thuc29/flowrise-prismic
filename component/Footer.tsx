import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Logo from "./Logo";
import Bounded from "./Bounded";

export default async function Footer() {
     const client = createClient();
     const settings = await client.getSingle("settings");
     return (
          <Bounded as="footer">
               <div className="flex sm:flex-row flex-col items-center justify-between gap-6 font-nunito text-center">
                    <Link href="/">
                         <Logo />
                    </Link>
                    <p className="text-xs text-gray-800">©️ {new Date().getFullYear()} {settings.data.site_title}</p>
                    <nav>
                         <ul className="flex gap-4 font-nunito text-start text-gray-800">
                              {settings.data.navigation.map(({ link, label }) => (
                                   <li key={label} className="flex">
                                        <PrismicNextLink field={link} >
                                             {label}
                                        </PrismicNextLink>
                                   </li>
                              ))}
                         </ul>
                    </nav>
               </div>
          </Bounded >
     );
}