export function lengthOfLongestSubstring(s: string): number {
    if(s.length === 0) return 0;

    let substring = [];
    let maxLength = 0;
    let i = 0;

    while(i < s.length){
        const charInSubstring = substring.indexOf(s[i]);
        substring.push(s[i]);
        if(charInSubstring !== -1)
            substring = substring.slice(charInSubstring+1);
        
        maxLength = Math.max(maxLength, substring.length);
        i += 1;
    }
    
    return maxLength;
};