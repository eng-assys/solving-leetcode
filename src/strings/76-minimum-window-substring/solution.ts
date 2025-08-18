export function minWindow(s: string, t: string): string {
    if (s.length < t.length) return "";
    if (s === t) return s;
    if(t.length === 0) return "";
    
    const mapT: {[key: string]: number} = {};
    for (let i = 0; i<t.length; i++){
        mapT[t[i]] = (mapT[t[i]] || 0) + 1;
    }

    let minWindowSize = Infinity;
    let minWindowStart = 0;
    let minWindowEnd = s.length - 1;
    let windowStart = -1;
    let copyMapT = {...mapT};

    for(let i = 0; i < s.length; i++){
        const rightChar = s[i];

        if(rightChar in copyMapT){
            windowStart = i;
            copyMapT[rightChar]--;
            if(copyMapT[rightChar] === 0) delete copyMapT[rightChar];

            let j = i + 1;
            let isCopyMapTEmpty = (Object.keys(copyMapT)).length === 0;
            while(!isCopyMapTEmpty && j < s.length){
                const nextOccurrence = s[j];
                if(nextOccurrence in copyMapT){
                    copyMapT[nextOccurrence]--;
                    if(copyMapT[nextOccurrence] === 0) delete copyMapT[nextOccurrence];
                }
                isCopyMapTEmpty = (Object.keys(copyMapT)).length === 0;
                j++;
            }
            
            if(isCopyMapTEmpty){
                const newMinWindowSize = j - windowStart - 1;
               if(minWindowSize > newMinWindowSize){
                minWindowSize = newMinWindowSize;
                minWindowStart = windowStart;
                minWindowEnd = j - 1;
               }
            }

            copyMapT = {...mapT};
        }
    }

    return minWindowSize < Infinity ? s.substring(minWindowStart, minWindowEnd + 1) : "";
};