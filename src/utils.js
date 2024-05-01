function isPalindrome(str) {
    if (typeof str !== 'string') {
      throw new Error('Input must be a string');
    }
  
    if (!/^[A-Za-z]*$/.test(str)) {
      throw new Error('Input must contain only alphabetic characters');
    }
  
    const alphanumericStr = str.toLowerCase();
    
    if (alphanumericStr.length === 0 || alphanumericStr.length === 1) {
      return false;
    }
    
    return alphanumericStr === alphanumericStr.split('').reverse().join('');
  }
  
  module.exports = { isPalindrome };
  