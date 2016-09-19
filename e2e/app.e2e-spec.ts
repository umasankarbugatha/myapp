import { OecAppPage } from './app.po';

describe('oec-app App', function() {
  let page: OecAppPage;

  beforeEach(() => {
    page = new OecAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
