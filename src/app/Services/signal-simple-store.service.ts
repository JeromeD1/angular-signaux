import { Injectable, Signal, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalSimpleStoreService<T> {

  state = signal({} as T);

  constructor() { }

  // globalSet<T>(data: T) {
  //   this.state.set(data)
  // }

  /**
 * This is used to set a new value for a property.
 *
 * @param key - the key of the property to be set
 * @param data - the new data to be saved
 */

  set<K extends keyof T>(key: K, data: T[K]){
    this.state.update((currentValue) => ({...currentValue, [key]: data}))
  }


  /**
 * Sets values for multiple properties on the store.
 * This is used when there is a need to update multiple
 * properties in the store
 *
 * @param partialState - the partial state that includes
 *                      the new value to be saved
 */
  setState(partialState: Partial<T>): void {
    this.state.update((currentValue) => ({ ...currentValue, ...partialState }));
  }


  /**
 * Returns a reactive value for a property on the state.
 * This is used when the consumer needs the signal for
 * specific part of the state.
 *
 * @param key - the key of the property to be retrieved
 */
  select<K extends keyof T>(key: K): Signal<T[K]> {
    return computed(() => this.state()[key]);
  }
}
