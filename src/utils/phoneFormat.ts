export const formatPhoneNumber = (value: string): string => {
  const cleaned = value.replace(/\D/g, '');
  
  if (cleaned.length === 0) return '';
  
  if (cleaned[0] === '7' || cleaned[0] === '8') {
    const digits = cleaned.substring(1);
    let formatted = '+7';
    
    if (digits.length > 0) {
      formatted += ' (' + digits.substring(0, 3);
    }
    if (digits.length >= 4) {
      formatted += ') ' + digits.substring(3, 6);
    }
    if (digits.length >= 7) {
      formatted += '-' + digits.substring(6, 8);
    }
    if (digits.length >= 9) {
      formatted += '-' + digits.substring(8, 10);
    }
    
    return formatted;
  }
  
  let formatted = '+';
  if (cleaned.length > 0) {
    formatted += cleaned.substring(0, 1);
  }
  if (cleaned.length >= 2) {
    formatted += ' (' + cleaned.substring(1, 4);
  }
  if (cleaned.length >= 5) {
    formatted += ') ' + cleaned.substring(4, 7);
  }
  if (cleaned.length >= 8) {
    formatted += '-' + cleaned.substring(7, 9);
  }
  if (cleaned.length >= 10) {
    formatted += '-' + cleaned.substring(9, 11);
  }
  
  return formatted;
};

export const getCleanPhone = (value: string): string => {
  return value.replace(/\D/g, '');
};
