// 2-4.tsと変数名が重複しているので、ブロックスコープで囲う
{
  function giveId<T>(obj: T): Omit<T, "id"> & { id: string } {
    const id = "本当はランダムがいいけどここではただの文字列";
    return {
      ...obj,
      id,
    };
  }

  // 使用例
  /*
   * obj1の型は { foo: number; id: string } 型
   */
  const obj1 = giveId({ foo: 123 });
  /*
   * obj2の型は { num : number; id: string } 型
   */
  const obj2 = giveId({
    num: 0,
    id: 100,
  });
  // obj2のidはstring型なので別の文字列を代入できる
  obj2.id = "";
}
