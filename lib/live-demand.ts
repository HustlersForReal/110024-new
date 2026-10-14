export interface LiveDemand {
  id: string;
  /** Stable public reference quoted back over WhatsApp. */
  ref: string;
  size?: string;
  bhk?: string;
  floor?: string;
  kind: string;
  deal: 'sale' | 'rent';
  outright?: boolean;
  location: string;
  block?: string;
  tags: string[];
}

export const liveDemands: LiveDemand[] = [
  // Sale (16)
  { id: 'd1', ref: 'LJ-EKEJ', size: '100 sq yd', kind: 'Commercial Building', deal: 'sale', location: 'Lajpat Nagar 2', tags: ['Pre-rented', 'Near Metro'] },
  { id: 'd2', ref: 'LJ-KHNF', size: '200 sq yd', floor: '2nd Floor', kind: 'Floor', deal: 'sale', location: 'Lajpat Nagar 3', tags: ['Park Facing'] },
  { id: 'd3', ref: 'LJ-83L8', size: '300 sq yd', kind: 'Residential Building', deal: 'sale', outright: true, location: 'Lajpat Nagar 3', tags: [] },
  { id: 'd4', ref: 'LJ-AJ77', size: '100 sq yd', floor: '3rd Floor + Terrace', kind: 'Floor', deal: 'sale', location: 'Amar Colony', block: 'A - Block', tags: ['Terrace'] },
  { id: 'd5', ref: 'LJ-XLAE', size: '300 sq yd', floor: 'Corner Floor', kind: 'Floor', deal: 'sale', location: 'Defence Colony', block: 'A - Block', tags: ['Corner', 'Needs Renovation'] },
  { id: 'd6', ref: 'LJ-B5GT', size: '200 sq yd', kind: 'Plot / Floor', deal: 'sale', outright: true, location: 'Vinoba Puri', tags: [] },
  { id: 'd7', ref: 'LJ-WGEJ', size: '200 sq yd', kind: 'Commercial Building', deal: 'sale', location: 'Lajpat Nagar 2', block: 'K - Block', tags: [] },
  { id: 'd8', ref: 'LJ-DU9B', size: '100 sq yd', floor: '2nd Floor', kind: 'Floor', deal: 'sale', location: 'Dayanand Colony', block: 'A - Block', tags: [] },
  { id: 'd9', ref: 'LJ-6EFA', size: '100 sq yd', floor: '3rd Floor + Terrace', kind: 'Floor', deal: 'sale', location: 'Lajpat Nagar 1', block: 'F - Block', tags: ['Terrace'] },
  { id: 'd10', ref: 'LJ-LWUX', size: '100 sq yd', kind: 'Building', deal: 'sale', outright: true, location: 'Amar Colony', block: 'E - Block', tags: [] },
  { id: 'd11', ref: 'LJ-NF3U', floor: 'Ground Floor + Parking', kind: 'Floor', deal: 'sale', location: 'Lajpat Nagar 1', block: 'H - Block', tags: ['Parking'] },
  { id: 'd12', ref: 'LJ-UXUA', size: '100 sq yd', floor: '2nd Floor', kind: 'Floor', deal: 'sale', location: 'Vinoba Puri', tags: ['Park Facing'] },
  { id: 'd13', ref: 'LJ-LYKH', size: '200 sq yd', kind: 'Builder Floor', deal: 'sale', location: 'Lajpat Nagar 3', tags: [] },
  { id: 'd14', ref: 'LJ-C4SD', size: '123 sq yd', kind: 'Builder Floor', deal: 'sale', location: 'Vikram Vihar', tags: [] },
  { id: 'd15', ref: 'LJ-FUFX', bhk: '3 BHK', kind: 'Builder Floor', deal: 'sale', location: 'Lajpat Nagar 3', block: 'B - Block', tags: [] },
  { id: 'd16', ref: 'LJ-VZ65', size: '222 sq yd', bhk: '3 BHK', kind: 'Builder Floor', deal: 'sale', location: 'Lajpat Nagar 3', block: 'A - Block', tags: [] },
  // Rent (5)
  { id: 'd17', ref: 'LJ-QH64', bhk: '2 BHK', kind: 'Builder Floor', deal: 'rent', location: 'Lajpat Nagar 1', tags: ['Fully Furnished'] },
  { id: 'd18', ref: 'LJ-T7AQ', bhk: '2 BHK', kind: 'Builder Floor', deal: 'rent', location: 'Dayanand Colony', tags: [] },
  { id: 'd19', ref: 'LJ-BC4N', bhk: '2 BHK', kind: 'Builder Floor', deal: 'rent', location: 'Vinoba Puri', tags: [] },
  { id: 'd20', ref: 'LJ-LTET', bhk: '3 BHK', kind: 'Builder Floor', deal: 'rent', location: 'Lajpat Nagar 2', block: 'K - Block', tags: [] },
  { id: 'd21', ref: 'LJ-7FXP', bhk: '3 BHK', kind: 'Builder Floor', deal: 'rent', location: 'Lajpat Nagar 3', tags: [] },
];
