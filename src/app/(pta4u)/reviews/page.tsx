import { Metadata } from 'next/types';
import React from 'react';
import Pta4uServices from '../components/pta4u-services';
import Pta4uPayments from '../components/pta4u-payments';
import Pta4uQuickBuy from '../components/pta4u-quick-buy';
import Pta4uReviews from '../components/pta4u-reviews';
export const metadata: Metadata = {
  title: 'Polyglot - translation agency for you | reviews',
  description: 'Polyglot - translation agency for you'
};
import Stars from '../icons/stars.svg';
import Image from 'next/image';
import Main from './Main';
const arrComm = [
  {
    id: 1,
    name: 'Chzhan Tcya',
    date: '23 ноября 2023',
    title:
      'Услуги были профессиональными, переводы были быстрыми, и мне очень нравилась младшая сестра, которая работала в них, красивая и нежная, и она говорила так хорошо в полдень, что рекомендовала всех 人美心善的小姐姐，希望你天天开心！'
  },
  {
    id: 2,
    name: 'Виталий Добрынин',
    date: '4 ноября 2023',
    title:
      'В бюро переводов работают профессиональные специалисты, выполняют переводы быстро и качественно, включая специальные документы. Надеюсь на дальнейшее плодотворное сотрудничество. Спасибо вам за вашу работу.'
  },
  {
    id: 3,
    name: 'Chzhan Tcya',
    date: '23 ноября 2023',
    title:
      'Услуги были профессиональными, переводы были быстрыми, и мне очень нравилась младшая сестра, которая работала в них, красивая и нежная, и она говорила так хорошо в полдень, что рекомендовала всех 人美心善的小姐姐，希望你天天开心！'
  },
  {
    id: 4,
    name: 'Виталий Добрынин',
    date: '4 ноября 2023',
    title:
      'В бюро переводов работают профессиональные специалисты, выполняют переводы быстро и качественно, включая специальные документы. Надеюсь на дальнейшее плодотворное сотрудничество. Спасибо вам за вашу работу.'
  }
];
{
  /* <span className="hidden md:flex text-[#9E989B] text-[14px] left-0">
  Главная → Письменный перевод
</span>; */
}
export default function ReviewsPage() {
  return (
    <div className={' h-full mx-auto'}>
      <div>
        <h2 className="text-2xl text-dark font-semibold leading-[28.6px] text-center pt-[34px] px-5">
          Отзывы клиентов из Яндекс и 2ГИС
        </h2>
        <p className="text-[#747373] font-normal text-sm leading-[18.2px] text-center pt-3 px-5">
          Что говорят наши клиенты: реальные отзывы и оценки о нашей работе на платформах Яндекс и
          2ГИС
        </p>
        <div className="pb-10 pt-5">
          <Main />
        </div>
        <div className="flex flex-col gap-3 items-center pb-10 px-5">
          <div className="flex justify-end w-full max-w-[738px]">
            <span className="text-[#F55751] text-sm font-semibold leading-[16.7px] underline underline-offset-4 text-end pb-4">
              Читать на 2ГИС
            </span>
          </div>
          {arrComm.map((item, _) => (
            <div className="bg-[#F2F2F2] rounded-[30px] max-w-[792px] px-4 py-6 " key={item.id}>
              <div>
                <h2 className="text-dark text-sm font-semibold leading-[16.8px] md:text-lg">
                  {item.name}
                </h2>
                <div className="flex items-center gap-3 pt-1">
                  <span className="text-[#747373] text-sm font-normal leading-[16.8px]">
                    {item.date}
                  </span>
                  <Image src={Stars} alt={'img'} className=" scale-75" />
                </div>
              </div>
              <p className="text-dark text-[13px] font-normal leading-[15.6px] pt-[17px] md:text-lg">
                {item.title}
              </p>
            </div>
          ))}
          <div className="flex gap-3 pt-3">
            <button className="bg-[#F2F2F2] md:w-[186px] w-[158px] h-[50px] rounded-[50px] text-dark font-semibold flex justify-center items-center">
              Показать еще
            </button>
            <button className=" bg-gradient-to-r md:w-[186px] w-[158px]  h-[50px] from-[#F55751] to-[#D83CA3] rounded-[50px] text-white font-semibold flex justify-center items-center">
              Читать на 2ГИС
            </button>
          </div>
        </div>
      </div>
      <Pta4uServices />
      <div className="py-16 flex flex-col gap-16">
        <Pta4uReviews />
        <Pta4uQuickBuy />
      </div>
      <Pta4uPayments />
    </div>
  );
}
