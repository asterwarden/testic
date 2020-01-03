export class AppConst {
  static readonly LOGIN_ROUTER: string = 'login';
  static readonly DASHBOARD_ROUTER: string = 'dashboard';
  static readonly SUMMARY_RESULT_ROUTER: string = 'summary-result';
  static readonly CUSTOM_TEST_ROUTER: string = 'custom-test';
  static readonly ANIMALS_TEST_ROUTER: string = 'animals-test';
  static readonly RESULT_PAGE_ROUTER: string = 'result-page';

  static readonly ARR_CATEGORY: Array<any> = [
    {
      categoryName: 'Все',
      categoryLink: 'custom-test'
    },
    {
      categoryName: 'Животные',
      categoryLink: 'animals-test'
    }
  ];
}
