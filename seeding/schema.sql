CREATE TABLE agents
(
    id serial NOT NULL,
    name character varying(255) NOT NULL,
    rating integer NOT NULL,
    "numberSales" integer NOT NULL,
    "phoneNum" character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    "createdAt" character varying(255) NOT NULL,
    "updatedAt" character varying(255) NOT NULL,
    CONSTRAINT agents_pkey PRIMARY KEY (id)
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
    "updatedAt" character varying(255) NOT NULL,
    CONSTRAINT properties_pkey PRIMARY KEY (id)
);

CREATE TABLE property_agents
(
    id serial NOT NULL,
    "agentID" integer,
    title character varying(255) NOT NULL,
    "propertyID" integer,
    "createdAt" character varying(255) NOT NULL,
    "updatedAt" character varying(255) NOT NULL,
    CONSTRAINT property_agents_pkey PRIMARY KEY (id),
    CONSTRAINT property_agents_agentID_fkey FOREIGN KEY ("agentID")
        REFERENCES agents (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT property_agents_propertyID_fkey FOREIGN KEY ("propertyID")
        REFERENCES properties (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
);

CREATE TABLE users
(
    id serial NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    "createdAt" character varying(255) NOT NULL,
    "updatedAt" character varying(255) NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY (id)
);

CREATE TABLE bookings
(
    id serial NOT NULL,
    "bookingTime" character varying(255) NOT NULL,
    "userID" integer,
    "propertyID" integer,
    "createdAt" character varying(255) NOT NULL,
    "updatedAt" character varying(255) NOT NULL,
    CONSTRAINT bookings_pkey PRIMARY KEY (id),
    CONSTRAINT bookings_propertyID_fkey FOREIGN KEY ("propertyID")
        REFERENCES properties (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT bookings_userID_fkey FOREIGN KEY ("userID")
        REFERENCES users (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
);