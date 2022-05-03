import { render } from '@testing-library/react';

import PortfolioItem from './portfolio-item';

describe('PortfolioItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PortfolioItem />);
    expect(baseElement).toBeTruthy();
  });
});
