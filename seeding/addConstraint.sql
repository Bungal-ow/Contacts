ALTER TABLE agents ADD CONSTRAINT agents_pkey PRIMARY KEY (id);

ALTER TABLE properties ADD CONSTRAINT properties_pkey PRIMARY KEY (id);

ALTER TABLE property_agents ADD CONSTRAINT property_agents_pkey PRIMARY KEY (id);

ALTER TABLE users ADD CONSTRAINT users_pkey PRIMARY KEY (id);

ALTER TABLE bookings ADD CONSTRAINT bookings_pkey PRIMARY KEY (id);


ALTER TABLE property_agents ADD CONSTRAINT property_agents_agentID_fkey FOREIGN KEY ("agentID")
        REFERENCES agents (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL;

ALTER TABLE property_agents ADD CONSTRAINT property_agents_propertyID_fkey FOREIGN KEY ("propertyID")
        REFERENCES properties (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL;

ALTER TABLE property_agents ADD CONSTRAINT bookings_propertyID_fkey FOREIGN KEY ("propertyID")
        REFERENCES properties (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL;

ALTER TABLE property_agents ADD CONSTRAINT bookings_userID_fkey FOREIGN KEY ("userID")
        REFERENCES users (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL;