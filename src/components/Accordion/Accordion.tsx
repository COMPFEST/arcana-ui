import React from "react"
import { css } from "twin.macro"
import AccordionItem from "./AccordionItem"
import { AnimateSharedLayout } from "framer-motion"
// import {
//   useSmoothScroll
// } from "@components/CompetitionDetail/SmoothScrollContext"

export interface AccordionProps { 
  title: string,
  items: Array<Type>
}

interface Type {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, items }) => {
  // const { faqRef } = useSmoothScroll()
  return (
    <AnimateSharedLayout type="crossfade">
      <div
        tw="flex flex-col justify-center items-center container mx-auto px-0 md:px-16 w-screen md:w-auto"
        css={css`
          @media (min-width: 1536px) {
            max-width: 1536px !important;
          }
          margin-top: 200px;
          @media (max-width: 767px) {
            margin-top: 100px;
          }
        `}
        id="faq"
      >
        <h1 tw="font-bold text-4xl mb-10 max-md:(text-2xl mb-2)">{title}</h1>
        <div tw="w-full">
          {items.map((item, key) => (
            <AccordionItem
              key={key}
              idx={key}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </AnimateSharedLayout>
  )
};

export default Accordion;
