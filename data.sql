/*	Data for users	*/
insert into users (id, name, lastName, email, password, category_id, profilePic) values (1, 'Hetti', 'Shoebotham', 'hshoebotham0@desdev.cn', '$2a$10$vefCaCIrtI2OO3LwehezUu3Z2lXYpvny.0MdvM1zqPsJFUIVebRni', 1, 'homero-simpson.jpg');
insert into users (id, name, lastName, email, password, category_id, profilePic) values (2, 'Micaela', 'Finch', 'mfinch1@netvibes.com', '$2a$10$vefCaCIrtI2OO3LwehezUu3Z2lXYpvny.0MdvM1zqPsJFUIVebRni', 1, 'marge-simpson.jpg');
insert into users (id, name, lastName, email, password, category_id, profilePic) values (3, 'Bartholomeo', 'Wroughton', 'bwroughton2@google.com.au', '$2a$10$vefCaCIrtI2OO3LwehezUu3Z2lXYpvny.0MdvM1zqPsJFUIVebRni', 1, 'mr-burns.webp');
insert into users (id, name, lastName, email, password, category_id, profilePic) values (4, 'Marcela', 'Grimwade', 'mgrimwade3@wiley.com', '$2a$10$vefCaCIrtI2OO3LwehezUu3Z2lXYpvny.0MdvM1zqPsJFUIVebRni', 1, 'lisa-simpson.jpg');
insert into users (id, name, lastName, email, password, category_id, profilePic) values (5, 'Elene', 'Drance', 'edrance4@patch.com', '$2a$10$vefCaCIrtI2OO3LwehezUu3Z2lXYpvny.0MdvM1zqPsJFUIVebRni', 1, 'bart-simpson.jpg');
insert into users (id, name, lastName, email, password, category_id, profilePic) values (6, 'Moina', 'Roddan', 'mroddan5@webmd.com', '$2a$10$vefCaCIrtI2OO3LwehezUu3Z2lXYpvny.0MdvM1zqPsJFUIVebRni', 1, 'maggie-simpson.jpg');
insert into users (id, name, lastName, email, password, category_id, profilePic) values (7, 'Leigha', 'Formby', 'lformby6@usgs.gov', '$2a$10$vefCaCIrtI2OO3LwehezUu3Z2lXYpvny.0MdvM1zqPsJFUIVebRni', 1, 'smithers.jpg');
insert into users (id, name, lastName, email, password, category_id, profilePic) values (8, 'Laura', 'Jaulmes', 'ljaulmes7@pbs.org', '$2a$10$vefCaCIrtI2OO3LwehezUu3Z2lXYpvny.0MdvM1zqPsJFUIVebRni', 1, 'ned-flanders.webp');
insert into users (id, name, lastName, email, password, category_id, profilePic) values (9, 'Grier', 'Seedhouse', 'gseedhouse8@rambler.ru', '$2a$10$vefCaCIrtI2OO3LwehezUu3Z2lXYpvny.0MdvM1zqPsJFUIVebRni', 1, 'reverendo.jpg');
insert into users (id, name, lastName, email, password, category_id, profilePic) values (10, 'Raffarty', 'Howgill', 'rhowgill9@netvibes.com', '$2a$10$vefCaCIrtI2OO3LwehezUu3Z2lXYpvny.0MdvM1zqPsJFUIVebRni', 1, 'foto-1659480597346.jpg');
insert into users (id, name, lastName, email, password, category_id, profilePic) values (11, 'Admin', 'Luxer', 'admin@luxer.com', '$2a$10$Tu5onY0Pflkkab5oDWvJu.47QB0XrDdPBaw0.Iva.bQju5A/fOeku', 9, 'foto-1661871737135.png');

/*	Data for user_categories	*/
insert into user_categories (id, category) values (1, 'cliente');
insert into user_categories (id, category) values (2, 'vendedor');
insert into user_categories (id, category) values (9, 'admin');

/*	Data for products	*/
insert into products (id, name, description, images, material_id, category_id, price) values (1, 'Pato', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi veritatis ratione quasi facilis perferendis, optio esse pariatur vero laborum, quas nam quo cupiditate laudantium aut autem in magni voluptate!
', '1659101406196.webp', 2, 3, '123400');
insert into products (id, name, description, images, material_id, category_id, price) values (2, 'Sala Clásica', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi veritatis ratione quasi facilis perferendis, optio esse pariatur vero laborum, quas nam quo cupiditate laudantium aut autem in magni voluptate!
', '1660064119810.jpg', 1, 4, '150000');
insert into products (id, name, description, images, material_id, category_id, price) values (3, 'Silla Elegant', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi veritatis ratione quasi facilis perferendis, optio esse pariatur vero laborum, quas nam quo cupiditate laudantium aut autem in magni voluptate!
', '1660072349529.jpg', 3, 2, '75000');
insert into products (id, name, description, images, material_id, category_id, price) values (4, 'Maceta Cute', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi veritatis ratione quasi facilis perferendis, optio esse pariatur vero laborum, quas nam quo cupiditate laudantium aut autem in magni voluptate!
', '1660075401813.jpg', 3, 3, '4800');
insert into products (id, name, description, images, material_id, category_id, price) values (5, 'Sillon ItalianEdited', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi veritatis ratione quasi facilis perferendis, optio esse pariatur vero laborum, quas nam quo cupiditate laudantium aut autem in magni voluptate!
', '1660164514779.jpg', 3, 1, '89900');
insert into products (id, name, description, images, material_id, category_id, price) values (6, 'Escritorio White', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi veritatis ratione quasi facilis perferendis, optio esse pariatur vero laborum, quas nam quo cupiditate laudantium aut autem in magni voluptate!
', '1660075492754.jpg', 1, 3, '31000');
insert into products (id, name, description, images, material_id, category_id, price) values (7, 'Sillon Divan', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi veritatis ratione quasi facilis perferendis, optio esse pariatur vero laborum, quas nam quo cupiditate laudantium aut autem in magni voluptate!
', '1660075524489.jpg', 2, 3, '70900');
insert into products (id, name, description, images, material_id, category_id, price) values (8, 'Silla Italian', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi veritatis ratione quasi facilis perferendis, optio esse pariatur vero laborum, quas nam quo cupiditate laudantium aut autem in magni voluptate!
', '1660075576459.jpg', 1, 2, '11300');
insert into products (id, name, description, images, material_id, category_id, price) values (9, 'Lámpara Focus', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi veritatis ratione quasi facilis perferendis, optio esse pariatur vero laborum, quas nam quo cupiditate laudantium aut autem in magni voluptate!
', '1660075624566.jpg', 2, 1, '9300');

/*	Data for materials	*/
insert into materials (id, material) values (1, 'Material A');
insert into materials (id, material) values (2, 'Material B');
insert into materials (id, material) values (3, 'Material C');

/*	Data for categories (products)	*/
insert into categories (id, category) values (1, 'Category A');
insert into categories (id, category) values (2, 'Category B');
insert into categories (id, category) values (3, 'Category C');
insert into categories (id, category) values (4, 'Category D');
insert into categories (id, category) values (5, 'Category E');

/*	Data for purchases_products	*/
/*	Data for purchases	*/