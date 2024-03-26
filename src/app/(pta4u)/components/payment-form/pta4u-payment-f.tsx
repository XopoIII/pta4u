import React, { useEffect } from 'react';

export default function Pta4uPaymentF() {
  const url =
    'https://auth.robokassa.ru/Merchant/PaymentForm/FormV.js?MerchantLogin=pta4u.ru&InvoiceID=0&Culture=ru&Encoding=utf-8&OutSum=0&shp_interface=field&SignatureValue=db3633dd02cf0738a432490073581c50';
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
  return (
    <div className={'flex flex-col lg:flex-row w-full gap-[20px] lg:gap-[24px]'}>
      <div
        className={
          'w-full bg-[#F2F2F2] rounded-[20px] pt-[30px] lg:pt-[70px] flex flex-col items-center'
        }>
        <div className={'bg-white rounded-[30px] p-[14px] lg:p-[20px]'}>
          <div className={'relative lg:w-[217px] lg:h-[217px] w-[145px] h-[145px]'}>
            <img src={'/images/payment/image1029.png'} alt={'img'} />
          </div>
        </div>
        <p
          className={
            'mt-[19px] lg:mt-[46px] max-w-[216px] lg:max-w-[446px] text-center text-[14px] leading-[20px] lg:text-[18px] lg:leading-[26px] mb-[28px] lg:mb-[57px]'
          }>
          Сканируйте QR код из приложения вашего банка и введите верную сумму
        </p>
      </div>
      <div
        className={
          'w-full bg-[#F2F2F2] rounded-[20px] pt-[30px] lg:pt-[70px] flex flex-col items-center'
        }>
        <div className={'w-[340px] bg-white rounded-[30px] p-[14px] lg:p-[20px]'}>
          <div
            className={
              'relative w-[130px] lg:w-[180px] h-[16px] lg:h-[23px] mt-[30px] lg:mt-[45px] mx-auto'
            }>
            <img src={'/images/payment/image1069.png'} alt={'img'} />
          </div>
          <p
            className={
              'pt-[12px] text-center text-[14px] leading-[20px] lg:text-[16px] lg:leading-[22px]'
            }>
            25 способов оплаты
          </p>
          <div className={'mt-[24px] lg:mt-[45px] mb-[10px] flex justify-center'}>
            <iframe
              width="300"
              height="55"
              scrolling="no"
              className={'rounded-[10px]'}
              src="https://auth.robokassa.ru/Merchant/PaymentForm/FormFLS.if?MerchantLogin=pta4u.ru&InvoiceID=0&Culture=ru&Encoding=utf-8&DefaultSum=0&shp_interface=field&SignatureValue=a2b3762620f105c62b64340ea6b07e49"></iframe>
            {/* <Pta4uButton className={'w-[130px] lg:w-[180px]'}>Оплатить</Pta4uButton> */}
          </div>
        </div>
        <p
          className={
            'mt-[19px] lg:mt-[46px] max-w-[216px] lg:max-w-[446px] text-center text-[14px] leading-[20px] lg:text-[18px] lg:leading-[26px] mb-[28px] lg:mb-[57px]'
          }>
          Перейдите на сайт Робокасса, введите верную сумму и следуйте инструкциям
        </p>
      </div>
    </div>
  );
}
