"use client";
import React, { useState } from "react";
import {
    useSaveStateToLocalStorageOnChange,
    useSetInitialStore,
    useAppDispatch,
    useAppSelector
} from "lib/redux/hooks";

import { Center, Textarea } from "@chakra-ui/react";
import { PrimaryButton } from "./Button";

import { useChatGPT } from "lib/hooks/useChatGPT";
import { useEffect } from "react";
import { selectResume } from "lib/redux/resumeSlice";
import { deepMerge } from "lib/deep-merge";
import type { Resume } from "lib/redux/types";
import { setResume } from "lib/redux/resumeSlice";

export const JobDescriptionForm = () => {
    useSetInitialStore();
    useSaveStateToLocalStorageOnChange();

    const dispatch = useAppDispatch();
    const resume = useAppSelector(selectResume);

    const { response, sendMessage } = useChatGPT();

    const jdInputRef = React.createRef<HTMLTextAreaElement>();

    const aiBoost = () => {
        // alert("hello,world")
        const resumeData = {'resume': {}, 'jd': ''}
        const jd = jdInputRef.current?.value
        sendMessage(JSON.stringify(resume), jd)
    }

    useEffect(() => {
        if (response) {
            const aiResume = JSON.parse(response)

            console.log("response:------" + response);
            // 处理response的逻辑

            const mergedResumeState = deepMerge(
                aiResume,
                resume
              ) as Resume;
              dispatch(setResume(mergedResumeState));
        }
    }, [dispatch, response, resume]);

    return (
        <>
            <div className="mt-6 flex justify-center">
                <Textarea id="jd" ref = {jdInputRef} placeholder={"please input your job description here"} width={600} height={600} px={15} pt={15}></Textarea>
            </div>
            <Center mt={30}>
                <PrimaryButton href="../resume-optimize" onClick={aiBoost}>
                    AI-Boost Resume
                </PrimaryButton>
            </Center>

        </>
    )
}