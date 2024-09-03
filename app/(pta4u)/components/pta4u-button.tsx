import React from 'react';

interface IProps {
  className?: string;
  type?: 'outline' | 'primary';
  size?: 'md' | 'xl';
  children?: React.ReactNode;
}

const sizesMap = {
  md: 'leading-[12px] py-1.5 px-5 text-[13px] lg:text-[16px] lg:py-2.5 lg:px-5 lg:min-w-[140px] lg:h-[40px] lg:leading-5',
  xl: 'px-5 lg:px-6 py-4 text-[14px] lg:text-[16px] font-semibold leading-[18px]'
};

const typesMap = {
  primary: 'bg-gradient-to-r from-[#F55751] to-[#D83CA3] text-white ',
  outline:
    'border border-[#D0D0D0] bg-white hover:!text-white hover:border-transparent hover:bg-gradient-to-r from-[#F55751] to-[#D83CA3]'
};

export default function Pta4uButton({ className, children, size, type }: IProps) {
  const buttonSize = size ?? 'xl';
  const buttonType = type ?? 'primary';
  const buttonClasses = ['rounded-full', typesMap[buttonType], sizesMap[buttonSize]];
  className && buttonClasses.push(className);
  return <button className={buttonClasses.join(' ')}>{children}</button>;
}
