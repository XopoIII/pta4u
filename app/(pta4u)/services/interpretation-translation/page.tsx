'use client';
import React from 'react';
import ProfServices from './Main';
import Pta4uReviews from '../../components/pta4u-reviews';
import Pta4uQuickBuy from '../../components/pta4u-quick-buy';
import Pta4uPayments from '../../components/pta4u-payments';

function mainFunc() {
  return (
    <div className="pt-[14px] flex flex-col items-center xl:pt-[50px]">
      <div className="px-5 flex flex-col gap-[9px] xl:gap-[112px] xl:px-0 items-center justify-center md:flex-row-reverse relative xl:max-w-[1200px]">
        <div className="md:hidden flex max-h-[171px] max-w-[335px] overflow-hidden rounded-[30px] md:w-[400px] md:h-[200px]">
          <img
            src="/images/services/image1057.png"
            alt="service"
            className="rounded-[30px] max-w-[300px] scale-[130%]"
          />
        </div>
        <img
          src="/images/services/image1057.png"
          alt="service"
          className="hidden md:block rounded-[30px] xl:w-[588px] xl:h-[426px]"
        />
        <div className="flex justify-center items-center xl:items-start flex-col gap-3 xl:gap-0 md:max-w-[400px] xl:max-w-[510px] xl:pt-8 relative">
          <span className="hidden md:flex text-[#9E989B] text-[14px] left-0 xl:absolute xl:top-3">
            Главная → Устный перевод
          </span>
          <h2 className="leading-[28.6px] text-[22px] font-semibold text-center xl:text-[45px] xl:leading-[54px] xl:text-start xl:pt-5">
            Устный перевод
          </h2>
          <p className="leading-[18.2px] text-[14px] xl:max-w-[442px] xl:leading-[31px] xl:pt-[29px] font-normal text-center xl:text-[18px] xl:text-start">
            В мире бизнеса никого не удивишь знанием английского языка. Однако редко кто может
            похвастать, что владеет им на достаточном уровне, чтобы провести деловую встречу с
            иностранными партнёрами.
          </p>
          <button
            onClick={() => window.open(`https://wa.me/79024800262?text=Здравствуйте.`)}
            className="w-[200px] h-[50px] flex xl:mt-[39px] justify-center items-center text-white text-[14px]
                leading-[17px] mt-1 font-semibold bg-gradient-to-r from-[#F55751] to-[#D83CA3] rounded-[50px]">
            Узнать стоимость
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ServicesApostillePage() {
  return (
    <div className={'h-full mx-auto flex flex-col items-center'}>
      {mainFunc()}
      <div className="flex justify-center items-center">
        <div className="px-5 pt-10 lg:max-w-[800px] lg:px-0">
          <h2 className="pt-7 text-dark font-semibold text-sm leading-4 md:text-base  lg:text-2xl">
            Устный перевод — инструмент делового общения
          </h2>
          <div className="hidden sm:flex pt-4 flex-col gap-7 xl:gap-0">
            <p className="text-dark font-normal text-[13px] leading-4 lg:text-base xl:leading-[19.2px] ">
              В мире бизнеса никого не удивишь знанием английского языка. Однако редко кто может
              похвастать, что владеет им на достаточном уровне, чтобы провести деловую встречу с
              иностранными партнёрами.
            </p>
            <p className="text-dark font-normal text-[13px] leading-4 lg:text-base xl:leading-[19.2px] xl:pt-7">
              Для этого нужно знать узкоспециализированную терминологию, схватывать на лету нюансы
              значений слов, виртуозно парировать доводы оппонентов и дипломатично обходить острые
              углы беседы, что нелегко даже на родном языке. Иногда для общения с иностранными
              коллегами требуется китайский, корейский или другой язык, знание которого — редкость.
              По этим причинам, чтобы провести плодотворную деловую встречу с иностранцами,
              приглашают устного переводчика.
            </p>
            <p className="text-dark font-normal text-[13px] leading-4 lg:text-base xl:leading-[19.2px] xl:pt-7">
              Далее вы познакомитесь с видами устного перевода, узнаете, в каких ситуациях их
              применяют, и как переводчик может повлиять на ход переговоров.
            </p>
          </div>
          <h2 className="pt-7 text-dark font-semibold text-sm leading-4 md:text-base  lg:text-2xl">
            Какой вид устного перевода выбрать
          </h2>
          <div className="hidden sm:flex pt-4 flex-col gap-7 xl:gap-0">
            <p className="text-dark font-normal text-[13px] leading-4 lg:text-base xl:leading-[19.2px] ">
              Для проведения мероприятий с большим числом участников — саммитов, переговоров,
              конференций, презентаций и т. д. — предпочтительнее устный синхронный перевод, так как
              он помогает удерживать внимание большой аудитории. Ораторы не делают пауз, и речь
              переводчика звучит одновременно с речью выступающих. Для синхронного перевода
              требуется специальное оборудование, которое можно арендовать, или можно провести
              встречу в уже оборудованном конференц-зале. Темп работы напряжённый, поэтому на
              мероприятие приглашают двух-трех переводчиков.
            </p>
            <p className="text-dark font-normal text-[13px] leading-4 lg:text-base xl:leading-[19.2px] xl:pt-7">
              Название подвида синхронного перевода «шушотаж» на французском означает
              «нашёптывание». Шушотаж проводится для одного-двух человек и не требует специального
              оборудования.
            </p>
            <p className="text-dark font-normal text-[13px] leading-4 lg:text-base xl:leading-[19.2px] xl:pt-7">
              Шушотаж применяют, когда:
            </p>
            <div className="hidden sm:flex pt-2  flex-col gap-1 xl:gap-0 xl:pt-4">
              <p className="text-dark font-normal text-[13px] leading-4 md:text-sm lg:text-base">
                <span className="text-[#999B9D]">—</span> переговоры происходят с глазу на глаз;
              </p>
              <p className="text-dark font-normal text-[13px] leading-4 md:text-sm lg:text-base">
                <span className="text-[#999B9D]">—</span> только один человек на мероприятии не
                владеет его языком;
              </p>
              <p className="text-dark font-normal text-[13px] leading-4 md:text-sm lg:text-base">
                <span className="text-[#999B9D]">—</span> когда невозможно установить оборудование
                для синхронного перевода, например, на открытой местности.
              </p>
            </div>
            <p className="text-dark font-normal text-[13px] leading-4 lg:text-base xl:leading-[19.2px] xl:pt-7">
              Для мероприятий с небольшим количеством участников — презентаций, брифингов,
              семинаров, фуршетов, переговоров (в том числе и телефонных) и т. д. — часто выбирают
              устный последовательный перевод. Выступающие делают паузы, в которых звучит речь
              переводчика. Мероприятие длится дольше, зато у говорящих есть время на обдумывание
              реплик и ситуаций общения.
            </p>
          </div>
          <h2 className="pt-7 text-dark font-semibold text-sm leading-4 md:text-base  lg:text-2xl">
            Когда ещё пригодится устный перевод
          </h2>
          <div className="hidden sm:flex pt-4 flex-col gap-7 xl:gap-0">
            <p className="text-dark font-normal text-[13px] leading-4 lg:text-base xl:leading-[19.2px] ">
              Деловые отношения с иностранными партнёрами — не единственная ситуация, когда
              требуется устный перевод.
            </p>
            <p className="text-dark font-normal text-[13px] leading-4 lg:text-base xl:leading-[19.2px] xl:pt-7">
              Устный переводчик поможет:
            </p>
            <div className="hidden sm:flex pt-2  flex-col gap-1 xl:gap-0 xl:pt-4">
              <p className="text-dark font-normal text-[13px] leading-4 md:text-sm lg:text-base">
                <span className="text-[#999B9D]">—</span> На экскурсии по городу, при походе в театр
                или музей с иностранными гостями;
              </p>
              <p className="text-dark font-normal text-[13px] leading-4 md:text-sm lg:text-base">
                <span className="text-[#999B9D]">—</span> При монтаже и настройке зарубежного
                оборудования иностранным специалистом для российских компаний;
              </p>
              <p className="text-dark font-normal text-[13px] leading-4 md:text-sm lg:text-base">
                <span className="text-[#999B9D]">—</span> Во время нотариальных действий с
                иностранными гражданами (вступление в брак, оформление завещания, доверенности);
              </p>
              <p className="text-dark font-normal text-[13px] leading-4 md:text-sm lg:text-base">
                <span className="text-[#999B9D]">—</span> Во время судебных процессов с иностранными
                гражданами;
              </p>
              <p className="text-dark font-normal text-[13px] leading-4 md:text-sm lg:text-base">
                <span className="text-[#999B9D]">—</span> Когда нужно оперативно понять смысл
                документов и не требуется подробный письменный перевод.
              </p>
            </div>
          </div>
          <h2 className="pt-7 text-dark font-semibold text-sm leading-4 md:text-base  lg:text-2xl">
            Секрет мастерства переводчика
          </h2>
          <div className="hidden sm:flex pt-4 flex-col gap-7 xl:gap-0">
            <p className="text-dark font-normal text-[13px] leading-4 lg:text-base xl:leading-[19.2px] ">
              Мастерство переводчика играет не последнюю роль в успехе переговоров. Но, чтобы
              провести деловую встречу, недостаточно свободного владения языком: переводчику нужно
              уметь расположить к себе людей. Для этого следует:
            </p>
            <div className="hidden sm:flex pt-2  flex-col gap-1 xl:gap-0 xl:pt-4">
              <p className="text-dark font-normal text-[13px] leading-4 md:text-sm lg:text-base">
                <span className="text-[#999B9D]">—</span> Быть доброжелательным. Переводчик должен
                излучать спокойствие и дружелюбие, ведь он работает для людей. Помочь людям из
                разных стран понять друг друга — миссия переводчика, любовь к людям — часть
                профессии;
              </p>
              <p className="text-dark font-normal text-[13px] leading-4 md:text-sm lg:text-base">
                <span className="text-[#999B9D]">—</span> Быть тактичным. В конфликтных ситуациях,
                когда встреча идёт не по плану и участники дискуссии уже не стесняются в выражениях,
                переводчик остаётся хладнокровным, смягчает переводом излишне резкие фразы, своим
                примером помогает оппонентам успокоиться и направить беседу в нужное русло;
              </p>
              <p className="text-dark font-normal text-[13px] leading-4 md:text-sm lg:text-base">
                <span className="text-[#999B9D]">—</span> Производить приятное впечатление. Опрятный
                внешний вид переводчика, неброская, но соответствующая ситуации одежда, приятные
                манеры, спокойная речь и чёткая дикция создают положительный фон беседы;
              </p>
              <p className="text-dark font-normal text-[13px] leading-4 md:text-sm lg:text-base">
                <span className="text-[#999B9D]">—</span> Быть пунктуальным. Люди не любят ждать,
                даже если сами постоянно опаздывают. Градус напряжения нарастает с каждой минутой,
                когда задерживается переводчик, поэтому представитель этой профессии должен быть
                точным, как швейцарские часы.
              </p>
            </div>
            <p className="text-dark font-normal text-[13px] leading-4 lg:text-base xl:leading-[19.2px] xl:pt-7">
              Переводчики «Бюро переводов «Полиглот» следуют вышеперечисленным правилам, поэтому с
              ними удобно и приятно работать. На деловой встрече наши специалисты чувствуют себя как
              рыба в воде. Мы не только доносим до участников дискуссии смысл высказываний, но и
              помогаем оппонентам понять друг друга, не просто работаем с иностранными языками, а
              служим людям.
            </p>
          </div>
          <h2 className="pt-7 text-dark font-semibold text-sm leading-4 md:text-base  lg:text-2xl">
            Как заказать устный перевод
          </h2>
          <div className="hidden sm:flex pt-4 flex-col gap-7 xl:gap-0">
            <p className="text-dark font-normal text-[13px] leading-4 lg:text-base xl:leading-[19.2px] ">
              Перед мероприятием переводчик заранее исследует тему, так как времени на размышления
              во время устного перевода не будет. Люди неделями готовятся к переговорам, и
              переводчику тоже требуется время, чтобы погрузиться в тему и изучить подробности
              предстоящего события. Для синхронного перевода желательно предоставить и письменные
              материалы по теме. Сообщайте о мероприятии минимум за два-три дня до начала, а лучше —
              за неделю: чем раньше вы сделаете заказ, тем успешнее пройдёт встреча.
            </p>
            <p className="text-dark font-normal text-[13px] leading-4 lg:text-base xl:leading-[19.2px] xl:pt-7">
              Стоимость устного перевода различается в зависимости от уровня мероприятия, сложности
              тематики, количества слушателей и вида устного перевода. Чтобы получить точную
              информацию, обратитесь в «Бюро переводов «Полиглот», и мы рассчитаем стоимость
              мероприятия для вас.
            </p>
            <p className="text-dark font-normal text-[13px] leading-4 lg:text-base xl:leading-[19.2px] xl:pt-7">
              Если вы хотите провести плодотворную встречу с иностранными специалистами, коллегами
              или партнерами, оставьте заявку на устный перевод в «Бюро переводов «Полиглот».
            </p>
          </div>
        </div>
      </div>
      <div className="w-full pb-10">
        <ProfServices />
      </div>
      <div className="lg:pt-5  w-[340px] sm:w-full">
        <Pta4uReviews />
      </div>
      <div className="pt-[54px] px-5 md:mt-[35px] pb-10">
        <Pta4uQuickBuy />
      </div>
      <Pta4uPayments />
    </div>
  );
}
