CREATE MIGRATION m1iy6eix2cmml3ijm7ixutacb2wsvhzfm4gqrpxm3eytxcvax2y7ca
    ONTO initial
{
  CREATE TYPE default::Person {
      CREATE REQUIRED PROPERTY first_name -> std::str;
      CREATE REQUIRED PROPERTY last_name -> std::str;
  };
};
