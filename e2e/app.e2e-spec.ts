import { Ng4CareProvidersPage } from './app.po';

describe('ng4-care-providers App', () => {
  let page: Ng4CareProvidersPage;

  beforeEach(() => {
    page = new Ng4CareProvidersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
