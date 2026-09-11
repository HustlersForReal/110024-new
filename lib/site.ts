export const site = {
  name: '110024.com',
  areaName: 'Pincode 110024',
  pincode: '110024',
  phone: '919100110024',
  phoneDisplay: '+91 9100 110024',
  email: 'mail@110024.com',
  addressLine1: 'Lajpat Nagar & Defence Colony,',
  addressLine2: 'South Delhi, 110024',
  quote: 'LAJPAT KI LAAJ – DEFENCE KA TAAJ',
  whatsapp(message: string) {
    return `https://api.whatsapp.com/send?phone=${this.phone}&text=${encodeURIComponent(message)}`;
  },
};
