export function minWindow(s: string, t: string): string {
    if (s.length < t.length) return "";
    if (t.length === 0) return "";
    
    const mapT: { [key: string]: number } = {};
    for (let char of t) {
        mapT[char] = (mapT[char] || 0) + 1;
    }

    let left = 0;
    let right = 0;
    let required = Object.keys(mapT).length;
    let matched = 0;
    let minLength = Infinity;
    let start = 0;

    for (right = 0; right < s.length; right++) {
        const char = s[right];
        if (mapT[char] !== undefined) {
            mapT[char]--;
            if (mapT[char] === 0) {
                matched++;
            }
        }
        
        while (matched === required) {
            const currentLength = right - left + 1;
            if (currentLength < minLength) {
                minLength = currentLength;
                start = left;
            }

            const leftChar = s[left];
            if (mapT[leftChar] !== undefined) {
                if (mapT[leftChar] === 0) {
                    matched--;
                }
                mapT[leftChar]++;
            }
            left++;
        }
    }
    return minLength === Infinity ? "" : s.substring(start, start + minLength);
};