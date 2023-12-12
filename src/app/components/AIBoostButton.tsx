import React from "react";
import { useEffect } from "react";
import { PrimaryButton } from "./Button";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import { selectResume } from "lib/redux/resumeSlice";
import { useChatGPT } from "lib/hooks/useChatGPT";
import { deepMerge } from "lib/deep-merge";
import type { Resume } from "lib/redux/types";
import { setResume } from "lib/redux/resumeSlice";

export const AIBoostButton = () => {
    const dispatch = useAppDispatch();
    const resume = useAppSelector(selectResume);
    const pathName = usePathname()
    const isResumeBuilderPage = pathName === "/resume-builder"

    const { response, sendMessage } = useChatGPT();

    useEffect(() => {
        if (response) {
            const aiResume = JSON.parse(response)

            console.log("response:------" + response);
            // 处理response的逻辑

            // const mergedResumeState = deepMerge(
            //     aiResume,
            //     resume
            //   ) as Resume;
            //   dispatch(setResume(mergedResumeState));
        }
    }, [response]);

    const AiBoostResume = async () => {
        const jsonResume = JSON.stringify(resume)
        // const jsonResume = resume.profile.summary
        console.log(jsonResume)
        sendMessage(jsonResume)

    }
    return (
        <PrimaryButton className={isResumeBuilderPage ? '' : 'hidden'} href="../resume-optimize">
            AI-Boost Your Resume
        </PrimaryButton>
    )
}