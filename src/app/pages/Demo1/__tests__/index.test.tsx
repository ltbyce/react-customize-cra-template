import * as React from 'react';
import { render } from '@testing-library/react';

import { Demo1 } from '..';

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

describe('<Demo1  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Demo1 />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
