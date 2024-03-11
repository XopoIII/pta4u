import React from 'react';
import Image from 'next/image';

export default function Pta4uPaymentU() {
  return (
    <>
      <div
        className={
          'hidden bg-[#F2F2F2] w-full rounded-[20px] p-[40px] lg:flex gap-[43px] justify-between'
        }>
        <div>
          <p>
            <b>ООО «БЮРО ПЕРЕВОДОВ «ПОЛИГЛОТ»</b>
          </p>
          <p className={'mt-[29px]'}>
            <b>Юридический адрес:</b> 690106, Россия, Владивосток, проспект Красного знамени, 3, 10
            этаж, офис 102
          </p>
          <p>
            <b>ИНН:</b> 2540176813
          </p>
          <p>
            <b>КПП:</b> 254001001
          </p>
          <p>
            <b>ОГРН:</b> 1112540009746
          </p>
          <p>
            <b>Банк:</b> АО «Тинькофф Банк»
          </p>
          <p>
            <b>Расчетный счет:</b> 40702810310000092500
          </p>
          <p>
            <b>Корреспондентский счет:</b> 30101810145250000974
          </p>
          <p>
            <b>БИК:</b> 044525974
          </p>
          <p className={'mt-[27px]'}>
            <b>Директор:</b> Малашенкова Надежда Александровна (действующий на основании Устава)
          </p>
          <p>
            <b>Телефон/Факс:</b> +7 902 480-02-62
          </p>
          <p>
            <b>Электронный адрес:</b> info@pta4u.ru
          </p>
        </div>
        <div className={'w-[260px] bg-white rounded-[30px] p-[20px]'}>
          <div className={'relative w-[217px] h-[217px]'}>
            <Image src={'/images/payment/image1028.png'} alt={'img'} fill={true} />
          </div>
          <p className={'text-[#747373] text-[14px] leading-[20px] text-center mt-[13px]'}>
            Чтобы открыть платеж, с <b>заполненными</b> реквизитами, используйте этот QR
          </p>
        </div>
      </div>
      <div className={'block lg:hidden'}>
        <div className={'text-[14px] leading-[16px]'}>
          <p>
            <b>ООО «БЮРО ПЕРЕВОДОВ «ПОЛИГЛОТ»</b>
          </p>
          <p className={'mt-[18px]'}>
            <b>Юридический адрес:</b> 690106, Россия, Владивосток, проспект Красного знамени, 3, 10
            этаж, офис 102
          </p>
          <p>
            <b>ИНН:</b> 2540176813
          </p>
          <p>
            <b>КПП:</b> 254001001
          </p>
          <p>
            <b>ОГРН:</b> 1112540009746
          </p>
          <p>
            <b>Банк:</b> АО «Тинькофф Банк»
          </p>
          <p>
            <b>Расчетный счет:</b> 40702810310000092500
          </p>
          <p>
            <b>Корреспондентский счет:</b> 30101810145250000974
          </p>
          <p>
            <b>БИК:</b> 044525974
          </p>
          <p className={'mt-[18px]'}>
            <b>Директор:</b> Малашенкова Надежда Александровна (действующий на основании Устава)
          </p>
          <p>
            <b>Телефон/Факс:</b> +7 902 480-02-62
          </p>
          <p>
            <b>Электронный адрес:</b> info@pta4u.ru
          </p>
        </div>
        <div
          className={'mt-[29px] bg-[#F2F2F2] rounded-[20px] p-[30px] flex flex-col items-center'}>
          <div className={'bg-white rounded-[30px] p-[14px]'}>
            <div className={'relative w-[145px] h-[145px]'}>
              <Image src={'/images/payment/image1028.png'} alt={'img'} fill={true} />
            </div>
          </div>
          <p className={'mt-[19px] text-[14px] text-center text-[#747373]'}>
            Чтобы открыть платеж, с <b>заполненными</b> реквизитами, используйте этот QR
          </p>
        </div>
      </div>
    </>
  );
}
