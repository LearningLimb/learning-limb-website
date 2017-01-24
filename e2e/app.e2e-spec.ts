import { LearninglimbUiPage } from './app.po';

describe('learninglimb-ui App', function() {
  let page: LearninglimbUiPage;

  beforeEach(() => {
    page = new LearninglimbUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
