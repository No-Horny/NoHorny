import homeRouter from '../modules/Home/router';
import diaryRouter from '../modules/Diary/router';
import streakHistoryRouter from '../modules/StreakHistory/router';
import page404Router from '../modules/404/router';

type Route = {
  path: string;
  name: string;
  title?: string;
  component: any;
}

var routes: Route[] = [

]

routes = routes.concat(homeRouter)
routes = routes.concat(diaryRouter)
routes = routes.concat(streakHistoryRouter)
routes = routes.concat(page404Router)

export { routes }