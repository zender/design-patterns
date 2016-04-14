export interface Iterator<T> {
  currentItem():T;
  hasNext():boolean;
  next():T;
}
