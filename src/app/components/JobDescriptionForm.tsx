"use client";
import { useState } from "react";
import {
  useSaveStateToLocalStorageOnChange,
  useSetInitialStore,
} from "lib/redux/hooks";

export const JobDescriptionForm = () => {
    useSetInitialStore();
    useSaveStateToLocalStorageOnChange();
    return (
        <div >
            AI-Boost Your Resume
        </div>
    )
}