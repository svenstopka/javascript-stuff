let 数詞挿入 = (文字列) => {
  let 変更文字列 = 文字列;
  let 数詞 = ['十','百','千','万','jm']
  for (let index = 文字列.length; index > 0; index--) {
    数詞[index-1] == undefined ? 数詞仕切 = '' : 数詞仕切 = 数詞[index-1];
    if (文字列.length > index) 変更文字列 = 変更文字列.slice(0, -index) + 数詞仕切 + '\t' + 変更文字列.slice(-index);
  }
  return 変更文字列;
}
let 文字列例 = "12345678";
console.log(数詞挿入(文字列例));