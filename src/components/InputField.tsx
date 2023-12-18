import "./styles.css";

type Props = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
};

export default function InputField({ todo, setTodo, handleAdd }: Props) {
  return (
    <form className="input">
      <input
        placeholder="Enter a task"
        className="input__box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onSubmit={handleAdd} className="input__submit" type="submit">
        Go
      </button>
    </form>
  );
}
