import "globals.css";
import Providers from "providers";

export const metadata = {
    title: "ResumePilot - Free Resume Builder and Parser",
    description:
        "ResumePilot is a free and powerful resume builder that allows anyone to create a modern professional resume in 3 simple steps. For those who have an existing resume, ResumePilot also provides a resume parser to help test and confirm its ATS readability.",
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
