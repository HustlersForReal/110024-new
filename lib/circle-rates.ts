export interface CircleRateArea {
  slug: string;
  name: string;
  category: string;
  ratePerSqMeter: number;
  ratePerSqFeet: number;
}

export const circleRates: CircleRateArea[] = [
  // Category B
  {
    slug: 'defence-colony',
    name: 'Defence Colony',
    category: 'B',
    ratePerSqMeter: 245520,
    ratePerSqFeet: 22813,
  },
  // Category C
  {
    slug: 'lajpat-nagar-1',
    name: 'Lajpat Nagar 1',
    category: 'C',
    ratePerSqMeter: 159840,
    ratePerSqFeet: 14853,
  },
  {
    slug: 'lajpat-nagar-2',
    name: 'Lajpat Nagar 2',
    category: 'C',
    ratePerSqMeter: 159840,
    ratePerSqFeet: 14853,
  },
  {
    slug: 'lajpat-nagar-3',
    name: 'Lajpat Nagar 3',
    category: 'C',
    ratePerSqMeter: 159840,
    ratePerSqFeet: 14853,
  },
  {
    slug: 'lajpat-nagar-4',
    name: 'Lajpat Nagar 4',
    category: 'C',
    ratePerSqMeter: 159840,
    ratePerSqFeet: 14853,
  },
  {
    slug: 'national-park',
    name: 'National Park',
    category: 'C',
    ratePerSqMeter: 159840,
    ratePerSqFeet: 14853,
  },
  {
    slug: 'vikram-vihar',
    name: 'Vikram Vihar',
    category: 'C',
    ratePerSqMeter: 159840,
    ratePerSqFeet: 14853,
  },
  // Category D
  {
    slug: 'amar-colony',
    name: 'Amar Colony',
    category: 'D',
    ratePerSqMeter: 127680,
    ratePerSqFeet: 11861,
  },
  {
    slug: 'dayanand-colony',
    name: 'Dayanand Colony',
    category: 'D',
    ratePerSqMeter: 127680,
    ratePerSqFeet: 11861,
  },
  {
    slug: 'double-storey',
    name: 'Double Storey',
    category: 'D',
    ratePerSqMeter: 127680,
    ratePerSqFeet: 11861,
  },
  {
    slug: 'old-double-storey',
    name: 'Old Double Storey',
    category: 'D',
    ratePerSqMeter: 127680,
    ratePerSqFeet: 11861,
  },
  {
    slug: 'nirmal-puri',
    name: 'Nirmal Puri',
    category: 'D',
    ratePerSqMeter: 127680,
    ratePerSqFeet: 11861,
  },
  {
    slug: 'vinoba-puri',
    name: 'Vinoba Puri',
    category: 'D',
    ratePerSqMeter: 127680,
    ratePerSqFeet: 11861,
  },
  {
    slug: 'jal-vihar',
    name: 'Jal Vihar',
    category: 'D',
    ratePerSqMeter: 127680,
    ratePerSqFeet: 11861,
  },
  // Category E
  {
    slug: 'kasturba-niketan',
    name: 'Kasturba Niketan',
    category: 'E',
    ratePerSqMeter: 70080,
    ratePerSqFeet: 6511,
  },
];
