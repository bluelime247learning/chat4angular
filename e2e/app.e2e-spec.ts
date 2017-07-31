import { Chat4angularPage } from './app.po';

describe('chat4angular App', () => {
  let page: Chat4angularPage;

  beforeEach(() => {
    page = new Chat4angularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
