import { AccountingPage } from './app.po';

describe('accounting App', () => {
  let page: AccountingPage;

  beforeEach(() => {
    page = new AccountingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
