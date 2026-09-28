// Rough boundary of pincode 110024 (Lajpat Nagar, Defence Colony, National
// Park and the surrounding blocks). Used to keep map pins inside the area
// this portal actually covers.
//
// This is an approximation, not the official D Delhi Post Office polygon.
// It is deliberately generous around the edges so a legitimate address is
// never rejected, while still excluding Lajpat Nagar's outer blocks, Okhla,
// Saket and Defence Colony's southern fringe.
export const PINCODE_110024_RING: [number, number][] = [
  [28.5465, 77.2270], // SW, Lajpat Nagar 1 / Jal Vihar
  [28.5560, 77.2460], // S, Amar Colony
  [28.5545, 77.2700], // SE, Nirmal Puri
  [28.5650, 77.2885], // E, Defence Colony east edge
  [28.5795, 77.2900], // NE
  [28.5965, 77.2765], // N, National Park
  [28.5935, 77.2520], // NW, Kasturba Niketan
  [28.5865, 77.2330], // W, Mahipalpur side
  [28.5700, 77.2175], // WNW
  [28.5560, 77.2165], // WSW
];

export const PINCODE_110024_CENTER: [number, number] = [28.5677, 77.2530];

/**
 * Ray-casting point-in-polygon test.
 * `ring` is treated as closed, so the last point does not need to repeat
 * the first.
 */
export function isInsidePolygon(
  lat: number,
  lng: number,
  ring: [number, number][]
): boolean {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [yi, xi] = ring[i];
    const [yj, xj] = ring[j];
    const intersects =
      yi > lat !== yj > lat && lng < ((xj - xi) * (lat - yi)) / (yj - yi) + xi;
    if (intersects) inside = !inside;
  }
  return inside;
}

export function isInside110024(lat: number, lng: number): boolean {
  return isInsidePolygon(lat, lng, PINCODE_110024_RING);
}
