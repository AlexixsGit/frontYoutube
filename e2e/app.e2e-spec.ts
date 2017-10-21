import { MyYoutubeAppPage } from './app.po';

describe('my-youtube-app App', () => {
  let page: MyYoutubeAppPage;

  beforeEach(() => {
    page = new MyYoutubeAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
