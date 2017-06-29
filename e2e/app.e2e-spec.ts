import { HROnboardingApplicationPage } from './app.po';

describe('hronboarding-application App', () => {
  let page: HROnboardingApplicationPage;

  beforeEach(() => {
    page = new HROnboardingApplicationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
