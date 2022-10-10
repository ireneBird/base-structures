import Structure from './structure'

describe('Structure', function () {

  it('Create structure with key and set value', () => {
    const structure = new Structure(['name']);
    expect(structure.set('name', 'Irina'));
    expect(structure.get('name')).toBe('Irina');
  })

  it('Create structure with keys and values', () => {
    const structure = new Structure(['name', 'gender'], ['Irina', 'female']);

    expect(structure.get('name')).toBe('Irina');
    expect(structure.get('gender')).toBe('female');


    expect(structure.set('name', 'Alina'));
    expect(structure.get('name')).toBe('Alina');
  })
})