import { NgCareProvidersPage } from './app.po';

describe('ng-care-providers App', () => {
  let page: NgCareProvidersPage;

  beforeEach(() => {
    page = new NgCareProvidersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
