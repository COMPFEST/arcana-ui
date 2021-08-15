import React from "react";
export interface AccordionProps {
    title: string;
    items: Array<Type>;
}
interface Type {
    title: string;
    content: string;
}
declare const Accordion: React.FC<AccordionProps>;
export default Accordion;
//# sourceMappingURL=Accordion.d.ts.map