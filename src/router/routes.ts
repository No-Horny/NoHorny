import { RouteRecordRaw } from "vue-router";

import homeRouter from "@/modules/Home/router";
import diaryRouter from "@/modules/Diary/router";
import settingsRouter from "@/modules/Settings/router";
import streakHistoryRouter from "@/modules/StreakHistory/router";
import feedbackRouter from "@/modules/Feedback/router";
import articlesRouter from "@/modules/Articles/router";
import page404Router from "@/modules/404/router";

let routes: RouteRecordRaw[] = [];

routes = routes.concat(
  homeRouter,
  articlesRouter,
  feedbackRouter,
  settingsRouter,
  page404Router,
  streakHistoryRouter,
  diaryRouter,
);

export { routes };
