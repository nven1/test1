interface ILogger {
  render: () => JSX.Element;
  overwriteName?: string;
}

const Logger: React.FC<ILogger> = ({ render, overwriteName }) => {
  const name = overwriteName ?? render().type.name;
  console.log(`Hello from ${name}`);
  return render();
};

export default Logger;
