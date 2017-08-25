import { CatFanciersPage } from './app.po';

describe('cat-fanciers App', () => {
  let page: CatFanciersPage;

  beforeEach(() => {
    page = new CatFanciersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
