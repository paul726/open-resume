import React from "react";
import { useEffect } from "react";
import { PrimaryButton } from "./Button";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import { selectResume } from "lib/redux/resumeSlice";
import { useChatGPT } from "lib/hooks/useChatGPT";


export const AIBoostButton = () => {
    
    const pathName = usePathname()
    const isResumeBuilderPage = pathName === "/resume-builder"

    return (
        <PrimaryButton className={isResumeBuilderPage ? '' : 'hidden'} href="../resume-optimize">
            AI-Boost Your Resume
        </PrimaryButton>
    )
}