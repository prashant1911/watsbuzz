import { WatsbuzzPage } from './app.po';

describe('watsbuzz App', () => {
  let page: WatsbuzzPage;

  beforeEach(() => {
    page = new WatsbuzzPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
