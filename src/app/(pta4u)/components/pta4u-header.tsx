'use client';
import Link from 'next/link';
import Pta4uButton from './pta4u-button';
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

export default function Pta4uHeader() {
  const [isItOpen, setIsItOpen] = useState(false);
  const burgerMenu = [
    {
      title: 'Услуги',
      mr: 72,
      items: [
        { title: 'Нотариальное заверение', url: '/services/certified-translation' },
        { title: 'Письменный перевод', url: '/services/written-translation' },
        { title: 'Апостиль для документов', url: '/services/apostille' },
        { title: 'Консульская легализация', url: '/services/legalization' },
        { title: 'Устный перевод', url: '/services/interpretation-translation' },
        { title: 'Истребование документов', url: '/services' }
      ]
    },
    {
      title: 'Компания',
      mr: 113,
      items: [
        { title: 'Информация', url: '/about' },
        { title: 'Преимущества', url: '/about' },
        { title: 'Команда', url: '/about' }
      ]
    },
    {
      title: 'Отзывы',
      mr: 99,
      items: [
        { title: 'Отзывы на Яндекс', url: '/reviews' },
        { title: 'Отзывы на 2gis', url: '/reviews' }
      ]
    },
    {
      title: 'Оплата',
      mr: 69,
      items: [
        { title: 'На сайте компании', url: '/payment' },
        { title: 'По QR коду', url: '/payment' },
        { title: 'На расчетный счет', url: '/payment' },
        { title: 'Наличными или картой', url: '/payment' }
      ]
    },
    {
      title: 'Контакты',
      mr: 0,
      items: [
        { title: 'Владивосток, пр-т Красного знамени, 3', url: '/contacts' },
        { title: '+7 902 480-02-62', url: '/contacts' },
        { title: 'Все контакты', url: '/contacts' }
      ]
    }
  ];
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
        <img
          className={'h-[30px] w-[78px] lg:h-[48px] lg:w-[123px]'}
          src={'/images/icons/logo_d.svg'}
          alt={'logo'}
        />
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
          <img
            className={'cursor-pointer'}
            onClick={() => window.open('https://wa.me/79024800262')}
            src={'/images/icons/phone.svg'}
            alt={'phone'}
          />
          <span className={'cursor-pointer'} onClick={() => window.open('tel:+79024800262')}>
            +7 902 480 0262
          </span>
        </div>
        <Pta4uButton type={'outline'} size={'md'}>
          Заказать
        </Pta4uButton>
        <GiHamburgerMenu
          className={`${isItOpen ? 'hidden' : 'block'} ml-3 text-2xl lg:hidden`}
          onClick={() => setIsItOpen(true)}
        />
        <IoClose
          className={`${isItOpen ? 'block' : 'hidden'} ml-3 text-2xl lg:hidden`}
          onClick={() => setIsItOpen(false)}
        />
      </div>
      <div className={`${isItOpen ? 'block' : 'hidden'} hamburger-menu overflow-scroll`}>
        <div className={'flex items-center mb-[32px]'}>
          <img
            className={'cursor-pointer h-[18px]'}
            onClick={() => window.open('https://wa.me/79024800262')}
            src={'/images/icons/phone.svg'}
            alt={'phone'}
          />
          <span
            className={'text-[14px] font-semibold cursor-pointer'}
            onClick={() => window.open('tel:+79024800262')}>
            +7 902 480 0262
          </span>
          <a className={'ml-[16px] text-[#747373] text-[14px]'} onClick={() => setIsItOpen(false)}>
            Все контакты
          </a>
        </div>
        <div className={'flex flex-col gap-[28px] px-[28px]'}>
          {burgerMenu.map((item, i) => {
            return (
              <div key={i} className={'flex flex-col gap-[9px]'}>
                <h3 className={'font-semibold text-[14px]'}>{item.title}</h3>
                <ul>
                  {item.items.map((link, i) => {
                    return (
                      <li key={i} className={'text-[#747373] text-[13px] leading-7'}>
                        <Link href={link.url}>{link.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
