module default {
  type Person {
    required property first_name -> str;
    required property last_name -> str;
  }

  type Article {
    property slug -> str;
    property title -> str;
    property description -> str;
    property body -> str;
    property tagList -> array<str>;
    property createdAt -> datetime;
    property updatedAt -> datetime;
    property favorited -> bool;
    property favoritesCount -> int16;
    property author -> json;
  }
};
