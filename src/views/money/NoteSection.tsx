import styled from "styled-components";
import React, {ChangeEventHandler} from "react";
import {Input} from "components/Input";

type Props={
    value:string;
    onChange: (value:string)=>void;
}
const NoteSection: React.FunctionComponent<Props> = (props) => {
    const note=props.value
    const onChange: ChangeEventHandler<HTMLInputElement>=(e)=>{
            props.onChange(e.target.value)
    }
    return (
        <Wrapper>
               <Input label="备注" type="text"
               value={note} onChange={onChange}
                      placeholder="请填写备注"
               />
        </Wrapper>
    );
};

const Wrapper = styled.section`
  padding: 14px 16px;
  font-size: 14px;
  flex-grow: 1;
`;

export {NoteSection};