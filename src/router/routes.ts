import { RouteRecordRaw } from "vue-router";

import homeRouter from "@/modules/Home/router";
import diaryRouter from "@/modules/Diary/router";
import settingsRouter from "@/modules/Settings/router";
import streakHistoryRouter from "@/modules/StreakHistory/router";
import page404Router from "@/modules/404/router";

let routes: RouteRecordRaw[] = [];

routes = routes.concat(homeRouter);
routes = routes.concat(diaryRouter);
routes = routes.concat(streakHistoryRouter);
routes = routes.concat(page404Router);
routes = routes.concat(settingsRouter);

export { routes };
