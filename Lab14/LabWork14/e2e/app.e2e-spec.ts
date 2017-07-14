import { LabWork14Page } from './app.po';

describe('lab-work14 App', () => {
  let page: LabWork14Page;

  beforeEach(() => {
    page = new LabWork14Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
