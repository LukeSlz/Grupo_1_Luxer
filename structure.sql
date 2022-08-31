SET SQL_SAFE_UPDATES = 0;
SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `lastName` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `category_id` INT NOT NULL,
    `profilePic` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
);
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `images` VARCHAR(255) NOT NULL,
    `material_id` INT NOT NULL,
    `category_id` INT NOT NULL,
    `price` INT NOT NULL,
    PRIMARY KEY (`id`)
);
DROP TABLE IF EXISTS `materials`;
CREATE TABLE `materials`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `material` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
);
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `category` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
);
DROP TABLE IF EXISTS `purchases`;
CREATE TABLE `purchases`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `user_id` INT NOT NULL,
    `purchasesProducts_id` INT NOT NULL,
    `totalPrice` INT NOT NULL,
    PRIMARY KEY (`id`)
);
DROP TABLE IF EXISTS `purchases_products`;
CREATE TABLE `purchases_products`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `product_id` INT NOT NULL,
    `quantity` INT NOT NULL,
    `partialPrice` INT NOT NULL,
    PRIMARY KEY (`id`)
);
DROP TABLE IF EXISTS `user_categories`;
CREATE TABLE `user_categories`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `category` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
);
ALTER TABLE `users` ADD FOREIGN KEY (`category_id`) REFERENCES `user_categories`(`id`);
ALTER TABLE `purchases` ADD FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);
ALTER TABLE `purchases` ADD FOREIGN KEY (`purchasesProducts_id`) REFERENCES `purchases_products`(`id`);
ALTER TABLE `purchases_products` ADD FOREIGN KEY (`product_id`) REFERENCES `products`(`id`);
ALTER TABLE `products` ADD FOREIGN KEY (`material_id`) REFERENCES `materials`(`id`);
ALTER TABLE `products` ADD FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`);