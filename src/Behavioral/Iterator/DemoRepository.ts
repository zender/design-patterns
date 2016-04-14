import {Container} from './ContainerInterface';
import {DemoIterator} from './DemoIterator';

export class DemoRepository<T> implements Container<T> {
    private items: Array<T>;

    public constructor (items: Array<T>) {
        this.items = items;
    }

    public getIterator() {
        return new DemoIterator(this.items);
    }
}
