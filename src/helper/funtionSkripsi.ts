// Case Folding
const caseFolding = (str: string) => {
    return str.toLowerCase();
};

// White Space Removal
const removeWhiteSpace = (str: string) => {
    return str.replace(/\s+/g, ' ').trim();
};

// Tokenizing
const tokenize = (str: string) => {
    return removeWhiteSpace(str).split(' ');
};

// Punctuation Removal
const removePunctuation = (str: string) => {
    return str.replace(/[^\w\s]/gi, '');
};
