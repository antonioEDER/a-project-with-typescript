interface IMessage {
  text: string;
  created: number;
  save(): void;
  delete(): void;
}

export default class Message implements IMessage {
  public static newEmptyMessage(): Message {
    return new Message();
  }

  constructor(public text: string = '', public readonly created: number = Date.now()) {
  }
  public toString(): string {
    const { created, text } = this;
    return `Message created at: ${created} - Text: ${text}`;
  }

  public save(): void {

  }
  public delete(): void {
      
  }
}
