CREATE MIGRATION m1wlciyihxju3ywpdczphi63loga6imd4idgj6pv45ucvz5qwe2wzq
    ONTO m1uiqkltfcdeixs7enpfnab2ctvlyhjjyijnvjy5n5wcmvmlpgtvoa
{
  ALTER TYPE default::Article {
      ALTER PROPERTY str_array {
          RENAME TO tagList;
      };
  };
};
