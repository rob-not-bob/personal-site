import { render } from '@testing-library/react';

import { PostListing } from './post-listing';

describe('PortfolioItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PostListing />);
    expect(baseElement).toBeTruthy();
  });
});
