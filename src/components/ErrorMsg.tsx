interface IProps {
  err: string;
}
export const ErrorMsg = ({ err }: IProps) => {
  return <div className="flex items-center justify-center">{err}</div>;
};
