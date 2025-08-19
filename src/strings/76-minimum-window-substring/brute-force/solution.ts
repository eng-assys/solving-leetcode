export function minWindow(s: string, t: string): string {
    if (s.length < t.length) return "";
    if (s === t) return s;
    if(t.length === 0) return "";
    
    const mapT: {[key: string]: number} = {};
    for (let i = 0; i<t.length; i++){
        mapT[t[i]] = (mapT[t[i]] || 0) + 1;
    }
    const keysMapT = Object.keys(mapT);

    let minWindowSize = Infinity;
    let minWindowStart = 0;
    let minWindowEnd = s.length - 1;
    let windowStart = -1;
    let mapTKeysCount = keysMapT.length;

    let copyMapT = {...mapT};

    for(let i = 0; i < s.length; i++){
        const rightChar = s[i];

        if(copyMapT[rightChar]){
            windowStart = i;
            copyMapT[rightChar]--;
            if(!copyMapT[rightChar]) mapTKeysCount--;

            let j = i + 1;
            let isCopyMapTEmpty = mapTKeysCount === 0;
            while(!isCopyMapTEmpty && j < s.length){
                const nextOccurrence = s[j];
                if(copyMapT[nextOccurrence]){
                    copyMapT[nextOccurrence]--;
                    if(!copyMapT[nextOccurrence]) mapTKeysCount--;
                }
                isCopyMapTEmpty = mapTKeysCount === 0;
                j++;
            }
            
            if(isCopyMapTEmpty){
                const newMinWindowSize = j - windowStart - 1;
               if(newMinWindowSize < minWindowSize){
                minWindowSize = newMinWindowSize;
                minWindowStart = windowStart;
                minWindowEnd = j - 1;
               }
            }

            mapTKeysCount =  keysMapT.length;
            copyMapT = {...mapT};
        }
    }

    return minWindowSize < Infinity ? s.substring(minWindowStart, minWindowEnd + 1) : "";
};