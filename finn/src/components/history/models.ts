/**
 * Ideally one would use something like `inversify` for both history and network
 * But this is small project, and it is used in place, so I am gonna skip that
 * If we were to ever test the list, we would need to separate them and use a proper injector
 * 
 * Also, subscriper for now, but could be proper state managment
 */
class HistoryM {
  private static _instance: HistoryM

  _list: HistoryItemM[] = []
  _loaded: boolean = false

  _load() {
    // Prevent multi loading
    if (this._loaded)
      return this._list

    const historyString = this._getFromMemory()
    if (historyString != null)
      try {
        JSON.parse(historyString).forEach((item: IHistoryItem) => {
          this._list.push(new HistoryItemM(item.old, item.generated));
        });
      } catch (e) {
        console.log('Her ewith error', e)
        this._saveToMemory()
      } finally {
        this._loaded = true
      }
    return this._list
  }

  private constructor() {
    this._load()
  }

  getList() {
    if (this._loaded)
      return this._list
    else
      return this._load()
  }

  addItem(item: HistoryItemM) {
    this._list.unshift(item)
    this._saveToMemory()
    return this._list
  }

  // DB-like
  _getFromMemory() {
    return localStorage.getItem('history')
  }
  _saveToMemory() {
    localStorage.setItem('history', JSON.stringify(this._list))
  }

  static get Instance() {
    if (!HistoryM._instance)
      HistoryM._instance = new HistoryM()
    return HistoryM._instance
  }
}

interface IHistoryItem {
  old: string
  generated: string
}

// Usually you would place each one in file, but not a big deal for a small project
export class HistoryItemM implements IHistoryItem {
  public old: string
  public generated: string

  constructor(oldURL: string, newURL: string) {
    this.old = oldURL
    this.generated = newURL
  }

  static async fromInput(url: string): Promise<HistoryItemM> {
    // This should in a controller, not the model
    return fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then(res => res.json())
      .then((res: any) => {
        return new HistoryItemM(url, res.result.full_short_link)
      })
  }

  copyToClipboard() {
    return this.generated
  }
}

// Singleton
export const HistoryData = HistoryM.Instance
