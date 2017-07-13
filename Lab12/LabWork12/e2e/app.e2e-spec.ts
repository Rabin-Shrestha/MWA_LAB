import { LabWork12Page } from './app.po';

describe('lab-work12 App', () => {
  let page: LabWork12Page;

  beforeEach(() => {
    page = new LabWork12Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
