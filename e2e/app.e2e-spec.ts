import { ShoukathAppPage } from './app.po';

describe('shoukath-app App', () => {
  let page: ShoukathAppPage;

  beforeEach(() => {
    page = new ShoukathAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
