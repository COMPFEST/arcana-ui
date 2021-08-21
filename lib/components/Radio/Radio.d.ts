import React, { Dispatch, SetStateAction } from 'react';
declare type RadioValueProps = {
    value: string;
    text: string;
};
interface RadioProps {
    options: Array<RadioValueProps>;
    setSelected: Dispatch<SetStateAction<string>>;
    name: string;
}
declare const Radio: React.FC<RadioProps>;
export default Radio;
//# sourceMappingURL=Radio.d.ts.map