const reverseString = require('./reversestring');

test('reverses a string', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
});

test('rejects any argument that isnt a string', () => {
    expect(reverseString(1)).toBe('must be a string');
})

test('reverses a string with number and punctuation', () => {
    expect(reverseString('a2!fdc')).toBe('cdf!2a');
})