/**
 * Dropdown item.
 */
export interface DropdownItem {
  /**
   * Item identifier.
   * @type {any}
   */
  id: any;

  /**
   * Item text.
   * @type {string}
   */
  text: string;

  /**
   * Disabled state.
   * @type {boolean}
   */
  disabled: boolean;

  /**
   * Source item data reference.
   * @type {any}
   */
  item: any;
}
