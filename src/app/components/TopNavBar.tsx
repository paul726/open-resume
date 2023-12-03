"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logoSrc from "public/logo.svg";
import { cx } from "lib/cx";
import { AIBoostButton } from "./AIBoostButton";
import { Provider } from "react-redux";
import { store } from "lib/redux/store";


export const TopNavBar = () => {
  const pathName = usePathname();
  const isHomePage = pathName === "/";


  return (
    <Provider store={store}>
      <header
        aria-label="Site Header"
        className={cx(
          "flex h-[var(--top-nav-bar-height)] items-center border-b-2 border-gray-100 px-3 lg:px-12",
          isHomePage && "bg-dot"
        )}
      >
        <div className="flex h-10 w-full items-center justify-between">
          <Link href="/">
            <span className="sr-only">ResumePilot</span>
            <h2 className="h-8 w-full">ResumePilot</h2>
          </Link>
          <nav
            aria-label="Site Nav Bar"
            className="flex items-center gap-2 text-sm font-medium"
          >
            <AIBoostButton />
            <Link href="../premium" className="rounded-md px-2 py-2 text-blue-600 hover:bg-gray-100 focus-visible:bg-gray-100">Premium</Link>
            {[
              ["/resume-builder", "Builder"],
              ["/resume-parser", "Parser"],
            ].map(([href, text]) => (
              <Link
                key={text}
                className="rounded-md px-1.5 py-2 text-gray-500 hover:bg-gray-100 focus-visible:bg-gray-100 lg:px-4"
                href={href}
              >
                {text}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </Provider>
  );
};
