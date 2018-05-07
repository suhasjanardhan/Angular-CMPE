import { AngularCmpePage } from './app.po';

describe('angular-cmpe App', function() {
  let page: AngularCmpePage;

  beforeEach(() => {
    page = new AngularCmpePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
