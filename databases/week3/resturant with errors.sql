USE persianMeal;

-- Get all meals
 SELECT * FROM meal;
 
-- Add new meal
INSERT INTO meal(id, title, description, location,when_date, max_reservation, price, create_date)
VALUES(1, 'Ghrome Sabzi', 'Stew', 'Nørrebro Zafran Resturant', '2022-07-01 12:45:00', 5, 80.00, '2022-07-27');
INSERT INTO meal(id, title, description, location, when_date, max_reservation, price, create_date)
VALUES(2, 'Fesangun', 'Stew', 'Nørrebro Zafran Resturant', '2022-07-06 18:25:00', 7, 150.00, '2022-07-010');
INSERT INTO meal(id, title, description, location, when_date, max_reservation, price, create_date)
VALUES(3, 'Kebab', 'Lamb Meat And Vegtabels', 'Nørrebro Zafran Resturant', '2022-07-11 16:15:00', 3, 180.00, '2022-07-15');
INSERT INTO meal(id, title, description, location, when_date, max_reservation, price, create_date)
VALUES(4, 'Lobia Polo', 'Rice With Meat','Nørrebro Zafran Resturant', '2022-07-21 19:40:00', 2, 200.00,'2022-07-18');
INSERT INTO meal(id, title, description, location, when_date, max_reservation, price, create_date)
VALUES(5, 'Guge Kabeb', 'Chicken With Rice', 'Nørrebro Zafran Resturant', '2022-07-31 12:45:00', 3, 193.00, '2022-07-27');
INSERT INTO meal(id, title, description, location, when_date, max_reservation, price, create_date)
VALUES(6 ,'Mirzaghasemi', 'Eggpalnt With Bread','Nørrebro Zafran Resturant', '2022-07-04 12:45:00', 5, 80.00,'2022-07-31');



-- Get a meal with any id, fx 1

SELECT id FROM meal
WHERE meal.id = 4;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE meal
SET title = "Ash rashte" , descripton = "Iranian Soup"
WHERE meal.id = 6;

-- Delete a meal with any id, fx 1

DELETE FROM meal
WHERE meal.id = 3;



-- Get all reservation
 SELECT * FROM reservation;
 
-- Add a new reservation
INSERT INTO reservation(id, number_of_guests, crated_date, contact_phone_number, contact_name, contact_email, meal_id)
VALUES(1, "4", "2022-09-01 12:45:00", "+45 12257698", "Amir Husa", "noname12@gmail.com", 3);

INSERT INTO reservation(id, number_of_guests, crated_date, contact_phone_number, contact_name, contact_email, meal_id)
VALUES(2, "5", "2022-09-01 12:45:00", "+45 14562398", "Faranak Vatankhah", "somename45@gmail.com", 6);

INSERT INTO reservation(id, number_of_guests, crated_date, contact_phone_number, contact_name, contact_email, meal_id)
VALUES(3, "2", "2022-09-01 12:45:00", "+45 15869830", "Hassan Gholi", "popo13@yahoo.com", 1);


-- Get a reservation with any id, fx 1

SELECT id FROM reservation
WHERE reservation.id = 2;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE reservation
SET number_of_guests = "5"
WHERE reservation.id = 3;

-- Delete a reservation with any id, fx 1

DELETE FROM reservation
WHERE reservation.id = 1;



-- Get all review
 SELECT * FROM review;
 
-- Add a new review
INSERT INTO review(id, title, star, created_date, meal_id)
VALUES(1, "bad", 0, 2022-07-15,3);

INSERT INTO review(id, title, star, created_date, meal_id)
VALUES(2, "good",2, 2022-07-14,4);

INSERT INTO review(id, title, star, created_date, meal_id)
VALUES(3, "good", 1, 2022-07-13,6);

INSERT INTO review(id, title, star, created_date, meal_id)
VALUES(4, "fantastic", 5, 2022-07-12,5);

-- Get a review with any id, fx 1

SELECT id FROM review
WHERE review.id = 2;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE review
SET star = "4"
WHERE star.id = 1;

-- Delete a reservation with any id, fx 1

DELETE FROM review
WHERE review.id = 1;


-- Get meals that has a price smaller than a specific price fx 90

SELECT * FROM meal
WHERE meal.price < 90;

-- Get meals that still has available reservations

SELECT max_reservation.id, number_of_guests.id
(sum(max_reservation) - sum(number_of_guests)
) AS available_reservation
from meal join reservation on meal.id=reservation.id
group by meal.id;
-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT title FROM meal
WHERE title like "%Rød grød med fløde%";
-- Get meals that has been created between two dates

SELECT title FROM meal
WHERE create_date BETWEEN '2022-07-01' AND '2022-07-11';

-- Get only specific number of meals fx return only 5 meals

SELECT title FROM meal
limit 5 ;
-- Get reservations for a specific meal sorted by created_date
SELECT  id  FROM reservation 
ORDER BY created_date DESC;

-- Sort all meals by average number of stars in the reviews
SELECT  reviews.id, meal.id
FROM reviews,meal
JOIN reviews ON meal.id = number._reviews.id
ORDER BY number_reviews.id DESC;














