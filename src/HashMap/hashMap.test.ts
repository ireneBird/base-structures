import HashMap from './hashMap'

describe('Hash Table', () => {
  it('Should get value', () => {
    const map = new HashMap();
    map.set('name', 'Irina');
    map.set('age', 26);

    expect(map.get('name')).toStrictEqual('Irina')
  })


  // it('Should get Error when add exist key', () => {
  //   const map = new HashMap();
  //   map.set('name', 'Irina');
  //   map.set('age', 26);

  //   expect(map.set('name', 'Aglaia')).rejects.toThrowError();
  // })
})