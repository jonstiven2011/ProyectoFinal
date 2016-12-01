import { Electiva2ProFinalPage } from './app.po';

describe('electiva2-pro-final App', function() {
  let page: Electiva2ProFinalPage;

  beforeEach(() => {
    page = new Electiva2ProFinalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
