import { LabWork13Page } from './app.po';

describe('lab-work13 App', () => {
  let page: LabWork13Page;

  beforeEach(() => {
    page = new LabWork13Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
