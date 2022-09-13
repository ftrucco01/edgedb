CREATE MIGRATION m1uiqkltfcdeixs7enpfnab2ctvlyhjjyijnvjy5n5wcmvmlpgtvoa
    ONTO m15oob7bcx5t5a6ckh3ddewpkhvsiu7u5fjbccd6glwzuf7zge6u6a
{
  ALTER TYPE default::Article {
      CREATE PROPERTY str_array -> array<std::str>;
  };
};
