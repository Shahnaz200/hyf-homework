-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema persianMeal
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema persianMeal
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `persianMeal` DEFAULT CHARACTER SET utf8 ;
USE `persianMeal` ;

-- -----------------------------------------------------
-- Table `persianMeal`.`meal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `persianMeal`.`meal` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `description` TEXT NOT NULL,
  `location` VARCHAR(45) NOT NULL,
  `when` DATETIME NOT NULL,
  `max_reservation` INT NOT NULL,
  `price` DECIMAL(5,2) NOT NULL,
  `create_date` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `persianMeal`.`reservation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `persianMeal`.`reservation` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `number_of_guests` INT NOT NULL,
  `crated_date` DATETIME NOT NULL,
  `contact_phone_number` INT(10) NOT NULL,
  `contact_name` VARCHAR(45) NOT NULL,
  `contact_email` VARCHAR(45) NOT NULL,
  `meal_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_reservation_meal_idx` (`meal_id` ASC) VISIBLE,
  CONSTRAINT `fk_reservation_meal`
    FOREIGN KEY (`meal_id`)
    REFERENCES `persianMeal`.`meal` (`id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `persianMeal`.`review`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `persianMeal`.`review` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `star` INT NOT NULL,
  `created_date` DATETIME NOT NULL,
  `meal_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_review_meal1_idx` (`meal_id` ASC) VISIBLE,
  CONSTRAINT `fk_review_meal1`
    FOREIGN KEY (`meal_id`)
    REFERENCES `persianMeal`.`meal` (`id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
