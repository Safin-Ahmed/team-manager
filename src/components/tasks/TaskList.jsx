import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CreateTaskForm from "./CreateTaskForm";
import CustomList from "../UI/List";

const TaskList = ({ project, tasks }) => {
  const [showTaskForm, setShowTaskForm] = useState(false);

  const openHandler = () => {
    setShowTaskForm(true);
  };

  const closeHandler = () => {
    setShowTaskForm(false);
  };

  return (
    <>
      {tasks.length === 0 && (
        <>
          <Typography sx={{ my: 3 }} variant="body1">
            No Tasks Found!
          </Typography>
        </>
      )}

      {tasks.length > 0 && <CustomList projectId={project.id} tasks={tasks} />}

      <Button onClick={openHandler} sx={{ padding: 0, mt: 5 }}>
        Add Task
      </Button>

      {showTaskForm && (
        <CreateTaskForm
          projectId={project.id}
          parentId="0"
          open={showTaskForm}
          handleClose={closeHandler}
        />
      )}
    </>
  );
};

export default TaskList;
