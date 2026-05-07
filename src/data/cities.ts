export interface City {
  value: string;
  label: string;
  deliveryDays: number;
}

export const pakistanCities: City[] = [
  { value: 'karachi', label: 'Karachi', deliveryDays: 2 },
  { value: 'lahore', label: 'Lahore', deliveryDays: 3 },
  { value: 'islamabad', label: 'Islamabad', deliveryDays: 3 },
  { value: 'rawalpindi', label: 'Rawalpindi', deliveryDays: 3 },
  { value: 'faisalabad', label: 'Faisalabad', deliveryDays: 4 },
  { value: 'multan', label: 'Multan', deliveryDays: 4 },
  { value: 'peshawar', label: 'Peshawar', deliveryDays: 4 },
  { value: 'quetta', label: 'Quetta', deliveryDays: 5 },
  { value: 'sialkot', label: 'Sialkot', deliveryDays: 4 },
  { value: 'gujranwala', label: 'Gujranwala', deliveryDays: 4 },
  { value: 'hyderabad', label: 'Hyderabad', deliveryDays: 3 },
  { value: 'sukkur', label: 'Sukkur', deliveryDays: 4 },
  { value: 'sargodha', label: 'Sargodha', deliveryDays: 4 },
  { value: 'bahawalpur', label: 'Bahawalpur', deliveryDays: 5 },
  { value: 'muzaffarabad', label: 'Muzaffarabad', deliveryDays: 5 }
];

export const getCityByValue = (value: string): City | undefined => {
  return pakistanCities.find(city => city.value === value);
};
