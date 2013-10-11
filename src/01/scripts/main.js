/*
 * このコードで説明する話
 * - 文字列と数値
 * - イベントモデル
 * - クロスブラウザ対応
 * - 変数のスコープ
 */

//@notice: 引数に10を足して返す関数
function plus10(_input) {
  //@todo: ミスがあるので修正する
  return _input + 10;
}

// jQuery依存
$('#btn02').on('click', function(){
  console.log('btn02がクリックされました');
  var input = $('#result').html();
  var output = plus10(input);
  $('#result').html(output);
});

// jQuery非使用（IEとOperaでは動かない）
var btn = document.getElementById('btn01');
btn.addEventListener('click', function(){
  console.log('btn01がクリックされました');
  var input = document.getElementById('result').innerHTML;
  var output = plus10(input);
  document.getElementById('result').innerHTML = output;
}, false);

// For IE, Opera
// btn.attachEvent('onclick', function(){});

console.log('main.jsの読み込み完了');