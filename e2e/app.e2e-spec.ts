import { GatcowspPage } from './app.po';

describe('gatcowsp App', () => {
  let page: GatcowspPage;

  beforeEach(() => {
    page = new GatcowspPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
