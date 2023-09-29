import { Box, Typography, TextField } from "@mui/material";
import { useStyles } from "./style/useStyle";
import UncompletedItem from "./component/UncompletedItem";
import CompletedItem from "./component/CompletedItem";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_TODO, FETCH_TASK, TOGGLE_TODO } from "./feature/query";
interface todo {
  _id: String;
  completed: Boolean;
  content: String;
}
const App: React.FunctionComponent<any> = () => {
  const classes = useStyles();
  const [createTodo] = useMutation(CREATE_TODO); 
  const [toggleTodo] = useMutation(TOGGLE_TODO); 
  const [text, setText] = useState<String>("");
  const { data, refetch, loading } = useQuery(FETCH_TASK);
  const [completedTasks, setCompletedTasks] = useState<todo[]>([]);
  const [uncompletedTasks, setUnCompletedTasks] = useState<todo[]>([]);
  useEffect(() => {
    if (data) {
      setCompletedTasks(data.getTodo.filter((todo: todo) => todo.completed));
      setUnCompletedTasks(data.getTodo.filter((todo: todo) => !todo.completed));
    }
  }, [data]);
  const handleKeyPress = async (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      try {
        const { data } = await createTodo({ variables: { content: text } });
        const newTodo: todo = data?.createTodo;
        setUnCompletedTasks((prev) => [...(prev || []), newTodo]);
        setText(() => "");
      } catch (error) {
        console.error("Error creating post:", error);
      }
    }
  };
  const handleComplete = async (id: String, completed: Boolean) => {
    await toggleTodo({ variables: { id:id, completed: completed } });
    refetch();
  };
  return (
    <>
      {!loading ? (
        <Box className={classes.app} p={3} mt={5}>
          <Typography
            variant="h4"
            component={"h2"}
            my={2}
            className={classes.title}
          >
            Osama - Task &#128513;
          </Typography>
          <TextField
            className={classes.inputTodo}
            value={text}
            onKeyPress={handleKeyPress}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setText(e.target.value)
            }
            inputProps={{
              style: {
                color: "white",
              },
            }}
            placeholder="Add New Task..."
            type="text"
          />
          <Typography
            className={`${classes.todo}`}
            variant="body2"
            component={"div"}
            mt={4}
          >
            <Typography
              className={`${classes.todo}`}
              variant="body2"
              component={"div"}
            >
              {uncompletedTasks?.map((todo: todo) => (
                <UncompletedItem
                  key={todo._id}
                  todo={todo}
                  handleComplete={handleComplete}
                />
              ))}
            </Typography>

            <Typography
              className={`${classes.todo}`}
              variant="body2"
              component={"div"}
            >
              {!!completedTasks.length && (
                <Typography variant="body1" color="white">
                  Completed Task
                </Typography>
              )}
              {completedTasks.map((todo: todo) => (
                <CompletedItem
                  todo={todo}
                  key={todo._id}
                  handleComplete={handleComplete}
                />
              ))}
            </Typography>
          </Typography>
        </Box>
      ) : (
        "loading"
      )}
    </>
  );
};

export default App;
