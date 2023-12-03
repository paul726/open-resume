import "globals.css";
import { TopNavBar } from "components/TopNavBar";
import { Analytics } from "@vercel/analytics/react";
import Providers from "providers";

export const metadata = {
    title: "ResumePilot - Free Open-source Resume Builder and Parser",
    description:
        "ResumePilot is a free, open-source, and powerful resume builder that allows anyone to create a modern professional resume in 3 simple steps. For those who have an existing resume, ResumePilot also provides a resume parser to help test and confirm its ATS readability.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Providers>
            {children}
        </Providers>
    );
}
