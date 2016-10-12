import { KimAngularPage } from './app.po';

describe('kim-angular App', function() {
  let page: KimAngularPage;

  beforeEach(() => {
    page = new KimAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
