import { ChangeEvent } from 'react';
import React from 'react';
interface IProps {
  placeholder?: string;
  value?: string;
  onChange?: (evt: ChangeEvent) => void;
}
export default function Pta4uInput({ value, placeholder, onChange }: IProps) {
  return (
    <input
      className="rounded-[12px] border
    border-[#D0D0D0] w-full
    px-[19px] py-[16px] focus:border-[#292426] outline-none"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={'text'}
    />
  );
}
