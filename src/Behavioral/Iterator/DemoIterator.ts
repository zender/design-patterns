import {Iterator} from './IteratorInterface';

export class DemoIterator<T> implements Iterator<T> {
    private index: number;
    private items: Array<T>;

    constructor (items: Array<T>) {
        this.items = items;
        this.index = 0;
    }

    public current_item () {
        return this.items[this.index];
    }

    public hasNext () {
        return this.index < this.items.length - 1;
    }

    public next () {
        let item: any = null;

        if(this.hasNext() === true) {
            this.index = this.index + 1;
            item = this.items[this.index];
        }

        return item;
    }
}
