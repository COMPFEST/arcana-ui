import React from "react";
import { shallow } from "enzyme";

import Button from "."

describe('Button', () => {
    it('renders correctly', () => {
        const type = 'button'
        const onClick = () => {
            console.log("Mario Serano ganteng gila");
        }
        const ref = React.useRef(null);
        const className="kelas-mario-ganteng"
        const buttonTheme='default'
        const wrapper = shallow(
            <Button type={type} onClick={onClick} ref={ref} className={className} buttonTheme={buttonTheme}>
                ini button
            </Button>
        )

        expect(wrapper.contains('ini button')).toEqual(true);
    })
})