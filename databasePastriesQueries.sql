-- Create table

CREATE TABLE pastries (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(30) NOT NULL,
  price varchar(30) NOT NULL,
  description varchar(400)
);

-- Inserting pastry
INSERT INTO pastries
(name, price, description)
VALUES

('Eclair', '2.45', 'This is a decadent crunchy pastry with a creamy, rich filling topped with a drizzle of dark chocolate. Eclairs are the height of sweet, indulgent treats.'),
('Croissant', '1.4','This flaky, buttery, golden-brown croissant with layers of crisp pastry crumbles beautifully in your mouth, revealing a soft, airy, and delicate interior. The slightly sweet, rich, and nutty flavor of the dough makes it the ultimate indulgent treat.'),
('Cupcake', '1.3', 'This soft and fluffy cupcake, baked to perfection, is like a cloud in your mouth, melting with every bite. The sweetness of the cake is perfectly balanced by the rich and creamy frosting.'),
('Macaron', '1.0', 'This macaron is a delicate, bite-sized treat that is sure to tantalize your taste buds. The crisp and chewy exterior sandwiches a generous dollop of creamy, flavored filling and creates a perfect balance of textures and flavors.');

-- get all Pastries
SELECT * FROM pastries
