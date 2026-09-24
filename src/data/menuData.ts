export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  dietary?: ('V' | 'VG' | 'GF')[];
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const menuData: MenuCategory[] = [
  {
    id: 'coffee',
    title: 'Coffee',
    items: [
      { id: 'c1', name: 'Pour Over', description: 'Single origin rotating selection', price: '$5' },
      { id: 'c2', name: 'Espresso', description: 'House blend, double shot', price: '$3.5' },
      { id: 'c3', name: 'Cortado', description: 'Equal parts espresso and steamed milk', price: '$4' },
      { id: 'c4', name: 'Oat Flat White', description: 'Espresso, micro-foamed oat milk', price: '$5.5', dietary: ['VG'] },
    ]
  },
  {
    id: 'tea',
    title: 'Tea & Botanicals',
    items: [
      { id: 't1', name: 'Matcha Latte', description: 'Ceremonial grade matcha, steamed milk', price: '$6', dietary: ['V', 'GF'] },
      { id: 't2', name: 'Sencha Green', description: 'First flush Japanese green tea', price: '$4.5', dietary: ['VG', 'GF'] },
      { id: 't3', name: 'Chamomile Mint', description: 'Caffeine-free herbal infusion', price: '$4', dietary: ['VG', 'GF'] },
    ]
  },
  {
    id: 'food',
    title: 'Plates',
    items: [
      { id: 'f1', name: 'Avocado Tartine', description: 'Sourdough, radish, chili flakes, microgreens', price: '$12', dietary: ['VG'] },
      { id: 'f2', name: 'Ricotta Toast', description: 'House ricotta, seasonal jam, thyme', price: '$11', dietary: ['V'] },
      { id: 'f3', name: 'Grain Bowl', description: 'Quinoa, roasted sweet potato, kale, tahini dressing', price: '$14', dietary: ['VG', 'GF'] },
      { id: 'f4', name: 'Smoked Salmon', description: 'Rye, dill cream cheese, capers, pickled onion', price: '$15' },
    ]
  }
];
