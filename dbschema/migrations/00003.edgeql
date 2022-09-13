CREATE MIGRATION m15oob7bcx5t5a6ckh3ddewpkhvsiu7u5fjbccd6glwzuf7zge6u6a
    ONTO m1vgytmpech5bhp5gxjf5xxq5f5miad7fj4mw5bauvk4fq6ee6uooa
{
  ALTER TYPE default::Article {
      CREATE PROPERTY author -> std::json;
  };
  ALTER TYPE default::Article {
      CREATE PROPERTY createdAt -> std::datetime;
  };
  ALTER TYPE default::Article {
      CREATE PROPERTY favorited -> std::bool;
  };
  ALTER TYPE default::Article {
      CREATE PROPERTY favoritesCount -> std::int16;
  };
  ALTER TYPE default::Article {
      ALTER PROPERTY tagList {
          RENAME TO slug;
      };
  };
  ALTER TYPE default::Article {
      ALTER PROPERTY title {
          RESET OPTIONALITY;
      };
  };
  ALTER TYPE default::Article {
      CREATE PROPERTY updatedAt -> std::datetime;
  };
};
