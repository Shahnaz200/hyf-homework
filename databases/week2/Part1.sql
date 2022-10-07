USE database_week2;
-- part 1:woprking with tasks
SELECT * FROM `task`;
SELECT * FROM `user`;
SELECT * FROM `status`;
   
    -- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id

    INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
 values ('work on your duty','i am practicing on database',
         '2022-08-27 10:54:10','2022-08-27 10:15:20','2022-08-28 22:10:25', 3,5);

-- Change the title of a task

  UPDATE task SET title = 'work on your duty' WHERE id = 25;
-- Change a task due date
  UPDATE task SET due_date = '2022-08-28 22:10:25' WHERE id = 25;
  -- Change a task status
  UPDATE task SET status_id = 3 WHERE id = 25;
  -- Mark a task as complete

  -- Delete a task
  DELETE FROM task WHERE id = 23;

 




