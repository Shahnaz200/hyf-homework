-- PART3
-- Get all the tasks assigned to users whose email ends in @spotify.com
USE database_week2;
SET NAMES utf8mb4;

/*Get all the tasks assigned to users whose email ends in @spotify.com*/

SELECT *
FROM user
WHERE user.email like'%@spotify.com';

/*Get all the tasks for 'Donald Duck' with status 'Not started'*/

SELECT *
FROM `user`
JOIN user_task ON user.id
JOIN task ON task.id 
JOIN status ON status.id
WHERE user.name REGEXP 'Donald Duck'
AND status.name REGEXP 'Not started';

/*Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)*/
SELECT user.name, task.title, task.created
FROM `user`
JOIN user_task ON user.id
JOIN task ON task.id 
JOIN `status` ON status.id 
WHERE user.name REGEXP 'Maryrose Meadows'
AND month(created) = 09;

/*Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)*/
SELECT COUNT(*), monthname(created)
FROM `task`
GROUP BY monthname(created);