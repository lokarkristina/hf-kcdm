/**
 * Represents an event with basic information.
 *
 * @interface Event
 * @property {number} id - The unique identifier for the event
 * @property {string} title - The title or name of the event
 * @property {string} date - The date when the event takes place
 * @property {string} location - The location where the event is held
 */
export interface EventItem {
  id: number
  title: string
  date: string
  location: string
}
