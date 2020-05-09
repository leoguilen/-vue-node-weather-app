import { FormatName } from '../../../utils/string.utils';

describe('FormatStateName Method', () => {
  it('should be returned a new string formatted replacing the caracter "-" for spaces', () => {
    const notFormattedString = 'Rio%20Grande%20Do%20Sul';
    const expectedFormattedString = 'Rio Grande Do Sul';

    const string = FormatName(notFormattedString);

    expect(string).toBe(expectedFormattedString);
  });
});
