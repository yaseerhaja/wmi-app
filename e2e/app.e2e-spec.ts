import { WmiAppPage } from './app.po';

describe('wmi-app App', function() {
  let page: WmiAppPage;

  beforeEach(() => {
    page = new WmiAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
