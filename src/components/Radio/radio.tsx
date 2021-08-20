import React, { ReactNode, useState, Dispatch, SetStateAction } from 'react';
import tw, { css } from 'twin.macro';
import { RadioContainer, StyledLabel, StyledRadioButton, StyledRadioText } from './style';
import { useForm } from 'react-hook-form';

type RadioValueProps = {
    value: string;
    text: string;
};

interface RadioProps {
    options: Array<RadioValueProps>;
    setSelected: Dispatch<SetStateAction<string>>;
    name: string;
}

const Radio: React.FC<RadioProps> = (props) => {
    const { options, name } = props;

    const onSubmit = (data: any) => alert(data);

    const { register, handleSubmit } = useForm();
    return (
        <RadioContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                {options.map((e, i) => {
                    return (
                        <StyledRadioButton key={i}>
                            <StyledLabel>
                                <input
                                    type="radio"
                                    {...register(name, { required: true })}
                                    name={name}
                                    value={e.value}
                                />
                                <StyledRadioText>{e.text}</StyledRadioText>
                            </StyledLabel>
                        </StyledRadioButton>
                    );
                })}
                <button type="submit">Submit</button>
            </form>
        </RadioContainer>
    );
};

export default Radio;
