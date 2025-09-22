import React, { useState } from "react";
import { Button, Input, List, Typography } from "antd";
const { TextArea } = Input;
const ToDoPage = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [content, setContent] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const handleAddClick = () => {
    setShowInput(true);
  };
  const handleSubmit = () => {
    if (newTask.trim() === "") return alert("Please enter a task");
    setTasks([...tasks, newTask]);
    setNewTask("");
    setShowInput(false);
  };

  const handleDelete = (indexToDelete) => {
    const updateTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updateTasks);
  };

  return (
    <>
      <Typography.Title level={2} style={style.Title}>
        Basic To-Do app
      </Typography.Title>

      <Button
        style={style.AddTask}
        type="primary"
        onClick={() => handleAddClick()}
      >
        Add Task
      </Button>
      {showInput && (
        <div style={style.Task}>
          <Typography.Title level={5} style={style.Title}>
            Title
          </Typography.Title>
          <Input
            style={style.TitleInput}
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Type your task name"
          />
          <Typography.Title level={5} style={style.Title}>
            Content
          </Typography.Title>
          <TextArea
            rows={4}
            placeholder="Type your task details here"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={style.Content}
          />
          <Button type="primary" onClick={handleSubmit} style={style.Submit}>
            Submit
          </Button>
        </div>
      )}
      <List
        dataSource={tasks}
        renderItem={(task, index) => (
          <List.Item
            style={style.ListItem}
            key={index}
            actions={[
              <Button type="primary" danger onClick={() => handleDelete(index)}>
                {" "}
                delete{" "}
              </Button>,
            ]}
          >
            {" "}
            {task}
          </List.Item>
        )}
      />
    </>
  );
};

export default ToDoPage;

const style = {
  ListItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
  },
  AddTask: {
    alignItems: "center",
    padding: "10px 20px",
    margin: "10px",
  },
  TitleInput: {
    width: "300px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    padding: "5px 10px",
    fontSize: "18px",
    margin: "10px",
  },
  Content: {
    width: "80%",
    height: "200px",
    padding: "5px 10px",
    border: "1px solid #ccc",
    fontSize: "16px",
    margin: "10px",
    resize: "vertical",
    boxShadow: "none",
  },
  Title: {
    margin: "10px",
  },
  Task: {
    display: "flex",
    flexDirection: "column",
  },
  Submit: {
    width: "80px",
    padding: "10px 20px",
    margin: "10px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#4CAF50",
  },
};
