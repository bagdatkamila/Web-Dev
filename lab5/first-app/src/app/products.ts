export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: string;
  img: string;
  link: string;
  categoryId: number;
  likes: number;
}

export const products = [
  {
    id: 1,
    name: 'Anua тонер Heartleaf 77%',
    price: 7158,
    rating: '4.9',
    description: 'Anua тонер Heartleaf 77% Soothing Toner 250 мл',
    img: 'https://images.satu.kz/216524003_w600_h600_216524003.jpg',
    link: 'https://kaspi.kz/shop/p/anua-toner-heartleaf-77-soothing-toner-250-ml-113961265/?c=750000000',
    categoryId: 1,
    likes: 0
  },
  {
    id: 2,
    name: "Guerlain L'Instant de",
    price: 500000,
    rating: '5',
    description: 'Guerlain LInstant de Guerlain парфюмерная вода EDP 100 мл, для женщин',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h53/h68/64004185456670.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/guerlain-l-instant-de-guerlain-parfjumernaja-voda-edp-100-ml-dlja-zhenschin-100472816/?c=750000000',
    categoryId: 1,
    likes: 0
  },
  {
    id: 3,
    name: 'Печенье Oreo',
    price: 599,
    rating: '4.8',
    description: 'Печенье Oreo Original с какао и начинкой с ванильным вкусом 228 г',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h26/h16/84983017209886.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/pechen-e-oreo-original-s-kakao-i-nachinkoi-s-vanil-nym-vkusom-228-g-100971349/?c=750000000',
    categoryId: 2,
    likes: 0
  },
  {
    id: 4,
    name: 'LEGO flowers',
      price: 40000,
      rating: '4.9',
      description: 'LEGO Букет цветов 10280, деталей 756 шт',
      img: 'https://resources.cdn-kaspi.kz/img/m/p/h30/h3c/84787933741086.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/lego-buket-tsvetov-10280-detalei-756-sht-101204989/?c=750000000',
      categoryId: 3,
      likes: 0
  },
  {
    id: 5,
    name: 'Nike purple',
    price: 39920,
    rating: '4.9',
    description: 'Кроссовки Nike DV5477-500 фиолетовый 39',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h60/ha1/84634294517790.jpg?format=gallery-large',
    link: 'https://kaspi.kz/shop/p/nike-dv5477-500-fioletovyi-39-115052784/?c=750000000',
    categoryId: 4,
    likes: 0
  },
  {
    id: 6,
    name: 'Sony PlayStation 5',
    price: 277051,
    rating: '4.8',
    description: 'Игровая приставка Sony PlayStation 5 белый',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h59/63948652249118.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/?c=750000000',
    categoryId: 3,
    likes: 0
  },
  {
    id: 7,
    name: 'Агуша',
    price: 299,
    rating: '4.8',
    description: 'Детское пюре Агуша Яблоко-клубника-малина 90 г',
    img: 'https://cc.kz/upload/iblock/f42/xbptfcnbrylzyynxnijahz7ricltwjoz.jpg',
    link: 'https://kaspi.kz/shop/p/agusha-jabloko-klubnika-malina-90-g-100623509/?c=750000000',
    categoryId: 2,
    likes: 0
  },
  {
    id: 8,
    name: 'Dyson V8 Absolute',
    price: 229910,
    rating: '4.7',
    description: 'Пылесос Dyson V8 Absolute серый',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/ha9/h96/67358382293022.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/dyson-v8-absolute-seryi-108244947/?c=750000000',
    categoryId: 3,
    likes: 0
  },
  {
    id: 9,
    name: 'Наушники Marshall',
    price: 33581,
    rating: '4.7',
    description: 'Наушники Marshall Major IV черный',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h20/h21/64344048762910.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/marshall-major-iv-chernyi-102138144/?c=750000000',
    categoryId: 3,
    likes: 0
  },
  {
    id: 10,
    name: 'Milka ореховая паста',
    price: 2750,
    rating: '4.8',
    description: 'Milka Ореховая с добавлением какао 350 г',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h70/68919316512798.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/milka-orehovaja-s-dobavleniem-kakao-350-g-102295465/?c=750000000',
    categoryId: 2,
    likes: 0
  },
  {
    id:11,
    name: "Туфли Sergio Rossi",
    price: 369000,
    rating: '0',
    description: 'Туфли Sergio Rossi A79130-MFN197-5851-110 VA розовый 35',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/hfa/he7/84929225457694.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/tufli-sergio-rossi-a79130-mfn197-5851-110-va-rozovyi-35-115925122/?c=750000000',
    categoryId: 4,
    likes: 0
  },
  {
    id:12,
    name: "Туфли-лодочки 'Anouk'",
    price: 169000,
    rating: '5',
    description: "Jimmy Choo туфли-лодочки 'Anouk' с заостренным носком",
    img: 'https://cdn-images.farfetch-contents.com/12/80/64/51/12806451_24184696_1000.jpg',
    link: 'https://www.farfetch.com/kz/shopping/women/jimmy-choo-anouk-item-12806451.aspx?lang=ru-RU&size=18&storeid=11388&utm_source=google&utm_medium=cpc&utm_keywordid=&utm_shoppingproductid=12806451-18&pid=google_search&af_channel=Search&c=19615332193&af_c_id=19615332193&af_siteid=&af_keywords=pla-293946777986&af_adset_id=154063330228&af_ad_id=646125462909&af_sub1=&af_sub5=12806451-18&is_retargeting=true&shopping=yes&gad_source=1&gclid=Cj0KCQiA5-uuBhDzARIsAAa21T_ORCwyLrGboti_-WfweUe2uBia8odHHw72x-PllXwJLfu1pvdaYYsaAk7fEALw_wcB',
    categoryId: 4,
    likes: 0
  },
  {
    id:13,
    name: "Кеды Karl Lagerfeld",
    price: 160000,
    rating: '5',
    description: "Кеды Karl Lagerfeld KL215140 белый 38.5",
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h26/h46/82791450738718.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/karl-lagerfeld-kl215140-belyi-38-5-112513902/',
    categoryId: 4,
    likes: 0
  },
  {
    id:14,
    name: "Кеды Autry",
    price: 130000,
    rating: '0',
    description: "Кеды Autry ROLW-MM09/1 белый 37",
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h0d/h2c/84787482951710.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/autry-rolw-mm09-1-belyi-37-115682321/?c=750000000',
    categoryId: 4,
    likes: 0
  },
  {
    id: 15,
    name: 'Skin1004 сыворотка',
    price: 4900,
    rating: '4.7',
    description: 'Skin1004 сыворотка Madagascar Centella Ampoule для лица 55 мл',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/hb3/h8b/64910388396062.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/skin1004-syvorotka-madagascar-centella-ampoule-dlja-litsa-55-ml-104765457/?c=750000000',
    categoryId: 1,
    likes: 0
  },
  {
    id: 16,
    name: 'LAGOM Cellus Mild Moisture Cream',
    price: 8298,
    rating: '4.9',
    description: 'LAGOM Cellus Mild Moisture Cream крем 80 мл',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h25/h3a/64088126717982.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/lagom-cellus-mild-moisture-cream-krem-80-ml-100676372/?c=750000000',
    categoryId: 1,
    likes: 0
  },
  {
    id: 17,
    name: "Paula's Choice тоник",
    price: 7399,
    rating: '4.8',
    description: "Paula's Choice тоник 2% BHA Liquid Exfoliant 30 мл",
    img: 'https://french-house.kz/upload/ammina.optimizer/jpg-webp/q80/upload/iblock/b14/gyng5pvh49w1zpr6rsksp476hj77i3lm.webp',
    link: 'https://kaspi.kz/shop/p/paula-s-choice-tonik-2-bha-liquid-exfoliant-30-ml-100727764/?c=750000000',
    categoryId: 1,
    likes: 0
  },
  {
    id: 18,
    name: 'Шоколад Казахстан',
    price: 546,
    rating: '5',
    description: 'Рахат шоколадная плитка молочный 100 г',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h90/70365637279774.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/rahat-shokoladnaja-plitka-molochnyi-100-g-100221859/?c=750000000',
    categoryId: 2,
    likes: 0
  },
  {
    id: 19,
    name: 'Медвежонок Барни бисквит',
    price: 599,
    rating: '4.6',
    description: 'Медвежонок Барни бисквит С молочной начинкой 150 г',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h77/h18/84983107223582.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/medvezhonok-barni-biskvit-s-molochnoi-nachinkoi-150-g-101179235/?c=750000000',
    categoryId: 2,
    likes: 0
  },
  {
    id: 20,
    name: 'iPhone 15 Pro Max',
    price: 629681,
    rating: '4.5',
    description: 'Смартфон Apple iPhone 15 Pro Max 256Gb серый',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
    categoryId: 3,
    likes: 0
  },
  
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
