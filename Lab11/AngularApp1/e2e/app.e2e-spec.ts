import { AngularApp1Page } from './app.po';

describe('angular-app1 App', () => {
  let page: AngularApp1Page;

  beforeEach(() => {
    page = new AngularApp1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
