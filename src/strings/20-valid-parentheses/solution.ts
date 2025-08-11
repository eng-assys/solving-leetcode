export function isValid(s: string): boolean {
    const stack: string[] = [];
    const openParenthesis = ['(', '[', "{"];
    const mapCorrectClosing = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (openParenthesis.includes(char)) {
            stack.unshift(char);
        } else {
            if (mapCorrectClosing[char] !== stack[0]) 
                return false;
            else stack.shift()
        }
    }

    return stack.length === 0;
};