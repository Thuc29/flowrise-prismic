import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";


export default async function Header() {
     const client = createClient();
     const settings = await client.getSingle("settings");
     return (
          <header className="bg-gray-800 text-white p-4">
               <Link href="/" className="text-2xl font-bold">
                    {settings.data.site_title}
               </Link>
               <nav>
                    <ul>
                         {settings.data.navigation.map(({ link, label }) => (
                              <li key={label} className="inline-block mr-4">
                                   <PrismicNextLink field={link} className="text-white hover:text-gray-400">
                                        {label}
                                   </PrismicNextLink>
                              </li>
                         ))}

                    </ul>
               </nav>
          </header>
     );
}