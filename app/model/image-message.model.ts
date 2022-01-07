import Message from './message.model';

export default class ImageMessage extends Message {
   public url: string
   public thumbnail: string

  constructor(text: string = '', created: number = Date.now(),
    url = '', thumbnail = '') {
    super(text, created);
    this.url = url;
    this.thumbnail = thumbnail;
  }

  /**
   * Method overriden
   * @returns String
   */
   public toString(): string {
    return `Photo${super.toString()} ` +
           `- Url: ${this.url} ` +
           `- Thumbnail: ${this.thumbnail}`;
  }
}
