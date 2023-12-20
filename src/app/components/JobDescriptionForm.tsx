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

// import { useChatGPT } from "lib/hooks/useChatGPT";
import { useEffect } from "react";
import { selectResume } from "lib/redux/resumeSlice";
import { deepMerge } from "lib/deep-merge";
import type { Resume } from "lib/redux/types";
import { setResume } from "lib/redux/resumeSlice";
import axios from 'axios';

interface ChatResponse {
    data: string;
}

export const JobDescriptionForm = () => {
    useSetInitialStore();
    useSaveStateToLocalStorageOnChange();

    const dispatch = useAppDispatch();
    const resume = useAppSelector(selectResume);


    const jdInputRef = React.createRef<HTMLTextAreaElement>();

    const aiBoost = async () => {
        // alert("hello,world")
        const jd = jdInputRef.current?.value
        try {
            const response = await axios.post<ChatResponse>('/api', {'resume': JSON.stringify(resume), 'jd': jd});
            console.log(response.data)

            // const aiResume = JSON.parse(response)

            // console.log("response:------" + response);
            // // 处理response的逻辑

            // const mergedResumeState = deepMerge(
            //     aiResume,
            //     resume
            //   ) as Resume;
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="mt-6 flex justify-center">
                <Textarea id="jd" ref = {jdInputRef} placeholder={"please input job description here"} width={600} height={600} px={15} pt={15}></Textarea>
            </div>
            <Center mt={30}>
                <PrimaryButton onClick={aiBoost}>
                    AI-Boost Resume
                </PrimaryButton>
            </Center>

        </>
    )
}