import React from 'react';
import { twMerge } from 'tailwind-merge';

export const Container: React.FC<
  React.PropsWithChildren<{
    headlineText?: string;
    footerText?: React.ReactNode;
  }>
> = (props) => (
  <div className={twMerge('flex justify-center items-center min-h-screen', props.headlineText ? 'flex-col' : '')}>
    {props.headlineText && (
      <div className="bg-fixed bg-gradient-to-r from-[#083762] to-[#006DBE] p-10 w-full sm:w-3/4 md:w-1/2 flex flex-wrap justify-start items-center gap-4 sm:gap-6 md:gap-8">
        <h1 className="text-white text-2xl font-bold uppercase">{props.headlineText}</h1>
      </div>
    )}
    <div className="bg-black/30 p-8 w-full sm:w-3/4 md:w-1/2 rounded-md shadow-lg">{props.children}</div>
    {props.footerText && (
      <div className="bg-black/50 p-8 w-full sm:w-3/4 md:w-1/2 rounded-md shadow-lg">
        <p className="text-gray-300/60 text-md">{props.footerText}</p>
      </div>
    )}
  </div>
);
