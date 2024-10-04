import ClassRoom from './0-classroom';

export default function initializeRooms() {
  // Implement the function initializeRooms to return an array of 3 ClassRoom
  // objects with the size 19, 20, and 34 (in this order)
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
