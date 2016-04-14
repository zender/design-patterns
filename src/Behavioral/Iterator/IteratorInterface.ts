export interface Iterator<T> {
    current_item(): T;
    hasNext(): boolean;
    next(): T;
}
