interface Model {
  text: string;
  created: number;
  title?: string;
  save(): void;
  delete(): void;
}

export default class Message implements Model {
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
