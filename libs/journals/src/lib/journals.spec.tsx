import { render } from '@testing-library/react';

import Journals from './journals';

describe('Journals', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Journals />);
    expect(baseElement).toBeTruthy();
  });
});
