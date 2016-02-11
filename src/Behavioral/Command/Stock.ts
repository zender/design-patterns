export class Stock {

  private sold: boolean = false;

  private bought: boolean = false;

  public buy(): void {
    this.bought = true;
  }

  public sell(): void {
    this.sold = true;
  }

  public isSold(): boolean {
    return this.sold;
  }

  public isBought(): boolean {
    return this.bought;
  }
}
