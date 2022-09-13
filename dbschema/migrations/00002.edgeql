CREATE MIGRATION m1vgytmpech5bhp5gxjf5xxq5f5miad7fj4mw5bauvk4fq6ee6uooa
    ONTO m1iy6eix2cmml3ijm7ixutacb2wsvhzfm4gqrpxm3eytxcvax2y7ca
{
  CREATE TYPE default::Article {
      CREATE PROPERTY body -> std::str;
      CREATE PROPERTY description -> std::str;
      CREATE PROPERTY tagList -> std::str;
      CREATE REQUIRED PROPERTY title -> std::str;
  };
};
