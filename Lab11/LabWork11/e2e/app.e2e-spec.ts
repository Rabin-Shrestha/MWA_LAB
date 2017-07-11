import { LabWork11Page } from './app.po';

describe('lab-work11 App', () => {
  let page: LabWork11Page;

  beforeEach(() => {
    page = new LabWork11Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
