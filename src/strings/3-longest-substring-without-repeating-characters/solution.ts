export function lengthOfLongestSubstring(s: string): number {
    if(s.length === 0) return 0;

    let substring = [s[0]];
    let maxLength = 1;
    let i = 1;

    while(i < s.length){
        const charInSubstring = substring.indexOf(s[i]);
        if(charInSubstring === -1)
            substring.push(s[i]);
        else
            substring = substring.slice(charInSubstring);
        
        maxLength = Math.max(maxLength, substring.length);

        i += 1;
    }
    
    return maxLength;
};