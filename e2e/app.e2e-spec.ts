import { TitleChangerPage } from './app.po';

describe('title-changer App', () => {
  let page: TitleChangerPage;

  beforeEach(() => {
    page = new TitleChangerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
