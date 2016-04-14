import {
  describe,
  it,
  expect,
} from 'angular2/testing';
import {DemoRepository} from './DemoRepository';

export function main() {
  describe('Iterator', () => {

    let repository: DemoRepository<number> = new DemoRepository<number>(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    );
    let iterator = repository.getIterator();

    it('Should start on first', () => {
      let result = iterator.currentItem();

      expect(result).toEqual(1);
    });

    it('Should finish on last', () => {
      while (iterator.hasNext() !== false) {
        iterator.next();
      }

      let result = iterator.currentItem();

      expect(result).toEqual(10);
    });
  });
}
