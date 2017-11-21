import { InfiniteScrollPage } from './app.po';

describe('infinite-scroll App', () => {
  let page: InfiniteScrollPage;

  beforeEach(() => {
    page = new InfiniteScrollPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
