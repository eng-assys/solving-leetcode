export function longestPalindrome(s: string): number {
    const charMap = {};
    let longestPalindromeLength = 0;

    for (let i = 0; i < s.length; i++){
        if(charMap[s[i]]) charMap[s[i]] += 1;
        else charMap[s[i]] = 1;
    }

    let addPlusOne = false;
    for (const key in charMap){
        if(charMap[key] % 2 === 0) longestPalindromeLength += charMap[key];
        else if(charMap[key] === 1) addPlusOne = true;
        else {
            longestPalindromeLength += charMap[key] - 1
            addPlusOne = true;
        };
    }

    if(addPlusOne) longestPalindromeLength += 1;

    return longestPalindromeLength;
};