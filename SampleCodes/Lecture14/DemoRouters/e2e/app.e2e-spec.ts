import { DemoRoutersPage } from './app.po';

describe('demo-routers App', () => {
  let page: DemoRoutersPage;

  beforeEach(() => {
    page = new DemoRoutersPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
