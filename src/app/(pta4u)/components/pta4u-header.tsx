import Image from 'next/image';
import logo from '../icons/logo_d.svg';
import phone from '../icons/phone.svg';
import Link from 'next/link';
import Pta4uButton from './pta4u-button';
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Pta4uHeader() {
  const menu = [
    { id: 1, title: 'Услуги', url: '/#services' },
    { id: 1, title: 'Компания', url: '/about' },
    { id: 1, title: 'Отзывы', url: '/reviews' },
    { id: 1, title: 'Оплата', url: '/payment' },
    { id: 1, title: 'Контакты', url: '/contacts' }
  ];
  return (
    <div
      className={
        'container mx-auto flex items-center h-[50px] lg:h-[100px] ' +
        'gap-6 lg:gap-10 xl:gap-20 px-5 justify-between lg:justify-start'
      }>
      <Link href={'/'}>
        <Image className={'h-[30px] w-[78px] lg:h-[48px] lg:w-[123px]'} src={logo} alt={'logo'} />
      </Link>
      <nav className={'hidden lg:block flex-1'}>
        <ul className={'flex justify-start gap-5'}>
          {menu.map((item, i) => {
            return (
              <li key={i}>
                <Link href={item.url}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={'flex gap-2 lg:gap-4 xl:gap-8 font-semibold'}>
        <div className={'hidden lg:flex items-center'}>
          <Image src={phone} alt={'phone'} />
          +7 902 480 0262
        </div>
        <Pta4uButton type={'outline'} size={'md'}>
          Заказать
        </Pta4uButton>
        <GiHamburgerMenu className="ml-3 text-2xl lg:hidden" />
      </div>
    </div>
  );
}
