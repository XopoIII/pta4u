import React from 'react';
const steps = [
  {
    title: 'Ваш заказ будет выполнен точно к установленному сроку',
    image: '/images/company/image1062.png'
  },
  {
    title:
      'К работе в нашей компании допускаются только профессионалы. Все переводчики проходят строгий отбор и приступают к работе лишь подтвердив на практике свою квалификацию',
    image: '/images/company/image1059.png'
  },
  {
    title:
      'В работе мы учитываем Ваши реальные интересы. Мы делаем нашу работу исходя из Ваших пожеланий и запросов',
    image: '/images/company/image1066.png'
  },
  {
    title:
      'Наша работа построена таким образом, чтобы максимально снизить расходы, оптимизируя при этом стоимость Ваших заказов',
    image: '/images/company/image1058.png'
  },
  {
    title: 'Мы гарантируем полную конфиденциальность и сохранность Ваших документов',
    image: '/images/company/image1067.png'
  },
  {
    title:
      'Вы можете направить нам заказ, не выходя из дома или офиса, с помощью нашего сайта. Готовый перевод мы направим Вам на электронную почту',
    image: '/images/company/Rectangle778.png'
  }
];

export default function Pta4uForYou() {
  return (
    <>
      <div className="mt-[42px] lg:mt-[98px]">
        <h1 className="text-[18px] leading-[22px] lg:text-[30px] lg:leading-[36px] font-semibold text-center">
          Мы работаем для вас
        </h1>
        <p className="max-w-[840px] mx-auto mt-[20px] text-[14px] leading-[18px] lg:text-[18px] lg:leading-[22px] text-[#747373] text-center">
          По результатам опроса 2022г, более 3000 постоянных клиентов выбирают Полиглот и ценят
          сотрудничество с нами за качество сервиса и качество предоставляемых услуг.
        </p>
      </div>
      <div className="mt-[21px] lg:mt-[36px] flex flex-wrap gap-[19px] lg:gap-[24px] justify-center">
        {steps.map((step, i) => {
          return (
            <div key={i} className="max-w-[158px] lg:max-w-[384px]">
              <div className="w-[158px] lg:w-[384px] h-[116px] lg:h-[226px] relative rounded-[20px] lg:rounded-[30px] truncate">
                <img src={step.image} alt={'img'} />
              </div>
              <p className="mt-[7px] lg:mt-[20px] text-[13px] leading-[16px] lg:text-[18px] lg:leading-[22px] text-center">
                {step.title}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
