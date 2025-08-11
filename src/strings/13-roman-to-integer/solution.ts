
export function romanToInt(s: string): number {
    const romanCharToInt = {
      I: 1,
      IV: 4,
      V: 5,
      IX: 9,
      X: 10,
      XL: 40,
      L: 50,
      XC: 90,
      C: 100,
      CD: 400,
      D: 500,
      CM: 900,
      M: 1000,
    };

    let total = 0;
    let counter = 0;
    while (counter < s.length) {
        const twoCharSubstring = s.substring(counter, counter+2);
        if(['IV', 'IX', 'XL', 'XC', 'CD', 'CM'].includes(twoCharSubstring)){
            total += romanCharToInt[twoCharSubstring];
            counter = counter + 2;
        } else {
            total += romanCharToInt[s[counter]];
            counter = counter + 1;
        }

    }
    return total;
};