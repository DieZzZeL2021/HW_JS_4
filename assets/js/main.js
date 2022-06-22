/** @format */

let myStr =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis perspiciatis quibusdam molestiae exercitationem itaque accusantium corrupti, error, aliquid aperiam dolores nemo nisi molestias culpa ipsum? Ex dolores ducimus provident tenetur doloribus unde deserunt similique sapiente, commodi, quaerat deleniti est, veritatis blanditiis nobis aliquam sequi labore ipsam. Labore vel quisquam, impedit aperiam fugit a quibusdam illo veritatis quas in facilis inventore ipsa, consequatur at, quae similique tempore omnis. Doloribus aspernatur veritatis delectus eos dolorum obcaecati sed. Libero, ipsa harum autem doloribus earum facere, praesentium illo magnam voluptatibus similique atque iste officia alias quisquam et ipsum voluptate nihil hic fuga. Recusandae, commodi veniam tenetur, culpa architecto voluptatem debitis, consequuntur inventore nisi totam minus corrupti natus! Provident autem sit laborum ex fugiat aliquam praesentium facilis, est tenetur explicabo consectetur quos excepturi voluptatibus fuga, quo nihil! Eaque aliquam natus, exercitationem libero laudantium illum a praesentium deserunt voluptate. Quod ex reiciendis cum delectus. Corrupti et officiis sequi labore. Doloremque, facere. Deserunt sequi reiciendis dolorem, fugit veritatis, veniam doloribus unde neque molestiae enim iste non quibusdam. At, facilis dignissimos laborum numquam dolores consequatur porro eligendi! Praesentium quasi inventore voluptate architecto necessitatibus reiciendis modi, laudantium corrupti officiis tempora officia dolores id quidem, odio repudiandae repellendus eaque illum.';

let wordsList = (str, subStr) => {
  let reg = new RegExp('\\.|,|\\?|!|:|;|"', 'gui');
  let arr = str
    .replace(reg, '')
    .toLowerCase()
    .split(' ')
    .filter((arrItem) => arrItem.indexOf(subStr) > -1);
  let res = new Set();
  arr.forEach((arrItem) => {
    res.add(arrItem);
  });
  return res;
};

console.log(wordsList(myStr, 'lore'));

let myDate = new Date();
let getLocalDate = (date, isSeconds = false, isISO = false) => {
  const reg = new RegExp(':\\d{2}$', 'gui');
  let res;

  if (!isISO) {
    res = isSeconds
      ? date.toLocaleString()
      : date.toLocaleString().replace(reg, '');
  } else {
    const year = date.getFullYear();
    const month =
      date.getMonth() + 1 < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const day = date.getDate() < 9 ? `0${date.getDate()}` : date.getDate();
    const hour = date.getHours() < 9 ? `0${date.getHours()}` : date.getHours();
    const minutes =
      date.getMinutes() < 9 ? `0${date.getMinutes()}` : date.getMinutes();
    const seconds =
      date.getSeconds() < 9 ? `0${date.getSeconds()}` : date.getSeconds();

    res = isSeconds
      ? `${year}-${month}-${day}, ${hour}:${minutes}:${seconds}`
      : `${year}-${month}-${day}, ${hour}:${minutes}`;
  }

  return res;
};
console.log(getLocalDate(myDate));

let getWeekDay = (d) => {
  const date = new Date(d);

  const days = [
    'воскресенье',
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
  ];

  return days[date.getDay()];
};

console.log(getWeekDay('1983-06-15'));

let getLocalDay = (d) => {
  const date = new Date(d);
  let day = date.getDay();
  if (day === 0) day = 7;

  return day;
};
console.log(getLocalDay('2018-01-10'));

let getDateAgo = (d, days) => {
  const date = new Date(d);

  date.setDate(date.getDate() - days);

  return date.toLocaleString().replace(/(\d.*),\s+(\d.*)/gu, '$1');
};

console.log(getDateAgo('2019-01-29', 1));

const Car = function (engine, model, name, year) {
  this.engine = engine;
  this.model = model;
  this.name = name;
  this.year = year;
};

Car.prototype.info = function () {
  return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
};

Object.defineProperties(Car.prototype, {
  used: {
    get() {
      const yearNow = new Date().getFullYear();

      return yearNow - this.year > 1 ? 'used' : 'new';
    },
    set(value) {
      const yearNow = new Date().getFullYear();

      if (value === 'new' && this.year < yearNow) this.year = yearNow;
    },
  },
});

const car = new Car(5500, 'GL 500', 'Mersedes', 2008);

console.log(car.info());
car.used = 'new';
console.log(car.info());

let testPerformance = (iterations, func) => {
  let time = Date.now();

  if (typeof func === 'function') for (let i = iterations; i--; ) func();

  return Date.now() - time;
};

function test1() {
  let str = myStr;

  while (str.indexOf('o') !== -1) str = str.replace('o', '');
  while (str.indexOf('a') !== -1) str = str.replace('a', '');
  while (str.indexOf('e') !== -1) str = str.replace('e', '');
  while (str.indexOf('u') !== -1) str = str.replace('u', '');
  while (str.indexOf('i') !== -1) str = str.replace('i', '');
}

function test2() {
  const reg = new RegExp('[oaeui]', 'gui');

  myStr.replace(reg, '');
}

console.log(testPerformance(100, test1));
console.log(testPerformance(100, test2));
console.log(testPerformance(100, 12345));
