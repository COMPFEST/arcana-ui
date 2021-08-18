import React, { ReactNode, useState, Dispatch, SetStateAction } from 'react';
import tw, { css } from 'twin.macro';
import { RadioContainer, StyledLabel, StyledRadioButton, StyledRadioText } from './style';

interface RadioProps {
    options: Array<string>;
    setSelected: Dispatch<SetStateAction<string>>;
}

const Radio: React.FC<RadioProps> = (props) => {
    const { options } = props;
    const [selected, setSelected] = useState<string>('');
    console.log(selected);

    return (
        <RadioContainer>
            {options.map((e, i) => {
                return (
                    <StyledRadioButton key={i}>
                        <StyledLabel>
                            <input
                                onClick={(e: React.FormEvent<HTMLInputElement>) => {
                                    setSelected(e.currentTarget.value);
                                }}
                                type="radio"
                                name="gender"
                                value={e}
                            />
                            <StyledRadioText>{e}</StyledRadioText>
                        </StyledLabel>
                    </StyledRadioButton>
                );
            })}
        </RadioContainer>
    );
};

export default Radio;
