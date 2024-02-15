import { images } from 'next/dist/build/webpack/config/blocks/images';
import Link from 'next/link';
import React from 'react';
const services = [
  {
    title: 'Письменный перевод любой документации и текстов',
    image: "bg-[url('/images/services/image1056.png')]",
    icon: '',
    url: '/services/written-translation'
  },
  {
    title: 'Нотариальное заверение перевода',
    image: "bg-[url('/images/services/image1055.png')]",
    icon: '',
    url: '/services/slug-two'
  },
  {
    title: 'Апостиль для документов',
    image: "bg-[url('/images/services/Rectangle613.png')]",
    icon: '',
    url: ''
  },
  {
    title: 'Устный перевод — инструмент делового общения',
    image: "bg-[url('/images/services/image1057.png')]",
    icon: '',
    url: ''
  },
  {
    title: 'Консульская легализация',
    image: "bg-[url('/images/services/Rectangle614.png')]",
    icon: '',
    url: ''
  },
  {
    title: 'Истребование документов',
    image: "bg-[url('/images/services/Rectangle615.png')]",
    icon: '',
    url: ''
  }
];

export default function Pta4uServices() {
  return (
    <div className={'bg-[#F2F2F2] py-[47px] lg:py-[72px]'}>
      <div id="services" className={'container h-full mx-auto px-5'}>
        <div className={'flex flex-col items-center'}>
          <h1
            className={
              'text-[18px] leading-[22px] lg:text-[30px] lg:leading-[36px] text-center font-semibold'
            }>
            Профессиональные услуги для вас
          </h1>
          <p
            className={
              'text-[14px] lg:text-[18px] leading-[22px] max-w-[789px] text-center text-[#747373] mt-5'
            }>
            Список наших услуг включает в себя профессиональный письменный перевод текстов,
            документов и многое другое.
          </p>
        </div>
        <div className={'mt-[40px] flex flex-wrap justify-center gap-6 xl:gap-y-12'}>
          {services.map((service, i) => {
            const classes = ['w-full bg-cover lg:w-[380px] h-[170px] lg:h-[250px] rounded-[30px]'];
            classes.push(service.image);
            return (
              <div key={i} className={'flex flex-col items-center'}>
                <div className={classes.join(' ')} />
                <p
                  className={
                    'w-[336px] text-center mt-[16px] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[26px]'
                  }>
                  <Link href={service.url}>{service.title}</Link>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
