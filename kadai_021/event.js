//btnというidを持つHTML要素を取得し定数に代入する
const btn = document.getElementById('btn');

//textというidをもつHTML要素を取得し定数に代入する
const text = document.getElementById('text');

//HTML要素がクリックされたときに,2秒後にイベント処理を実行する
btn.addEventListener('click', () => {
    setTimeout(() => {
        text.innerText = 'ボタンをクリックしました';
    },2000);
});   