import React from "react";

export const HaveAnAccount = ({
    className = "",
    spanClassName,
    text = "Already have an ccount?",
    text1 = "Log in&nbsp;&nbsp;", }: { className: string, spanClassName: any, text: string, text1: string }) => {

    return (
        <div className={className}>
            <div className="inline-flex items-start gap-[10px] p-[2px] relative">
                <p className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-transparent text-[16px] tracking-[0] leading-[normal]">
                    <span className={`text-[#333333] ${spanClassName}`}>{text}</span>
                    <span className="text-[#666666]">&nbsp;</span>
                    <span className="text-[#111111] underline">{text1}</span>
                </p>
            </div>
        </div>
    )
}