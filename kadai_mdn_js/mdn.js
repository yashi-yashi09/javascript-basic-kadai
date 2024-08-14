//現在の日時や特定の日時を表すために使用される組み込みのオブジェク
const date = new Date();

//現在の年
const year = date.getFullYear();
//現在の月　Date関数は１月を０としているため　＋１
const month = date.getMonth() + 1;
//現在の日
const day = date.getDate(); // 現在の日を取得

//表示
console.log(year + '年' + month + '月' + day + '日');

