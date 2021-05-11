import * as React from 'react';
import { render } from '@testing-library/react';

import { Demo } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<Demo  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Demo />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
