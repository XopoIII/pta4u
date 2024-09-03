import React from 'react';
const items = [
  { title: 'В офисе компании', icon: 'office.svg', color: 'bg-qb-green', url: '', w: 58, h: 38 },
  { title: 'По электронной почте', icon: 'mail.svg', color: 'bg-qb-blue', url: '', w: 62, h: 38 },
  { title: 'Через WhatsApp', icon: 'social.svg', color: 'bg-qb-purple', url: '', w: 65, h: 38 },
  { title: 'Курьером по городу', icon: 'car.svg', color: 'bg-qb-red', url: '', w: 64, h: 40 },
  {
    title: 'Курьерской службой по РФ и за пределы',
    icon: 'map.svg',
    color: 'bg-qb-orange',
    url: '',
    w: 63,
    h: 40
  }
];

export default function Pta4uQuickBuy() {
  return (
    <div className={'container h-full mx-auto px-5'}>
      <h1 className={'text-[18px] lg:text-[30px] font-semibold leading-9 text-center'}>
        Быстрое оформление заказа
      </h1>
      <p
        className={
          'text-[14px] lg:text-[18px] max-w-[780px] leading-[18px] text-center mx-auto mt-[3px] lg:mt-5 text-[#747373]'
        }>
        Время – очень драгоценный ресурс. Мы высоко ценим Ваше время, и предлагаем различные способы
        оформления и получения заказа.
      </p>
      <div
        className={
          'mt-[19px] lg:mt-[46px] flex-col flex lg:flex-row gap-[10px] lg:gap-[26px] justify-between w-full'
        }>
        {items.map((item, i) => {
          const classes = [
            'h-[70px] lg:h-[172px] w-full lg:w-[219px] rounded-[20px] lg:rounded-[30px]',
            'px-[37px] lg:px-[25px] py-[16px] lg:pt-[36px] lg:pb-[40px] lg:text-center',
            'flex lg:flex-col items-center',
            'lg:justify-between'
          ];
          classes.push(item.color);
          return (
            <div key={i} className={classes.join(' ')}>
              <span className={'order-2 lg:order-1 text-[14px] lg:text-[16xp]'}>{item.title}</span>
              <img
                className={'order-1 lg:order-2 mr-[16px] lg:mr-0'}
                src={'/icons/qb/' + item.icon}
                alt={'icon'}
                width={item.w}
                height={item.h}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
