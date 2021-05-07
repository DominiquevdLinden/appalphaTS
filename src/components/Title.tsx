type Props = {
  content: string;
};

export default function Title({ content }: Props) {
  return (
    <div>
      <h1>{content}</h1>
    </div>
  );
}
