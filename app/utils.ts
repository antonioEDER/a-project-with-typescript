import Message from "./model/message.model";
import ImageMessage from "./model/image-message.model";

function messageFactory(text: string): Promise<Message> {
  if (text) {
    const match: string = text as string;

    return fetch(
      `http://api.giphy.com/v1/gifs/search?q=${match}&api_key=dc6zaTOxFJmzC`,
      {
        method: "GET",
        mode: "cors",
      }
    )
      .then((response: Response) => response.json())
      .then((result: any) => {
        console.log("result", result);

        const replaced = text.replace(
          text,
          `<img src='${result.data[0].images.fixed_height.url}' />`
        );
        console.log("result.data[0].embed_url", result.data[0].embed_url);

        return new ImageMessage(replaced, undefined, result.data[0].embed_url);
      })
      .catch(() => new Message(text)) as Promise<Message>;
  }

  return Promise.resolve(new Message(text));
}

class Store<T> {
  private store: Set<T>;
  constructor() {
    const sStore: (string | null) = localStorage.getItem('store');
    this.store = new Set<T>(JSON.parse(sStore || 'null'));
  }
  public add(item: T): void {
    this.store.add(item);
  }
  public commit(): void {
    localStorage.setItem('store', JSON.stringify(Array.from(this.store)));
  }
  public list(): T[] {
    return Array.from(this.store);
  }
}

export { messageFactory, Store };
