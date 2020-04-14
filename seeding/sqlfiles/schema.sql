CREATE TABLE agents
(
    id serial NOT NULL,
    name character varying(255) NOT NULL,
    rating integer NOT NULL,
    "numberSales" integer NOT NULL,
    "phoneNum" character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    "createdAt" character varying(255) NOT NULL,
    "updatedAt" character varying(255) NOT NULL
);

CREATE TABLE properties
(
    id serial NOT NULL,
    address character varying(255) NOT NULL,
    "numBath" integer NOT NULL,
    "numBed" integer NOT NULL,
    "sqFt" integer NOT NULL,
    "marketValEst" integer NOT NULL,
    "monthlyPayment" integer NOT NULL,
    "createdAt" character varying(255) NOT NULL,
    "updatedAt" character varying(255) NOT NULL
);

CREATE TABLE property_agents
(
    id serial NOT NULL,
    "agentID" integer,
    title character varying(255) NOT NULL,
    "propertyID" integer,
    "createdAt" character varying(255) NOT NULL,
    "updatedAt" character varying(255) NOT NULL
);

CREATE TABLE users
(
    id serial NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    "createdAt" character varying(255) NOT NULL,
    "updatedAt" character varying(255) NOT NULL
);

CREATE TABLE bookings
(
    id serial NOT NULL,
    "bookingTime" character varying(255) NOT NULL,
    "userID" integer,
    "propertyID" integer,
    "createdAt" character varying(255) NOT NULL,
    "updatedAt" character varying(255) NOT NULL
);

CREATE TABLE contactagents
(
    id serial NOT NULL,
    name character varying(255) NOT NULL,
    "phoneNum" character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    message character varying(255) NOT NULL,
    "agentID" integer,
    "createdAt" character varying(255) NOT NULL,
    "updatedAt" character varying(255) NOT NULL
);