import { AngUITemplatePage } from './app.po';

describe('ang-uitemplate App', () => {
  let page: AngUITemplatePage;

  beforeEach(() => {
    page = new AngUITemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
