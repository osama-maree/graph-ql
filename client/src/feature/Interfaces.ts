export interface todo {
  _id: String;
  completed: Boolean;
  content: String;
}
export interface props {
  todo: {
    _id: String;
    content: String;
    completed: Boolean;
  };
  handleComplete: (id: String, completed: Boolean) => Promise<void>;
  handleDelete: (id: String) => Promise<void>;
}