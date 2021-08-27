<template>
  <div class="article-page">
    <div
      v-if="
        !appArticles[Number($route.params.id)].supportedLangs.includes(
          userPreferences.lang
        )
      "
    >
      <h3>Unfortunately, this article is not available in your language.</h3>
    </div>

    <div class="article">
      <h3>
        {{ appArticles[Number($route.params.id)].title[userPreferences.lang] }}
      </h3>

      <span style="white-space: pre-line">
        {{
          appArticles[Number($route.params.id)].content[userPreferences.lang]
        }}
      </span>

      <div v-if="appArticles[Number($route.params.id)].references">
        <br /><br />
        <h4>{{ appArticles[Number($route.params.id)].referencesTitle }}</h4>
        <ul>
          <li
            v-for="(reference, index) in appArticles[Number($route.params.id)]
              .references"
            :key="index"
          >
            <a
              :href="reference.url"
              target="_blank"
              rel="noopener noreferrer"
              >{{ reference.title }}</a
            >
          </li>
        </ul>
      </div>

      <div v-if="appArticles[Number($route.params.id)].phrase.havePhrase">
        <br />
        <br />
        <p>
          <cite
            >❝{{
              appArticles[Number($route.params.id)].phrase[
                userPreferences.lang
              ]
            }}❞</cite
          >
        </p>
        <small>
          <em> ~ {{ appArticles[Number($route.params.id)].phrase.author }} </em>
        </small>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { userPreferences } from "@/shared/user-preferences";
import { defineComponent } from "vue";
import { appArticles } from "./appArticles";

export default defineComponent({
  name: "Article Item",
  data() {
    return {
      appArticles,
      userPreferences,
    };
  },
});
</script>

<style lang="scss" scoped>
.article-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
}
.article {
  width: min(580px, 100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
h3 {
  font-weight: 500;
  text-align: center;
}
</style>
