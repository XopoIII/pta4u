import LogoSign from '../icons/logo_sign.svg';
import Social from '../icons/social-wtf.svg';
import Image from "next/image"
import Link from "next/link";

const footerMenu = [
  {
    title: 'Услуги',
    mr: 72,
    items: [
      { title: 'Нотариальное заверение', url: '' },
      { title: 'Письменный перевод', url: '' },
      { title: 'Апостиль для документов', url: '' },
      { title: 'Консульская легализация', url: '' },
      { title: 'Устный перевод', url: ''},
      { title: 'Истребование документов', url: '' }
    ]
  },
  {
    title: 'Компания',
    mr: 113,
    items: [
      { title: 'Информация', url: '' },
      { title: 'Преимущества', url: '' },
      { title: 'Команда', url: '' }
    ]
  },
  {
    title: 'Отзывы',
    mr: 99,
    items: [
      { title: 'Отзывы на Яндекс', url: '' },
      { title: 'Отзывы на 2gis', url: '' },
    ]
  },
  {
    title: 'Оплата',
    mr: 69,
    items: [
      { title: 'На сайте компании', url: '' },
      { title: 'По QR коду', url: '' },
      { title: 'На расчетный счет', url: '' },
      { title: 'Наличными или картой', url: '' }
    ]
  },
  {
    title: 'Контакты',
    mr: 0,
    items: [
      { title: 'Владивосток, пр-т Красного знамени, 3', url: '' },
      { title: '+7 902 480-02-62', url: '' },
      { title: 'Все контакты', url: '' }
    ]
  }
]

export default function Pta4uFooter() {
  return <div
    className="bg-white h-[70px] lg:h-[382px] container mx-auto px-5 lg:pt-[58px] flex gap-8"
  >
    <div className={'hidden lg:block'}>
      <Image src={LogoSign} alt={'logo sign'} />
    </div>
    <div className={'hidden lg:flex flex-col flex-1'}>
      <div className={'flex justify-between'}>
        {
          footerMenu.map((item) => {
            const styles: any = {};
            (item.mr > 0) && (styles.marginRight = item.mr + 'px');
            return <div
              className={'flex flex-col gap-[21px]'}
              style={styles}
            >
              <h3 className={'font-semibold'}>{item.title}</h3>
              <ul>
                {
                  item.items.map((link) => {
                    return <li className={'text-[#747373] leading-7'}>
                      {link.title}
                    </li>
                  })
                }
              </ul>
            </div>
          })
        }
      </div>
      <div className={'flex mt-[41px] justify-between items-center'}>
        <div className={'flex gap-7'}>
          <div className={'text-[#747373] font-[14px] leading-7'}>© 2006 - 2023 Группа компаний «ПОЛИГЛОТ»</div>
          <div className={'flex gap-4 text-[#747373] font-[14px] leading-7'}>
            <Link href={'/'}>Privacy Police</Link>
            <Link href={'/'}>Terms of Use</Link>
          </div>
        </div>
        <Image src={Social} alt={'social'} />
      </div>
    </div>
    <div className={'lg:hidden text-[#747373] font-[14px] leading-7 py-[24px]'}>© 2006 - 2023 Группа компаний «ПОЛИГЛОТ»</div>
  </div>
}