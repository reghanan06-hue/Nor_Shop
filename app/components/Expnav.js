
"use client";

import Link from "next/link";
import { useState } from "react";
// import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { name: "CLASSIC", href: "/clothes-of-spring/classic" },
    { name: "MODERN", href: "/clothes-of-spring/modern" },
    { name: "SPORTS", href: "/clothes-of-spring/sports" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-item">
        <Link
          href="/clothes-of-spring"
          className="nav-trigger"
          aria-expanded={isOpen}
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
        >
          CLOTHES OF SPRING
          <span className={`arrow ${isOpen ? "rotated" : ""}`} />
        </Link>

        {isOpen && (
          <div className="dropdown">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="dropdown-link"
                onClick={() => setIsOpen(false)}
              >
                {category.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}



// import Link from "next/link";

// export default function ExpNav() {
//   return (
//     <nav>
//       <ul className="flex gap-8 bg-gray-100 p-4">
//         {/* Home */}
//         <li>
//           <Link href="/" className="hover:text-blue-600">
//             Home
//           </Link>
//         </li>

//         {/* About dropdown */}
//         <li className="group relative">
//           <Link
//             href="/about"
//             className="inline-flex items-center gap-2 hover:text-blue-600"
//           >
//             About
//             <span className="text-xs">▼</span>
//           </Link>

//           {/* Submenu */}
//           <ul className="invisible absolute left-0 top-full z-50 min-w-40 translate-y-2 bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
//             <li>
//               <Link
//                 href="/about/team"
//                 className="block px-4 py-2 hover:bg-gray-100"
//               >
//                 Team
//               </Link>
//             </li>

//             <li>
//               <Link
//                 href="/about/clients"
//                 className="block px-4 py-2 hover:bg-gray-100"
//               >
//                 Clients
//               </Link>
//             </li>

//             <li>
//               <Link
//                 href="/about/careers"
//                 className="block px-4 py-2 hover:bg-gray-100"
//               >
//                 Careers
//               </Link>
//             </li>

//             <li>
//               <Link
//                 href="/about/legacy"
//                 className="block px-4 py-2 hover:bg-gray-100"
//               >
//                 Legacy
//               </Link>
//             </li>
//           </ul>
//         </li>
//       </ul>
//     </nav>
//   );
// }